const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

// Esta función se ejecuta automáticamente cuando eliminas un usuario de la colección 'users' en Firestore
exports.eliminarUsuarioAuth = functions.firestore
    .document('users/{userId}')
    .onDelete(async (snap, context) => {
        const userId = context.params.userId;
        try {
            await admin.auth().deleteUser(userId);
            console.log(`Usuario ${userId} eliminado correctamente de Authentication.`);
        } catch (error) {
            console.error(`Error eliminando usuario ${userId} de Auth:`, error);
        }
    });