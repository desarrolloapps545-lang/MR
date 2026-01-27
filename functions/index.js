const functions = require("firebase-functions/v1");
const admin = require("firebase-admin");

admin.initializeApp();

// Esta función se ejecuta automáticamente cuando eliminas un usuario
// de la colección "users" en Firestore
exports.eliminarUsuarioAuth = functions.firestore
    .document("users/{userId}")
    .onDelete(async (snap, context) => {
      const userId = context.params.userId;
      try {
        await admin.auth().deleteUser(userId);
        console.log(`Usuario ${userId} eliminado de Authentication.`);
      } catch (error) {
        console.error(`Error eliminando usuario ${userId} de Auth:`, error);
      }
    });

// Función para cambiar contraseña (llamada desde la app)
exports.cambiarPassword = functions.https.onCall(async (data, context) => {
  const uid = data.uid;
  const newPassword = data.password;

  // Validaciones básicas
  if (!uid || !newPassword) {
    throw new functions.https.HttpsError("invalid-argument", "Faltan datos.");
  }
  if (newPassword.length < 6) {
    throw new functions.https.HttpsError("invalid-argument", "La contraseña debe tener al menos 6 caracteres.");
  }

  try {
    await admin.auth().updateUser(uid, {
      password: newPassword,
    });
    return {success: true, message: "Contraseña actualizada."};
  } catch (error) {
    console.error("Error al cambiar password:", error);
    throw new functions.https.HttpsError("internal", error.message);
  }
});