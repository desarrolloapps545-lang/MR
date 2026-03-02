// Credenciales de Supabase proporcionadas
const SUPABASE_PROJECT_ID = 'fiahwrkuouceyncxoukj';
const SUPABASE_KEY = 'sb_publishable_9lTA1sPLY9iSTASjrCgE6g_Cr1qQ_Re';
const SUPABASE_URL = `https://${SUPABASE_PROJECT_ID}.supabase.co`;

// Inicializar el cliente de Supabase
const sbClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Referencias al DOM
const loginBtn = document.getElementById('loginBtn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const statusMessage = document.getElementById('statusMessage');
const loginContainer = document.getElementById('login-container');
const mainMenuContainer = document.getElementById('main-menu-container');
const mainMenuWelcome = document.getElementById('main-menu-welcome');
const btnUsersMgmt = document.getElementById('btn-users-mgmt');
const btnClientsMgmt = document.getElementById('btn-clients-mgmt');
const btnMunicipalitiesMgmt = document.getElementById('btn-municipalities-mgmt');
const btnDashboardControl = document.getElementById('btn-dashboard-control');
const btnReportsSection = document.getElementById('btn-reports-section');
const btnInversionesMenu = document.getElementById('btn-inversiones-menu');
const btnDatabaseMenu = document.getElementById('btn-database-menu');
const btnAdminReportsMenu = document.getElementById('btn-admin-reports-menu');
const logoutBtn = document.getElementById('logoutBtn');
const dashboardContainer = document.getElementById('dashboard-container');
const clientsContainer = document.getElementById('clients-container');
const municipalitiesContainer = document.getElementById('municipalities-container');
const dashboardControlContainer = document.getElementById('dashboard-control-container');
const reportsContainer = document.getElementById('reports-container');
const adminReportsContainer = document.getElementById('admin-reports-container');
const userNameDisplay = document.getElementById('user-name-display');
const usersTableBody = document.getElementById('users-table-body');
const clientsTableBody = document.getElementById('clients-table-body');
const rememberMeCheckbox = document.getElementById('rememberMe');
const forgotPassBtn = document.getElementById('forgotPassBtn');

// Referencias Barra Lateral
const sidebarContainer = document.getElementById('sidebar-container');
const sbBtnUsers = document.getElementById('sb-btn-users');
const sbBtnClients = document.getElementById('sb-btn-clients');
const sbBtnMunis = document.getElementById('sb-btn-munis');
const sbBtnDashboard = document.getElementById('sb-btn-dashboard');
const sbBtnReports = document.getElementById('sb-btn-reports');
const sbBtnImport = document.getElementById('sb-btn-import');
const sbBtnExport = document.getElementById('sb-btn-export');
const sbBtnInversiones = document.getElementById('sb-btn-inversiones');
const sbBtnDatabase = document.getElementById('sb-btn-database');
const sbBtnAdminReports = document.getElementById('sb-btn-admin-reports');
const sbBtnRefresh = document.getElementById('sb-btn-refresh');
const sbBtnLogout = document.getElementById('sb-btn-logout');

// Referencias del Modal de Edición
const editModal = document.getElementById('editModal');
const editName = document.getElementById('edit-name');
const editCedula = document.getElementById('edit-cedula');
const editEmail = document.getElementById('edit-email');
const editDept = document.getElementById('edit-dept');
const editMuniCount = document.getElementById('edit-muni-count');
// Referencias del Modal de Creación
const createUserBtn = document.getElementById('createUserBtn');
const createModal = document.getElementById('createModal');
const createName = document.getElementById('create-name');
const createCedula = document.getElementById('create-cedula');
const createEmail = document.getElementById('create-email');
const createPassword = document.getElementById('create-password');
const createRole = document.getElementById('create-role');
const createDept = document.getElementById('create-dept');
const createMuniCount = document.getElementById('create-muni-count');
// Referencias del Modal de Municipios
const muniModal = document.getElementById('muniModal');
const muniContainer = document.getElementById('muni-container');
const confirmMuniBtn = document.getElementById('confirmMuniBtn');
const editRole = document.getElementById('edit-role');
// Referencias del Modal de Password
const passwordModal = document.getElementById('passwordModal');
const passUserName = document.getElementById('pass-user-name');
const newPasswordInput = document.getElementById('new-password');
const savePassBtn = document.getElementById('savePassBtn');
const cancelPassBtn = document.getElementById('cancelPassBtn');
// Referencias Modal Olvidé Contraseña y Botón Dev
const forgotPassModal = document.getElementById('forgotPassModal');
const forgotName = document.getElementById('forgot-name');
const forgotEmail = document.getElementById('forgot-email');
const confirmForgotBtn = document.getElementById('confirmForgotBtn');
const cancelForgotBtn = document.getElementById('cancelForgotBtn');
const forgotRole = document.getElementById('forgot-role');
const devChangePassBtn = document.getElementById('devChangePassBtn');
// Referencias Modal Actualizar Datos Dev
const devUpdateDataBtn = document.getElementById('devUpdateDataBtn');
const devUpdateModal = document.getElementById('devUpdateModal');
const devEditName = document.getElementById('dev-edit-name');
const devEditCedula = document.getElementById('dev-edit-cedula');
const devEditEmail = document.getElementById('dev-edit-email');
const saveDevUpdateBtn = document.getElementById('saveDevUpdateBtn');
const cancelDevUpdateBtn = document.getElementById('cancelDevUpdateBtn');
// Referencias Modal Detalles Cliente
const clientDetailsModal = document.getElementById('clientDetailsModal');
const closeClientDetailsX = document.getElementById('closeClientDetailsX');
// Referencias Modal Editar Cliente
const editClientModal = document.getElementById('editClientModal');
const editClientName = document.getElementById('edit-client-name');
const editClientCedula = document.getElementById('edit-client-cedula');
const editClientPhone = document.getElementById('edit-client-phone');
const editClientAddress = document.getElementById('edit-client-address');
const editClientDept = document.getElementById('edit-client-dept');
const editClientMuni = document.getElementById('edit-client-muni');
const editClientAdvisor = document.getElementById('edit-client-advisor');
const editClientFrequency = document.getElementById('edit-client-frequency');
const saveEditClientBtn = document.getElementById('saveEditClientBtn');
const cancelEditClientBtn = document.getElementById('cancelEditClientBtn');
// Referencias Modal Nuevo Cliente
const createClientModal = document.getElementById('createClientModal');
const createClientName = document.getElementById('create-client-name');
const createClientCedula = document.getElementById('create-client-cedula');
const createClientPhone = document.getElementById('create-client-phone');
const createClientAddress = document.getElementById('create-client-address');
const createClientDept = document.getElementById('create-client-dept');
const createClientMuni = document.getElementById('create-client-muni');
const createClientAdvisor = document.getElementById('create-client-advisor');
const createClientFrequency = document.getElementById('create-client-frequency');
const saveCreateClientBtn = document.getElementById('saveCreateClientBtn');
const cancelCreateClientBtn = document.getElementById('cancelCreateClientBtn');
// Referencias Modal Opciones Eliminación
const deleteClientOptionsModal = document.getElementById('deleteClientOptionsModal');
const deleteClientNameDisplay = document.getElementById('delete-client-name-display');
const btnDeleteExtraOnly = document.getElementById('btn-delete-extra-only');
const btnDeleteFullHistory = document.getElementById('btn-delete-full-history');
const btnCancelDeleteOptions = document.getElementById('btn-cancel-delete-options');

// Referencias Modales Cupo Extra
const warningMoraModal = document.getElementById('warningMoraModal');
const moraPaymentsCount = document.getElementById('mora-payments-count');
const moraAuthInput = document.getElementById('mora-auth-input');
const btnMoraAccept = document.getElementById('btn-mora-accept');
const btnMoraCancel = document.getElementById('btn-mora-cancel');
const enableQuotaModal = document.getElementById('enableQuotaModal');
const quotaClientName = document.getElementById('quota-client-name');
const btnQuotaConfirm = document.getElementById('btn-quota-confirm');
const btnQuotaCancel = document.getElementById('btn-quota-cancel');
// Referencias Barra Herramientas Clientes
const btnMultiDeleteMode = document.getElementById('btn-multi-delete-mode');
const btnDeleteSelected = document.getElementById('btn-delete-selected');
const selectedCountSpan = document.getElementById('selected-count');
const btnSearchClient = document.getElementById('btn-search-client');
const btnNewClient = document.getElementById('btn-new-client');
const btnImportExcel = document.getElementById('btn-import-excel');
const importExcelInput = document.getElementById('importExcelInput');
const btnExportMenu = document.getElementById('btn-export-menu');
// Referencias Modal Buscar Cliente
const searchClientModal = document.getElementById('searchClientModal');
const modalSearchInput = document.getElementById('modal-search-input');
const btnCloseSearch = document.getElementById('btn-close-search');
const btnShowAllClients = document.getElementById('btn-show-all-clients');
const btnSearchAdvisor = document.getElementById('btn-search-advisor');
const btnSearchMuni = document.getElementById('btn-search-muni');
// Referencias Modal Buscar por Asesor
const searchByAdvisorModal = document.getElementById('searchByAdvisorModal');
const searchAdvisorSelect = document.getElementById('search-advisor-select');
const searchAdvisorMuniSelect = document.getElementById('search-advisor-muni-select');
const btnDoSearchAdvisor = document.getElementById('btn-do-search-advisor');
const btnCloseSearchAdvisor = document.getElementById('btn-close-search-advisor');
// Referencias Modal Buscar por Municipio
const searchByMuniModal = document.getElementById('searchByMuniModal');
const searchMuniDeptSelect = document.getElementById('search-muni-dept-select');
const searchMuniMuniSelect = document.getElementById('search-muni-muni-select');
const btnDoSearchMuni = document.getElementById('btn-do-search-muni');
const btnCloseSearchMuni = document.getElementById('btn-close-search-muni');
// Referencias Gestión Municipios
const btnViewMunisSection = document.getElementById('btn-view-munis-section');
const btnCreateMunisSection = document.getElementById('btn-create-munis-section');
const viewMuniDeptSelect = document.getElementById('view-muni-dept-select');
const btnSearchMunisDb = document.getElementById('btn-search-munis-db');
const munisListContainer = document.getElementById('munis-list-container');
const createMunisBox = document.getElementById('create-munis-box');
const viewMunisBox = document.getElementById('view-munis-box');
const createMuniDeptSelect = document.getElementById('create-muni-dept-select');
const newMunisInputsContainer = document.getElementById('new-munis-inputs-container');
const btnAddMuniField = document.getElementById('btn-add-muni-field');
const btnSaveNewMuni = document.getElementById('btn-save-new-muni');
const btnCancelNewMuni = document.getElementById('btn-cancel-new-muni');
// Referencias Tablero de Control
const btnDashboardDaily = document.getElementById('btn-dashboard-daily');
const btnDashboardWeekly = document.getElementById('btn-dashboard-weekly');
const btnDashboardDownload = document.getElementById('btn-dashboard-download');
const dashboardDateRange = document.getElementById('dashboard-date-range');
const dashboardCreditsBody = document.getElementById('dashboard-credits-body');
const dashboardCollectionsBody = document.getElementById('dashboard-collections-body');
// Referencias Modal Editar Crédito
const editCreditModal = document.getElementById('editCreditModal');
const editCreditDate = document.getElementById('edit-credit-date');
const editCreditValue = document.getElementById('edit-credit-value');
const editCreditInterests = document.getElementById('edit-credit-interests');
const editCreditQuota = document.getElementById('edit-credit-quota');
const editCreditBalance = document.getElementById('edit-credit-balance');
const editCreditType = document.getElementById('edit-credit-type');
const editCreditTerm = document.getElementById('edit-credit-term');
const editCreditRemaining = document.getElementById('edit-credit-remaining');
const editCreditMuni = document.getElementById('edit-credit-municipality');
const editCreditAdvisor = document.getElementById('edit-credit-advisor');
const btnSaveEditCredit = document.getElementById('btn-save-edit-credit');
const btnCancelEditCredit = document.getElementById('btn-cancel-edit-credit');
// Referencias Modal Pagos Crédito
const creditPaymentsModal = document.getElementById('creditPaymentsModal');
const creditPaymentsBody = document.getElementById('credit-payments-body');
const closeCreditPaymentsX = document.getElementById('closeCreditPaymentsX');
// Referencias Informes PM (Payments Report)
const btnReportPm = document.getElementById('btn-report-pm');
const pmReportBox = document.getElementById('pm-report-box');
const btnPmDaily = document.getElementById('btn-pm-daily');
const btnPmWeekly = document.getElementById('btn-pm-weekly');
const btnPmFilterDate = document.getElementById('btn-pm-filter-date');
const pmFilterDateText = document.getElementById('pm-filter-date-text');
const pmFilterDept = document.getElementById('pm-filter-dept');
const pmFilterMuni = document.getElementById('pm-filter-muni');
const pmFilterUser = document.getElementById('pm-filter-user');
const btnGeneratePm = document.getElementById('btn-generate-pm');
const btnDownloadPm = document.getElementById('btn-download-pm');
const pmTableBody = document.getElementById('pm-table-body');
const pmTotalCobroDisplay = document.getElementById('pm-total-cobro-display');
// Referencias Modal Ver Gastos
const viewExpensesModal = document.getElementById('viewExpensesModal');
const viewExpGas = document.getElementById('view-exp-gas');
const viewExpLunch = document.getElementById('view-exp-lunch');
const viewExpOtherVal = document.getElementById('view-exp-other-val');
const viewExpOtherDesc = document.getElementById('view-exp-other-desc');
const viewExpTotal = document.getElementById('view-exp-total');
// Referencias Exportación Avanzada
const btnOpenExportModal = document.getElementById('btn-export-menu');
const exportReportModal = document.getElementById('export-report-modal');
const exportDepartment = document.getElementById('export-department');
const exportMunicipality = document.getElementById('export-municipality');
const exportUser = document.getElementById('export-user');
const exportPeriodText = document.getElementById('export-period-text');
const btnOpenExportDateModal = document.getElementById('btn-open-export-date-modal');
const btnExportAction = document.getElementById('btn-export-action');
const exportDateFilterModal = document.getElementById('export-date-filter-modal');
const exportDay = document.getElementById('export-day');
const exportMonth = document.getElementById('export-month');
const exportYear = document.getElementById('export-year');
const btnApplyExportDate = document.getElementById('btn-apply-export-date');
// Referencias Modales Alertas y Estados
const alertReprestNotificationModal = document.getElementById('alert-represt-notification-modal');
const approveReprestModal = document.getElementById('approve-represt-modal');
const represtAlertsList = document.getElementById('represt-alerts-list');
const btnFilterReprestClients = document.getElementById('btn-filter-represt-clients');
const alertSecondPaymentNotificationModal = document.getElementById('alert-second-payment-notification-modal');
const secondPaymentAlertsList = document.getElementById('second-payment-alerts-list');
const btnFilterSecondPaymentClients = document.getElementById('btn-filter-second-payment-clients');
const btnConfirmReprest = document.getElementById('btn-confirm-represt');
const btnRejectReprest = document.getElementById('btn-reject-represt');
const reactivateCreditModal = document.getElementById('reactivate-credit-modal');
const btnConfirmReactivate = document.getElementById('btn-confirm-reactivate');
const closeCreditModal = document.getElementById('close-credit-modal');
const btnConfirmCloseCredit = document.getElementById('btn-confirm-close-credit');

// Referencias Modal Segundo Pago
const approveSecondPaymentModal = document.getElementById('approveSecondPaymentModal');
const btnConfirmSecondPayment = document.getElementById('btn-confirm-second-payment');
const btnRejectSecondPayment = document.getElementById('btn-reject-second-payment');

// Referencias Modal Fechas P&G
const pgDateSelectionModal = document.getElementById('pg-date-selection-modal');
const pgModalDateType = document.getElementById('pg-modal-date-type');
const pgModalDateInputsContainer = document.getElementById('pg-modal-date-inputs-container');
const pgDatePreview = document.getElementById('pg-date-preview');
const btnPgDateAccept = document.getElementById('btn-pg-date-accept');
const btnPgDateCancel = document.getElementById('btn-pg-date-cancel');
// Referencias Modal Ver Municipios Asignados
const viewAssignedMunisModal = document.getElementById('view-assigned-municipalities-modal');
const assignedMunisList = document.getElementById('assigned-munis-list');
const btnCloseAssignedMunis = document.getElementById('btn-close-assigned-munis');

let currentEditId = null; // Variable para saber a quién estamos editando
let currentClientSearchQuery = null; // Persistencia de búsqueda de clientes
let currentClientSearchType = null;
let currentPassId = null; // Variable para el cambio de contraseña
let tempSelectedMunis = []; // Almacena la selección actual de municipios
let currentDeptMunis = []; // Almacena los municipios disponibles del departamento
let muniSelectionMode = 'edit'; // 'edit' o 'create' para saber quién abrió el modal de municipios
let currentUserRole = null; // Variable para guardar el rol del administrador actual
let currentUserIsDeveloper = false; // Bandera para saber si es desarrollador
let currentUserId = null; // ID del usuario en sesión
let currentClientEditCedula = null; // Cédula del cliente que se está editando
let currentViewingClientCedula = null; // Cédula del cliente cuyo detalle se está viendo
let currentQuotaClientData = null; // Datos del cliente para el proceso de cupo extra
let clientToDeleteData = null; // Datos del cliente a eliminar
let isMultiDeleteMode = false; // Modo eliminación múltiple
let allClientsData = []; // Almacenar clientes cargados para búsqueda
let allDebtorsData = []; // Almacenar todos los deudores para cálculo de estado rápido
let isRecoveryMode = false; // Bandera para saber si estamos en modo recuperación
let recoveryData = null; // Datos temporales para recuperación
// Variables globales para el reporte
let currentCreditEditNumber = null; // Numero del crédito (debtor) que se está editando
let currentCreditPaymentsNumber = null; // Numero del crédito cuyos pagos se están viendo
let currentDashboardCobrosData = [];
let currentDashboardCreditosData = [];
let currentAlertsData = []; // Almacena alertas activas
let currentAlertActionId = null; // ID de la alerta a aprobar/rechazar
let currentReactivateClientCedula = null; // Cédula del cliente a reactivar
let currentCloseClientCedula = null; // Cédula del cliente a cerrar crédito
let currentSecondPaymentAlerts = []; // Almacena alertas de segundo pago
let currentSecondPaymentActionId = null; // ID de la alerta de segundo pago
// Estado Exportación
let dashboardInterval = null;
let currentDashboardMode = 'daily';

// Referencias Modales Nuevos
const linkProvisionModal = document.getElementById('linkProvisionModal');
const provLinkName = document.getElementById('prov-link-name');
const provLinkUrl = document.getElementById('prov-link-url');
const btnSaveProvisionLink = document.getElementById('btn-save-provision-link');
const createAdminReportModal = document.getElementById('createAdminReportModal');
const reportNameInput = document.getElementById('report-name');
const reportDescInput = document.getElementById('report-desc');
const btnSendAdminReport = document.getElementById('btn-send-admin-report');
const viewReportDescModal = document.getElementById('viewReportDescModal');
const markReportDoneModal = document.getElementById('markReportDoneModal');
const btnConfirmReportDone = document.getElementById('btn-confirm-report-done');
let currentReportActionId = null;

let exportFilters = {
    day: 'all',
    month: 'all',
    year: 'all'
};

// Lista interna de departamentos
const DEPARTAMENTOS_COLOMBIA = [
    "Amazonas",
    "Antioquía",
    "Arauca",
    "Atlántico",
    "Bolívar",
    "Boyacá",
    "Caldas",
    "Caquetá",
    "Casanare",
    "Cauca",
    "Cesar",
    "Chocó",
    "Córdoba",
    "Cundinamarca",
    "Guainía",
    "Guaviare",
    "Huila",
    "La Guajira",
    "Magdalena",
    "Meta",
    "Nariño",
    "Norte de Santander",
    "Putumayo",
    "Quindío",
    "Risaralda",
    "San Andrés y Providencia",
    "Santander",
    "Sucre",
    "Tolima",
    "Valle del Cauca",
    "Vaupés",
    "Vichada"
];

// Helper para fechas locales (Soluciona el desfase de -1/+1 día por zona horaria)
function getLocalDateKey(dateObj) {
    if (!dateObj || isNaN(dateObj.getTime())) return '';
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Helper para parsear fechas (Soporta ISO y DD-MM-YYYY)
// Helper para parsear fechas (Soporta ISO, YYYY-MM-DD, y DD-MM-YYYY)
function parseDateValue(value) {
    if (!value) return null;

    // Si ya es un objeto Date, simplemente lo retornamos.
    if (value instanceof Date) {
        return isNaN(value.getTime()) ? null : value;
    }

    if (typeof value !== 'string') return null;

    // Prioridad 1: Formato YYYY-MM-DD (común en inputs y a veces en BD como texto)
    // Se parsea manualmente para forzar la zona horaria local y evitar el off-by-one.
    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        const [y, m, d] = value.split('-').map(Number);
        return new Date(y, m - 1, d);
    }

    // Prioridad 2: Formato DD-MM-YYYY (común en importaciones o UI)
    if (/^\d{2}-\d{2}-\d{4}$/.test(value)) {
        const [d, m, y] = value.split('-').map(Number);
        return new Date(y, m - 1, d);
    }

    // Fallback: Para formatos ISO completos (e.g., "2024-05-12T19:00:00.000Z")
    // new Date() los maneja correctamente.
    const d = new Date(value);
    return isNaN(d.getTime()) ? null : d;
}

// --- Funciones de Pantalla de Carga ---
function showLoading(type) {
    const overlay = type === 'solid' ? document.getElementById('loading-overlay-solid') : document.getElementById('loading-overlay-transparent');
    if (overlay) {
        overlay.style.display = 'flex';
        // Forzar estilos para asegurar cobertura total
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.zIndex = '9999';
    }
}

function hideLoading() {
    document.getElementById('loading-overlay-solid').style.display = 'none';
    document.getElementById('loading-overlay-transparent').style.display = 'none';
}

// Cargar datos recordados al iniciar
window.addEventListener('load', async () => {
    const savedEmail = localStorage.getItem('savedEmail');
    const savedPass = localStorage.getItem('savedPass');
    if (savedEmail) {
        emailInput.value = savedEmail;
        if (savedPass) passwordInput.value = savedPass;
        rememberMeCheckbox.checked = true;
    }

    // Verificar si hay sesión activa en Supabase
    try {
        const { data: { session }, error } = await sbClient.auth.getSession();
        if (error) console.warn("Error recuperando sesión:", error);
        if (session) {
            initializeSession(session.user.id);
        }
    } catch (err) {
        console.error("Error de red al verificar sesión:", err);
    }
});

// Función de Inicio de Sesión
loginBtn?.addEventListener('click', async () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    showLoading('solid');

    try {
        // Intentar cerrar sesión previa para limpiar tokens corruptos o conexiones colgadas
        await sbClient.auth.signOut();

        const { data, error } = await sbClient.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) {
            let msg = 'Error: ' + error.message;
            // Detectar errores de base de datos
            if (error.status === 500 || error.message.includes('Database error')) {
                msg += '. (Posible error interno en BD).';
            }
            // Detectar errores de conexión
            if (error.message === 'Failed to fetch' || error.name === 'AuthRetryableFetchError') {
                msg = 'Error de conexión: No se pudo contactar al servidor. Verifique su internet.';
            }
            statusMessage.innerText = msg;
            hideLoading();
            console.error('Error de login:', error);
        } else {
            statusMessage.innerText = 'Verificando permisos...';
            // Llamar a la función de inicialización
            await initializeSession(data.user.id, email, password);
        }
    } catch (err) {
        console.error("Excepción crítica en login:", err);
        statusMessage.innerText = 'Error de red o inesperado: ' + (err.message || err);
        hideLoading();
    }
});

// Función para inicializar la sesión (usada en login y recarga)
async function initializeSession(userId, email = null, password = null) {
    try {
        // 1. Buscar el usuario en la tabla 'users' por su ID
        const { data: userData, error: userError } = await sbClient
            .from('users')
            .select('role, is_admin, name')
            .eq('id', userId)
            .single();

        if (userError) {
            if (statusMessage) statusMessage.innerText = 'Error al verificar permisos: ' + userError.message;
            await sbClient.auth.signOut(); // Cerrar sesión por seguridad
            hideLoading();
        } else {
            // 2. Verificar condiciones: Rol permitido Y is_admin TRUE
            const rolesPermitidos = ['Administrador', 'Administrador maestro', 'Desarrollador'];
            const accesoPermitido = rolesPermitidos.includes(userData.role) && userData.is_admin === true;
            
            if (accesoPermitido) {
                currentUserRole = userData.role;
                currentUserIsDeveloper = userData.role === 'Desarrollador';
                currentUserId = userId;

                // Manejo de "Recordar datos" si venimos del login
                if (email && password) {
                    if (rememberMeCheckbox.checked) {
                        localStorage.setItem('savedEmail', email);
                        localStorage.setItem('savedPass', password);
                    } else {
                        localStorage.removeItem('savedEmail');
                        localStorage.removeItem('savedPass');
                    }
                }

                if (statusMessage) statusMessage.innerText = '¡Inicio de sesión exitoso!';
                console.log('Usuario autorizado:', userId);
                
                // Mostrar menú principal
                loginContainer.style.display = 'none';
                mainMenuContainer.style.display = 'block';
                if (mainMenuWelcome) mainMenuWelcome.innerText = `Bienvenido ${userData.role || ''}, ${userData.name || ''}`;
                if (userNameDisplay) userNameDisplay.innerText = userData.name || 'Usuario';

                const sidebarWelcome = document.getElementById('sidebar-welcome-msg');
                if (sidebarWelcome) sidebarWelcome.innerText = `Bienvenido ${userData.role || ''}, ${userData.name || ''}`;
                
                // Mostrar botón especial si es desarrollador
                if (currentUserIsDeveloper) {
                    devChangePassBtn.style.display = 'inline-block';
                    devUpdateDataBtn.style.display = 'inline-block';
                }

                hideLoading();

                // Configurar listeners de tiempo real
                setupRealtimeListeners();
            } else {
                if (statusMessage) statusMessage.innerText = 'Acceso denegado: No tienes permisos de administrador.';
                await sbClient.auth.signOut(); // Expulsar si no cumple requisitos
                hideLoading();
            }
        }
    } catch (err) {
        console.error("Error crítico en initializeSession:", err);
        if (statusMessage) statusMessage.innerText = 'Error de conexión al cargar perfil: ' + err.message;
        hideLoading();
    }
}

// --- Lógica de Tiempo Real (Real-time) ---
function setupRealtimeListeners() {
    console.log('Setting up real-time listeners...');

    const debounce = (func, delay) => {
        let timeout;
        return function(...args) {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), delay);
        };
    };

    // Función de refresco debounced para evitar múltiples recargas seguidas
    const debouncedRefresh = debounce(() => {
        console.log(`Real-time: Refreshing active view.`);
        if (sidebarContainer.style.display === 'flex') {
            sbBtnRefresh.click(); // El botón de refrescar ya tiene la lógica para cada vista
        }
        // Refrescar modales abiertos
        if (clientDetailsModal.style.display === 'block' && currentViewingClientCedula) {
            openClientDetails(currentViewingClientCedula);
        }
        if (creditPaymentsModal.style.display === 'flex' && currentCreditPaymentsNumber) {
            loadCreditPayments(currentCreditPaymentsNumber);
        }
    }, 2000);

    // Un solo canal para escuchar todos los cambios en el esquema público
    sbClient.channel('public-db-changes')
      .on('postgres_changes', { event: '*', schema: 'public' }, (payload) => {
          console.log('Change detected on table:', payload.table);
          debouncedRefresh();
      })
      .subscribe((status) => { if (status === 'SUBSCRIBED') console.log('¡Conectado al canal de tiempo real!'); });
}

// --- Navegación del Menú Principal ---

// Función auxiliar para abrir espacios de trabajo con barra lateral
async function openWorkspace(containerToShow) {
    showLoading('solid');
    if (dashboardInterval) clearInterval(dashboardInterval); // Detener polling del tablero si se cambia de vista
    // Ocultar menú principal y login
    if (mainMenuContainer) mainMenuContainer.style.display = 'none';
    if (loginContainer) loginContainer.style.display = 'none';

    // Mostrar barra lateral
    if (sidebarContainer) sidebarContainer.style.display = 'flex';

    // Ocultar todos los espacios de trabajo primero
    [dashboardContainer, clientsContainer, municipalitiesContainer, dashboardControlContainer, reportsContainer, adminReportsContainer].forEach(el => {
        if (el) {
            el.style.display = 'none';
            el.classList.add('workspace-with-sidebar'); // Agregar margen izquierdo
        }
    });

    // Mostrar el contenedor deseado
    if (containerToShow) containerToShow.style.display = 'block';
    setTimeout(hideLoading, 500); // Pequeño delay para transición suave
}

// Función auxiliar para volver al menú principal (cerrar barra lateral)
function closeWorkspace() {
    if (sidebarContainer) sidebarContainer.style.display = 'none';
    [dashboardContainer, clientsContainer, municipalitiesContainer, dashboardControlContainer, reportsContainer, adminReportsContainer].forEach(el => {
        if (el) {
            el.style.display = 'none';
            el.classList.remove('workspace-with-sidebar');
        }
    });
    if (mainMenuContainer) mainMenuContainer.style.display = 'block';
}

// Listeners del Menú Principal (Actualizados)
btnUsersMgmt?.addEventListener('click', () => {
    setActiveSidebar(sbBtnUsers);
    openWorkspace(dashboardContainer);
    loadUsersTable(); // Cargar datos al entrar
});

btnClientsMgmt?.addEventListener('click', () => {
    setActiveSidebar(sbBtnClients);
    openWorkspace(clientsContainer);
    // No recargar si ya hay datos, para persistencia
    if (allClientsData.length === 0) {
        loadClientsTable();
    } else {
        // Si ya hay datos, mantener la vista actual (no limpiar)
    }
});

btnMunicipalitiesMgmt?.addEventListener('click', () => {
    setActiveSidebar(sbBtnMunis);
    openWorkspace(municipalitiesContainer);
    populateDeptSelects(); // Asegurar carga de departamentos
});

btnDashboardControl?.addEventListener('click', () => {
    setActiveSidebar(sbBtnDashboard);
    openWorkspace(dashboardControlContainer);
});

btnReportsSection?.addEventListener('click', () => {
    setActiveSidebar(sbBtnReports);
    window.open('informes/informes.html', 'Informes', 'width=1200,height=800,resizable=yes,scrollbars=yes');
});

btnInversionesMenu?.addEventListener('click', () => {
    handleLinkNavigation('INVERSIONES M&R');
});

btnDatabaseMenu?.addEventListener('click', () => {
    handleLinkNavigation('Base de datos');
});

btnAdminReportsMenu?.addEventListener('click', () => {
    setActiveSidebar(sbBtnAdminReports);
    openReportsWorkspace();
});

// Listeners de la Barra Lateral
function setActiveSidebar(btn) {
    document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');
}

if(sbBtnUsers) sbBtnUsers?.addEventListener('click', () => { setActiveSidebar(sbBtnUsers); openWorkspace(dashboardContainer); if(usersTableBody.children.length === 0) loadUsersTable(); });
if(sbBtnClients) sbBtnClients?.addEventListener('click', () => { 
    setActiveSidebar(sbBtnClients); 
    openWorkspace(clientsContainer); 
    // Persistencia: Solo cargar si está vacío
    if (allClientsData.length === 0) {
        loadClientsTable();
    }
});
if(sbBtnMunis) sbBtnMunis?.addEventListener('click', () => { setActiveSidebar(sbBtnMunis); openWorkspace(municipalitiesContainer); populateDeptSelects(); });
if(sbBtnDashboard) sbBtnDashboard?.addEventListener('click', () => { 
    setActiveSidebar(sbBtnDashboard);
    openWorkspace(dashboardControlContainer); 
    btnDashboardDaily.className = 'btn-secondary';
    btnDashboardWeekly.className = 'btn-secondary';
    dashboardDateRange.innerText = 'Seleccione un modo';
    dashboardCreditsBody.innerHTML = '';
    dashboardCollectionsBody.innerHTML = '';
    
    // Iniciar polling en tiempo real (cada 5 segundos)
    if (dashboardInterval) clearInterval(dashboardInterval);
    dashboardInterval = setInterval(() => {
        if (dashboardControlContainer.style.display === 'block' && currentDashboardMode) {
            loadDashboardData(currentDashboardMode, true); // true = background update
        }
    }, 5000);
});
if(sbBtnReports) sbBtnReports?.addEventListener('click', () => { 
    setActiveSidebar(sbBtnReports); 
    window.open('informes/informes.html', 'Informes', 'width=1200,height=800,resizable=yes,scrollbars=yes'); 
});
if(sbBtnImport) sbBtnImport?.addEventListener('click', () => { /* No active state */ importExcelInput.click(); });
if(sbBtnExport) sbBtnExport?.addEventListener('click', () => { /* No active state */ btnOpenExportModal.click(); });
if(sbBtnInversiones) sbBtnInversiones?.addEventListener('click', () => { handleLinkNavigation('INVERSIONES M&R'); });
if(sbBtnDatabase) sbBtnDatabase?.addEventListener('click', () => { handleLinkNavigation('Base de datos'); });
if(sbBtnAdminReports) sbBtnAdminReports?.addEventListener('click', () => { setActiveSidebar(sbBtnAdminReports); openReportsWorkspace(); });
if(sbBtnRefresh) sbBtnRefresh?.addEventListener('click', async () => {
    showLoading('transparent');
    // Actualizar según la vista activa
    if (dashboardContainer.style.display === 'block') await loadUsersTable();
    if (clientsContainer.style.display === 'block') {
        // Recargar datos de clientes pero mantener la búsqueda
        await loadClientsTable(true); // true = silent/refresh mode
        if (currentClientSearchQuery) {
            // Re-aplicar búsqueda
            const term = currentClientSearchQuery;
            const filtered = allClientsData.filter(c => 
                (c.name && c.name.toLowerCase().includes(term.toLowerCase())) || 
                (c.cedula && c.cedula.includes(term))
            );
            renderClientsTable(filtered);
        }
    }
    if (municipalitiesContainer.style.display === 'block') await populateDeptSelects();
    if (dashboardControlContainer.style.display === 'block') await loadDashboardData(currentDashboardMode);
    if (adminReportsContainer.style.display === 'block' && currentUserIsDeveloper) await loadDevReportsTable();
    hideLoading();
});
if(sbBtnLogout) sbBtnLogout?.addEventListener('click', async () => {
    await sbClient.auth.signOut();
    location.reload();
});

logoutBtn?.addEventListener('click', async () => {
    await sbClient.auth.signOut();
    location.reload(); // Recargar para volver al login
});

// Función para cargar la tabla de usuarios
async function loadUsersTable() {
    console.log('Iniciando carga de usuarios...');
    const { data: users, error } = await sbClient
        .from('users')
        .select('id, name, cedula, email, assigned_municipality, created_at, role')
        .neq('role', 'Desarrollador'); // FILTRO: No mostrar desarrolladores en la lista

    if (error) {
        console.error('Error al cargar usuarios:', error);
        usersTableBody.innerHTML = `<tr><td colspan="6" style="color: red; text-align: center;">Error: ${error.message}</td></tr>`;
        return;
    }

    console.log('Usuarios recibidos:', users);
    usersTableBody.innerHTML = ''; // Limpiar tabla

    if (!users || users.length === 0) {
        usersTableBody.innerHTML = '<tr><td colspan="6" style="text-align: center;">No se encontraron datos. Verifica si la tabla está vacía o si las políticas RLS (Row Level Security) están bloqueando la lectura.</td></tr>';
        return;
    }

    users.forEach(user => {
        // Convertir array a string si es necesario para evitar errores de .replace
        const munisStr = Array.isArray(user.assigned_municipality) 
            ? user.assigned_municipality.join(', ') 
            : (user.assigned_municipality || '');
        
        const munisCount = Array.isArray(user.assigned_municipality) ? user.assigned_municipality.length : 0;
        const isAdmin = ['Administrador', 'Administrador maestro', 'Desarrollador'].includes(user.role);

        let municipalityHtml = '';
        if (isAdmin) {
            municipalityHtml = '<strong>Todos</strong>';
        } else {
            municipalityHtml = `${munisCount} <button class="btn-ver-muni" data-muni="${munisStr.replace(/"/g, '&quot;')}" title="Ver Municipios" style="width: 25px; height: 25px; padding: 0; display: inline-flex; align-items: center; justify-content: center; font-size: 12px;">👁️</button>`;
        }

        // Lógica para ocultar botón eliminar si es el mismo usuario
        let deleteBtnHtml = `<button class="btn-eliminar" data-id="${user.id}" title="Eliminar" style="width: 25px; height: 25px; padding: 0; display: inline-flex; align-items: center; justify-content: center; font-size: 12px;">🗑️</button>`;
        if (user.id === currentUserId) {
            deleteBtnHtml = ''; // No mostrar botón para sí mismo
        }

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name || ''}</td>
            <td>${user.cedula || ''}</td>
            <td>${user.email || ''}</td>
            <td>${user.role || ''}</td>
            <td>${municipalityHtml}</td>
            <td>${new Date(user.created_at).toLocaleString()}</td>
            <td>
                <div style="display: flex; gap: 5px;">
                    <button class="btn-editar" data-id="${user.id}" title="Editar" style="width: 25px; height: 25px; padding: 0; display: inline-flex; align-items: center; justify-content: center; font-size: 12px;">✏️</button>
                    <button class="btn-password" data-id="${user.id}" title="Cambiar contraseña" style="width: 25px; height: 25px; padding: 0; display: inline-flex; align-items: center; justify-content: center; font-size: 12px;">🔑</button>
                    ${deleteBtnHtml}
                </div>
            </td>
        `;
        usersTableBody.appendChild(row);
    });
}

// Función para cargar la tabla de clientes
async function loadClientsTable(isRefresh = false) {
    console.log('Iniciando carga de clientes...');
    
    // Cargar datos en paralelo (Clientes, Deudores, Alertas) para tener el panorama completo
    // Se elimina el límite y se ordena por nombre para coincidir con la lógica de guia.html
    const [clientsResult, debtorsResult, alertsResult, secondPaymentResult] = await Promise.all([
        sbClient.from('clients').select('*').order('name', { ascending: true }),
        sbClient.from('debtors').select('*'),
        sbClient.from('alerts_represt').select('*'),
        sbClient.from('payments_alerts').select('*').is('pay', null)
    ]);

    if (clientsResult.error) {
        console.error('Error al cargar clientes:', clientsResult.error);
        clientsTableBody.innerHTML = `<tr><td colspan="6" style="color: red; text-align: center;">Error: ${clientsResult.error.message}</td></tr>`;
        return;
    }

    allClientsData = clientsResult.data || [];
    allDebtorsData = debtorsResult.data || []; // Guardar deudores para cálculo en memoria
    currentAlertsData = alertsResult.data || [];
    currentSecondPaymentAlerts = secondPaymentResult.data || [];

    // Mapa auxiliar para encontrar cédula por debtor_number (si la alerta no tiene cédula)
    const debtorNumberToCedula = new Map();
    const debtorInfoMap = new Map(); // Mapa para enriquecer datos (Asesor, Municipio)
    allDebtorsData.forEach(d => {
        if (d.debtor_number && d.cedula) {
            debtorNumberToCedula.set(String(d.debtor_number), d.cedula);
        }
        if (d.debtor_number) debtorInfoMap.set(String(d.debtor_number), d);
    });

    // Mapa auxiliar para nombres de clientes
    const cedulaToName = new Map();
    allClientsData.forEach(c => cedulaToName.set(c.cedula, c.name));

    // Notificación Masiva si hay alertas pendientes (represt === false)
    const pendingAlerts = currentAlertsData.filter(a => a.represt === false);
    if (pendingAlerts.length > 0) {
        represtAlertsList.innerHTML = '';
        pendingAlerts.forEach(a => {
            // Asegurar cédula
            const dNum = a.debtor_number ? String(a.debtor_number) : null;
            if (!a.cedula && dNum) a.cedula = debtorNumberToCedula.get(dNum);
            
            // Enriquecer datos faltantes (Asesor, Municipio, Nombre)
            const debtor = dNum ? debtorInfoMap.get(dNum) : null;
            const client = a.cedula ? allClientsData.find(c => c.cedula === a.cedula) : null;

            const clientName = client ? client.name : (debtor ? debtor.name : (cedulaToName.get(a.cedula) || 'Cliente Desconocido'));
            const advisorName = a.user_name || a.asesor_name || (debtor ? debtor.asesor_name : (client ? client.asesor_name : 'N/A'));
            const muniName = a.municipality || (debtor ? debtor.municipality : (client ? client.municipality : 'N/A'));

            const div = document.createElement('div');
            div.style.marginBottom = '8px';
            div.style.paddingBottom = '8px';
            div.style.borderBottom = '1px solid #eee';
            div.innerHTML = `
                <strong>Asesor:</strong> ${advisorName}<br>
                <strong>Cliente:</strong> ${clientName}<br>
                <strong>Municipio:</strong> ${muniName}
            `;
            represtAlertsList.appendChild(div);
        });
        alertReprestNotificationModal.style.display = 'block';
    }

    // Notificación Masiva Segundo Pago
    if (currentSecondPaymentAlerts.length > 0) {
        secondPaymentAlertsList.innerHTML = '';
        currentSecondPaymentAlerts.forEach(a => {
            // Asegurar cédula
            const dNum = a.debtor_number ? String(a.debtor_number) : null;
            if (!a.cedula && dNum) a.cedula = debtorNumberToCedula.get(dNum);

            // Enriquecer datos faltantes
            const debtor = dNum ? debtorInfoMap.get(dNum) : null;
            const client = a.cedula ? allClientsData.find(c => c.cedula === a.cedula) : null;

            const clientName = client ? client.name : (debtor ? debtor.name : (cedulaToName.get(a.cedula) || 'Cliente Desconocido'));
            const advisorName = a.user_name || a.asesor_name || (debtor ? debtor.asesor_name : (client ? client.asesor_name : 'N/A'));
            const muniName = a.municipality || (debtor ? debtor.municipality : (client ? client.municipality : 'N/A'));

            const div = document.createElement('div');
            div.style.marginBottom = '8px';
            div.style.paddingBottom = '8px';
            div.style.borderBottom = '1px solid #eee';
            div.innerHTML = `
                <strong>Asesor:</strong> ${advisorName}<br>
                <strong>Cliente:</strong> ${clientName}<br>
                <strong>Municipio:</strong> ${muniName}
            `;
            secondPaymentAlertsList.appendChild(div);
        });
        alertSecondPaymentNotificationModal.style.display = 'block';
    }

    if (!isRefresh) {
        clientsTableBody.innerHTML = '<tr><td colspan="7" style="text-align: center;">Realice una búsqueda de clientes por favor</td></tr>';
    }
}

async function renderClientsTable(clients) {
    clientsTableBody.innerHTML = ''; // Limpiar tabla

    if (!clients || clients.length === 0) {
        clientsTableBody.innerHTML = '<tr><td colspan="6" style="text-align: center;">No se encontraron clientes.</td></tr>';
        return;
    }

    // Mapa de Alertas para acceso rápido por cédula
    const alertsMap = new Map();
    // Usar debtor_number para mapear si es necesario, pero renderizamos por cliente (cédula)
    // Si una alerta tiene debtor_number, buscamos su cédula en los deudores cargados
    currentAlertsData.forEach(a => {
        let cedula = a.cedula;
        if (!cedula && a.debtor_number) {
            const debtor = allDebtorsData.find(d => String(d.debtor_number) === String(a.debtor_number));
            if (debtor) cedula = debtor.cedula;
        }
        if (cedula) alertsMap.set(cedula, a);
    });

    // Mapa de Alertas Segundo Pago
    const secondPaymentMap = new Map();
    currentSecondPaymentAlerts.forEach(a => {
        let cedula = a.cedula;
        if (!cedula && a.debtor_number) {
            const debtor = allDebtorsData.find(d => String(d.debtor_number) === String(a.debtor_number));
            if (debtor) cedula = debtor.cedula;
        }
        if (cedula) secondPaymentMap.set(cedula, a);
    });

    // Calcular créditos abiertos en memoria usando allDebtorsData (Optimización masiva)
    const openCreditsMap = new Map();
    allDebtorsData.forEach(d => {
        if (d.cedula && (parseFloat(d.balance) || 0) > 0) {
            const current = openCreditsMap.get(d.cedula) || 0;
            openCreditsMap.set(d.cedula, current + 1);
        }
    });

    // Obtener todos los cupos extras válidos para verificar
    const { data: validExtras } = await sbClient.from('extras').select('cedula').eq('valid', true);
    const validExtrasCedulas = new Set(validExtras ? validExtras.map(e => e.cedula) : []);

    clients.forEach(client => {
        let statusHtml = '';
        
        // Lógica de Semáforo de Estados (Prioridad Visual)
        const alertInfo = alertsMap.get(client.cedula);
        const secondPaymentInfo = secondPaymentMap.get(client.cedula);
        const openCreditsCount = openCreditsMap.get(client.cedula) || 0;
        const hasActiveCredit = openCreditsCount > 0;
        const hasValidExtra = validExtrasCedulas.has(client.cedula);

        // 1. Prioridad Absoluta: Alerta de Represte
        if (alertInfo && alertInfo.represt === false) {
            statusHtml = `<div class="status-capsule status-alert" data-cedula="${client.cedula}">Intento de pago represte</div>`;
        } 
        // 1.1 Prioridad Alta: Alerta Segundo Pago
        else if (secondPaymentInfo) {
            statusHtml = `<div class="status-capsule status-second-payment" data-id="${secondPaymentInfo.id}" style="background-color: orange; cursor: pointer;">Intento de segundo pago</div>`;
        }
        // 2. Prioridad Alta: Crédito Cerrado
        else if (client.closed === true) {
            statusHtml = `<div class="status-capsule status-closed" data-cedula="${client.cedula}">Crédito cerrado</div>`;
        }
        // 3. Estado Normal: Rojo (Deuda) / Verde (Libre)
        else if (hasActiveCredit) {
            if (openCreditsCount >= 2) {
                statusHtml = `<div class="status-capsule status-open">${openCreditsCount} Créditos Abiertos</div>`;
            } else {
                statusHtml = '<div class="status-capsule status-open">Crédito Abierto</div>';
            }
        } else {
            statusHtml = `<div class="status-capsule status-free" data-cedula="${client.cedula}" style="cursor: pointer;" title="Click para cerrar crédito">Sin Crédito</div>`;
        }

        // Estado del botón Cupo Extra
        let cupoExtraDisabled = '';
        let cupoExtraStyle = '';
        if (hasValidExtra) {
            cupoExtraDisabled = 'disabled';
            cupoExtraStyle = 'background-color: #ccc; cursor: not-allowed;';
        }

        const multiDeleteDisplay = isMultiDeleteMode ? 'table-cell' : 'none';

        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="multi-delete-col" style="display: ${multiDeleteDisplay}; text-align: center;"><input type="checkbox" class="client-select-cb" value="${client.cedula}" data-cedula="${client.cedula}" data-name="${client.name}"></td>
            <td>${client.name || ''}</td>
            <td>${client.cedula || ''}</td>
            <td>${client.phone || ''}</td>
            <td>${client.municipality || ''}</td>
            <td>${statusHtml}</td>
            <td>
                <button class="btn-ver-cliente" data-cedula="${client.cedula}" title="Ver">👁️</button>
                <button class="btn-editar-cliente" data-cedula="${client.cedula}" title="Editar">✏️</button>
                <button class="btn-cupo-extra" data-cedula="${client.cedula}" ${cupoExtraDisabled} style="${cupoExtraStyle}" title="Cupo extra">➕</button>
                <button class="btn-eliminar-cliente" data-cedula="${client.cedula}" title="Eliminar">🗑️</button>
            </td>
        `;
        clientsTableBody.appendChild(row);
    });

    // Actualizar eventos de checkboxes
    document.querySelectorAll('.client-select-cb').forEach(cb => {
        cb.addEventListener('change', updateSelectedCount);
    });
}

// Listeners para botones de filtro en notificaciones
btnFilterReprestClients.addEventListener('click', () => {
    alertReprestNotificationModal.style.display = 'none';
    // Filtrar clientes que tengan alerta de represte
    const alertsMap = new Map();
    currentAlertsData.forEach(a => {
        if (a.represt === false) {
             // Asegurar cédula
             let cedula = a.cedula;
             if (!cedula && a.debtor_number) {
                 const debtor = allDebtorsData.find(d => String(d.debtor_number) === String(a.debtor_number));
                 if (debtor) cedula = debtor.cedula;
             }
             if (cedula) alertsMap.set(cedula, true);
        }
    });
    const filtered = allClientsData.filter(c => alertsMap.has(c.cedula));
    renderClientsTable(filtered);
});

btnFilterSecondPaymentClients.addEventListener('click', () => {
    alertSecondPaymentNotificationModal.style.display = 'none';
    const alertsMap = new Map();
    currentSecondPaymentAlerts.forEach(a => {
        let cedula = a.cedula;
        if (!cedula && a.debtor_number) {
            const debtor = allDebtorsData.find(d => String(d.debtor_number) === String(a.debtor_number));
            if (debtor) cedula = debtor.cedula;
        }
        if (cedula) alertsMap.set(cedula, true);
    });
    const filtered = allClientsData.filter(c => alertsMap.has(c.cedula));
    renderClientsTable(filtered);
});

// Manejo de eventos en la tabla (Delegación de eventos)
clientsTableBody.addEventListener('click', async (e) => {
    const target = e.target;
    const alertId = target.dataset.id; // Para alertas (usan ID propio)
    const clientCedula = target.dataset.cedula; // Para clientes (usan Cédula)

    // --- Lógica Botones de Estado ---
    
    // Botón Azul: Alerta Represte
    if (target.classList.contains('status-alert')) {
        currentAlertActionId = clientCedula;
        approveReprestModal.style.display = 'block';
        return;
    }

    // Botón Naranja: Alerta Segundo Pago
    if (target.classList.contains('status-second-payment')) {
        currentSecondPaymentActionId = alertId;
        approveSecondPaymentModal.style.display = 'block';
        return;
    }

    // Botón Gris: Crédito Cerrado
    if (target.classList.contains('status-closed')) {
        currentReactivateClientCedula = clientCedula;
        reactivateCreditModal.style.display = 'block';
        return;
    }

    // Botón Verde: Sin Crédito (Cerrar Crédito)
    if (target.classList.contains('status-free')) {
        currentCloseClientCedula = clientCedula;
        closeCreditModal.style.display = 'block';
        return;
    }

    if (target.classList.contains('btn-ver-cliente')) {
        openClientDetails(clientCedula);
    }
    if (target.classList.contains('btn-editar-cliente')) {
        // 1. Obtener datos del cliente
        const { data: client, error } = await sbClient
            .from('clients')
            .select('*') // Seleccionamos todo para obtener dirección, asesor, etc.
            .eq('cedula', clientCedula)
            .single();

        // 2. Obtener departamentos
        const { data: deptsData } = await sbClient.from('municipalities').select('id, municipalities');

        if (client && !error && deptsData) {
            currentClientEditCedula = clientCedula;
            
            // Llenar campos
            editClientName.value = client.name || '';
            editClientCedula.value = client.cedula || '';
            editClientPhone.value = client.phone || '';
            editClientAddress.value = client.address || ''; // Asumiendo columna 'address'
            editClientFrequency.value = client.payment_term || 'Semanal';

            // Lógica de Departamento y Municipio
            editClientDept.innerHTML = '<option value="">Seleccione Departamento</option>';
            
            deptsData.forEach(dept => {
                const option = document.createElement('option');
                option.value = dept.id;
                option.textContent = dept.id;
                editClientDept.appendChild(option);
            });

            // Función para cargar asesores según el municipio
            const loadAdvisors = async (muni) => {
                editClientAdvisor.innerHTML = '<option value="">Seleccione Asesor</option>';
                if (!muni) return;

                // Buscar usuarios que tengan este municipio asignado
                const { data: advisors } = await sbClient
                    .from('users')
                    .select('name')
                    .contains('assigned_municipality', [muni])
                    .neq('role', 'Administrador')
                    .neq('role', 'Administrador maestro')
                    .neq('role', 'Desarrollador'); // Filtrar administradores y desarrolladores

                if (advisors) {
                    advisors.forEach(adv => {
                        const opt = document.createElement('option');
                        opt.value = adv.name;
                        opt.textContent = adv.name;
                        editClientAdvisor.appendChild(opt);
                    });
                    // Seleccionar el asesor actual si existe en la lista
                    if (client.asesor_name) {
                        editClientAdvisor.value = client.asesor_name;
                    }
                }
            };

            // Función para cargar municipios en el select
            const loadMunisForClient = (deptId) => {
                editClientMuni.innerHTML = '<option value="">Seleccione Municipio</option>';
                const dept = deptsData.find(d => d.id === deptId);
                if (dept) {
                    dept.municipalities.forEach(muni => {
                        const opt = document.createElement('option');
                        opt.value = muni;
                        opt.textContent = muni;
                        editClientMuni.appendChild(opt);
                    });
                }
            };

            // Si hay un solo departamento, seleccionarlo
            if (deptsData.length === 1) {
                editClientDept.value = deptsData[0].id;
                editClientDept.disabled = true;
                loadMunisForClient(deptsData[0].id);
            } else {
                editClientDept.disabled = false;
                // Intentar deducir el departamento si el cliente ya tiene municipio
                // O dejar que el usuario seleccione.
                // Por simplicidad, si el cliente tiene municipio, buscamos a qué depto pertenece
                if (client.municipality) {
                    const foundDept = deptsData.find(d => d.municipalities.includes(client.municipality));
                    if (foundDept) {
                        editClientDept.value = foundDept.id;
                        loadMunisForClient(foundDept.id);
                        // Si ya tiene municipio, cargar asesores
                        if (client.municipality) loadAdvisors(client.municipality);
                    }
                }
            }

            // Seleccionar el municipio actual del cliente
            if (client.municipality) {
                editClientMuni.value = client.municipality;
                // Asegurarse de cargar asesores si no se hizo arriba
                if (editClientAdvisor.options.length <= 1) loadAdvisors(client.municipality);
            }

            // Evento cambio de departamento
            editClientDept.onchange = () => {
                loadMunisForClient(editClientDept.value);
                editClientAdvisor.innerHTML = '<option value="">Seleccione Asesor</option>'; // Limpiar asesores
            };

            // Evento cambio de municipio para actualizar asesores
            editClientMuni.onchange = () => {
                loadAdvisors(editClientMuni.value);
            };

            editClientModal.style.display = 'block';
        } else {
            alert('Error al cargar datos del cliente.');
        }
    }
    if (target.classList.contains('btn-cupo-extra')) {
        // 1. Obtener datos del cliente
        const { data: clients, error } = await sbClient.from('clients').select('*').eq('cedula', clientCedula).limit(1);
        
        if (error || !clients || clients.length === 0) {
            console.error('Error cargando cliente para cupo:', error);
            return alert('Error al cargar datos del cliente.');
        }
        
        currentQuotaClientData = clients[0];

        // 2. Verificar si tiene créditos activos en 'debtors'
        const { data: debts } = await sbClient
            .from('debtors')
            .select('balance, remaining_payments')
            .eq('cedula', currentQuotaClientData.cedula);

        let activeDebts = [];
        if (debts) {
            activeDebts = debts.filter(d => (parseFloat(d.balance) || 0) > 0);
        }

        if (activeDebts.length > 0) {
            // Calcular total de pagos pendientes
            const totalPending = activeDebts.reduce((sum, d) => sum + (parseInt(d.remaining_payments) || 0), 0);
            
            // Mostrar Modal de Advertencia
            moraPaymentsCount.innerText = totalPending;
            moraAuthInput.value = '';
            btnMoraAccept.disabled = true;
            btnMoraAccept.style.backgroundColor = '#ccc';
            warningMoraModal.style.display = 'block';
        } else {
            // No tiene deuda, pasar directo al modal de habilitar
            openEnableQuotaModal();
        }
    }
    if (target.classList.contains('btn-eliminar-cliente')) {
        const { data: clients } = await sbClient.from('clients').select('*').eq('cedula', clientCedula).limit(1);
        const client = clients && clients.length > 0 ? clients[0] : null;
        if (client) {
            clientToDeleteData = client;
            deleteClientNameDisplay.innerText = client.name;
            deleteClientOptionsModal.style.display = 'block';
        }
    }
});

// --- Lógica Modal Aprobar Represte ---
btnConfirmReprest?.addEventListener('click', async () => {
    if (!currentAlertActionId) return;
    
    // Actualizar estado del cliente a abierto (closed = false)
    await sbClient.from('clients').update({ closed: false }).eq('cedula', currentAlertActionId);

    // Actualizar alerta a TRUE (Autorizado)
    const { error } = await sbClient.from('alerts_represt').update({ represt: true }).eq('cedula', currentAlertActionId);
    
    if (error) alert('Error al autorizar: ' + error.message);
    else {
        alert('Pago represte autorizado.');
        approveReprestModal.style.display = 'none';
        // Actualizar estado visual sin recargar todo si es posible, o recargar silenciosamente
        const btn = document.querySelector(`.status-alert[data-cedula="${currentAlertActionId}"]`);
        if(btn) btn.parentElement.innerHTML = '<div class="status-capsule status-open">Crédito Abierto</div>';
        loadClientsTable(true); // Recargar para sincronizar estado
    }
});

btnRejectReprest?.addEventListener('click', async () => {
    if (!currentAlertActionId) return;
    
    // Eliminar alerta (Rechazado)
    const { error } = await sbClient.from('alerts_represt').delete().eq('cedula', currentAlertActionId);
    
    if (error) alert('Error al rechazar: ' + error.message);
    else {
        alert('Solicitud rechazada y eliminada.');
        approveReprestModal.style.display = 'none';
        const btn = document.querySelector(`.status-alert[data-cedula="${currentAlertActionId}"]`);
        if(btn) btn.remove();
    }
});

// --- Lógica Modal Aprobar Segundo Pago ---
btnConfirmSecondPayment?.addEventListener('click', async () => {
    if (!currentSecondPaymentActionId) return;
    
    // Actualizar estado del cliente a abierto (closed = false)
    const alertObj = currentSecondPaymentAlerts.find(a => a.id == currentSecondPaymentActionId);
    if (alertObj && alertObj.cedula) {
        await sbClient.from('clients').update({ closed: false }).eq('cedula', alertObj.cedula);
    }

    const { error } = await sbClient.from('payments_alerts').update({ pay: true }).eq('id', currentSecondPaymentActionId);
    
    if (error) alert('Error al aprobar: ' + error.message);
    else {
        alert('Segundo pago aprobado.');
        approveSecondPaymentModal.style.display = 'none';
        loadClientsTable(true);
    }
});

btnRejectSecondPayment?.addEventListener('click', async () => {
    if (!currentSecondPaymentActionId) return;
    
    const { error } = await sbClient.from('payments_alerts').update({ pay: false }).eq('id', currentSecondPaymentActionId);
    
    if (error) alert('Error al rechazar: ' + error.message);
    else {
        alert('Segundo pago rechazado.');
        approveSecondPaymentModal.style.display = 'none';
        loadClientsTable(true);
    }
});

// --- Lógica Modal Reactivar Crédito ---
btnConfirmReactivate?.addEventListener('click', async () => {
    if (!currentReactivateClientCedula) return;

    const { error } = await sbClient.from('clients').update({ closed: false }).eq('cedula', currentReactivateClientCedula);
    
    if (error) alert('Error al reactivar: ' + error.message);
    else {
        alert('Crédito reactivado exitosamente.');
        reactivateCreditModal.style.display = 'none';
        const btn = document.querySelector(`.status-closed[data-cedula="${currentReactivateClientCedula}"]`);
        if(btn) btn.parentElement.innerHTML = '<div class="status-capsule status-open">Crédito Abierto</div>';
    }
});

// --- Lógica Modal Cerrar Crédito ---
btnConfirmCloseCredit?.addEventListener('click', async () => {
    if (!currentCloseClientCedula) return;

    const { error } = await sbClient.from('clients').update({ closed: true }).eq('cedula', currentCloseClientCedula);
    
    if (error) alert('Error al cerrar crédito: ' + error.message);
    else {
        alert('Crédito cerrado exitosamente.');
        closeCreditModal.style.display = 'none';
        // Actualizar visualmente o recargar tabla
        loadClientsTable(true);
    }
});

usersTableBody.addEventListener('click', async (e) => {
    const target = e.target;
    const userId = target.dataset.id;

    // Botón Ver Municipios
    if (target.classList.contains('btn-ver-muni')) {
        const munisStr = target.dataset.muni || '';
        assignedMunisList.innerHTML = '';
        
        if (!munisStr) {
            assignedMunisList.innerHTML = '<li>No tiene municipios asignados.</li>';
        } else {
            const munis = munisStr.split(',').map(m => m.trim());
            munis.forEach(m => {
                const li = document.createElement('li');
                li.textContent = m;
                assignedMunisList.appendChild(li);
            });
        }
        viewAssignedMunisModal.style.display = 'block';
    }

    // Botón Editar
    if (target.classList.contains('btn-editar')) {
        // 1. Obtener datos actuales del usuario desde la BD
       const { data: user, error: userError } = await sbClient
           .from('users')
            .select('name, cedula, email, assigned_municipality, role')
            .eq('id', userId)
            .single();

        // 2. Obtener departamentos y municipios de la colección 'municipalities'
        const { data: deptsData, error: deptError } = await sbClient
            .from('municipalities')
            .select('id, municipalities'); // id es el nombre del departamento

        if (!userError && user && !deptError) {
            currentEditId = userId;
            editName.value = user.name || '';
            editCedula.value = user.cedula || '';
            editEmail.value = user.email || '';
            // Lógica de Roles (dinámica)
            editRole.innerHTML = '';
            
            const rolesDisponibles = ['Usuario'];
            if (currentUserRole === 'Administrador maestro' || currentUserIsDeveloper) {
                rolesDisponibles.push('Administrador');
            }
            if (currentUserIsDeveloper) {
                rolesDisponibles.push('Administrador maestro', 'Desarrollador');
            }

            rolesDisponibles.forEach(role => {
                const option = document.createElement('option');
                option.value = role;
                option.textContent = role;
                editRole.appendChild(option);
            });
            
            editRole.value = user.role || '';

            // Inicializar visibilidad de campos
            toggleLocationFields(editRole.value, 'edit-location-container');

            // Inicializar municipios seleccionados
            if (Array.isArray(user.assigned_municipality)) {
                tempSelectedMunis = user.assigned_municipality;
            } else {
                tempSelectedMunis = (user.assigned_municipality || '').split(',').map(m => m.trim()).filter(m => m !== '');
            }
            // Actualizar el contador visual
            editMuniCount.value = `${tempSelectedMunis.length} municipios asignados`;
            muniSelectionMode = 'edit'; // Indicar que estamos editando

            // Lógica de Departamentos
            editDept.innerHTML = '<option value="">Seleccione Departamento</option>';
            let selectedDeptData = null;

            deptsData.forEach(dept => {
                const option = document.createElement('option');
                option.value = dept.id;
                option.textContent = dept.id;
                editDept.appendChild(option);
            });

            // Si hay solo un departamento, seleccionarlo y bloquear el select
            if (deptsData.length === 1) {
                editDept.value = deptsData[0].id;
                editDept.disabled = true;
                selectedDeptData = deptsData[0];
            } else {
                editDept.disabled = false;
            }

            // Guardar municipios disponibles del departamento seleccionado
            if (selectedDeptData) {
                currentDeptMunis = selectedDeptData.municipalities;
            } else {
                currentDeptMunis = [];
            }

            // Evento al cambiar departamento
            editDept.onchange = () => {
                const dept = deptsData.find(d => d.id === editDept.value);
                currentDeptMunis = dept ? dept.municipalities : [];
                // Opcional: Limpiar selección al cambiar de departamento
                tempSelectedMunis = [];
                editMuniCount.value = `0 municipios asignados`;
            };
            
            editModal.style.display = 'block'; // Mostrar modal
        } else {
            alert('Error al cargar datos para editar');
        }
    }

    // Botón Cambiar Contraseña
    if (target.classList.contains('btn-password')) {
        // Buscar nombre del usuario para mostrar en el modal
        const { data: user, error } = await sbClient.from('users').select('name').eq('id', userId).single();
        
        if (user) {
            currentPassId = userId;
            passUserName.innerText = user.name || 'Sin nombre';
            isRecoveryMode = false; // Modo normal (admin logueado)
            newPasswordInput.value = ''; // Limpiar campo
            passwordModal.style.display = 'block';
        } else {
            alert('Error al obtener datos del usuario');
        }
    }

    // Botón Eliminar
    if (target.classList.contains('btn-eliminar')) {
        if (confirm('¿Estás seguro de eliminar este usuario y su cuenta de acceso? Esta acción es irreversible.')) {
            showLoading('transparent');
            // Obtener la sesión actual para asegurar que el token de autorización se envía.
            const { data: { session } } = await sbClient.auth.getSession();
            if (!session) {
                hideLoading();
                return alert('Error: Sesión no encontrada. Por favor, inicie sesión de nuevo.');
            }
            // Llamada a la Edge Function para borrar de auth y public
            const { data, error } = await sbClient.functions.invoke('delete-user-admin', {
                body: { target_user_id: userId },
                headers: { Authorization: `Bearer ${session.access_token}` }
            });
            
            hideLoading();

            if (error) {
                // Mejorar el mensaje de error para mostrar el detalle de la Edge Function
                let errorMessage = 'Error al eliminar: ' + error.message;
                if (error.context && error.context.error) {
                    errorMessage += `\n\nDetalle: ${error.context.error.message || JSON.stringify(error.context.error)}`;
                } else if (error.context) {
                    errorMessage += `\n\nRespuesta: ${JSON.stringify(error.context)}`;
                }
                alert(errorMessage);
                console.error('Error invoking delete-user-admin:', error, error.context);
            } else {
                alert('Usuario eliminado del sistema.');
                loadUsersTable(); // Recargar la tabla
            }
        }
    }
});

btnCloseAssignedMunis?.addEventListener('click', () => {
    viewAssignedMunisModal.style.display = 'none';
});

// Función para alternar campos de ubicación según rol
function toggleLocationFields(role, containerId) {
    const container = document.getElementById(containerId);
    const isAdmin = ['Administrador', 'Administrador maestro', 'Desarrollador'].includes(role);
    if (isAdmin) {
        container.style.display = 'none';
    } else {
        container.style.display = 'block';
    }
}

// --- Lógica de Creación de Usuario ---

createUserBtn.addEventListener('click', async () => {
    // Limpiar campos
    createName.value = '';
    createCedula.value = '';
    createEmail.value = '';
    createPassword.value = '';
    createRole.value = 'Usuario';
    createMuniCount.value = '';
    tempSelectedMunis = []; // Reiniciar municipios
    muniSelectionMode = 'create'; // Indicar que estamos creando

    // Cargar Departamentos
    const { data: deptsData, error } = await sbClient.from('municipalities').select('id, municipalities');
    
    if (error) return alert('Error al cargar departamentos');

    createDept.innerHTML = '<option value="">Seleccione Departamento</option>';
    
    deptsData.forEach(dept => {
        const option = document.createElement('option');
        option.value = dept.id;
        option.textContent = dept.id;
        createDept.appendChild(option);
    });

    // Lógica de Departamento único (si hay 1, se selecciona y bloquea)
    if (deptsData.length === 1) {
        createDept.value = deptsData[0].id;
        createDept.disabled = true;
        currentDeptMunis = deptsData[0].municipalities;
    } else {
        createDept.disabled = false;
        currentDeptMunis = [];
    }

    // Lógica de Roles según permisos del Administrador actual
    createRole.innerHTML = ''; // Limpiar opciones por defecto
    
    // Opción Usuario (siempre disponible)
    const optUser = document.createElement('option');
    optUser.value = 'Usuario';
    optUser.textContent = 'Usuario';
    createRole.appendChild(optUser);

    // Opción Administrador (solo para Maestro)
    if (currentUserRole === 'Administrador maestro' || currentUserIsDeveloper) {
        const optAdmin = document.createElement('option');
        optAdmin.value = 'Administrador';
        optAdmin.textContent = 'Administrador';
        createRole.appendChild(optAdmin);
    }

    // Opción Administrador Maestro (solo para Desarrollador)
    if (currentUserIsDeveloper) {
        const optMaster = document.createElement('option');
        optMaster.value = 'Administrador maestro';
        optMaster.textContent = 'Administrador maestro';
        createRole.appendChild(optMaster);

        const optDev = document.createElement('option');
        optDev.value = 'Desarrollador';
        optDev.textContent = 'Desarrollador';
        createRole.appendChild(optDev);
    }

    // Inicializar visibilidad de campos
    toggleLocationFields(createRole.value, 'create-location-container');

    // Lógica al cambiar departamento (similar a editar)
    createDept.onchange = () => {
        const dept = deptsData.find(d => d.id === createDept.value);
        currentDeptMunis = dept ? dept.municipalities : [];
        tempSelectedMunis = [];
        createMuniCount.value = `0 seleccionados`;
    };

    createModal.style.display = 'block';
});

createRole?.addEventListener('change', (e) => {
    toggleLocationFields(e.target.value, 'create-location-container');
});

// Abrir modal de municipios desde Creación
createMuniCount?.addEventListener('click', () => {
    openMuniModal();
});

// Función reutilizable para abrir modal de municipios
function openMuniModal() {
    muniContainer.innerHTML = '';
    
    if (currentDeptMunis.length === 0) {
        alert('Por favor seleccione un departamento primero.');
        return;
    }

    currentDeptMunis.forEach(muniName => {
        const label = document.createElement('label');
        label.style.display = 'block';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = muniName;
        checkbox.checked = tempSelectedMunis.includes(muniName);
        
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(' ' + muniName));
        muniContainer.appendChild(label);
    });

    muniModal.style.display = 'block';
}

// Evento para abrir el modal de municipios
editMuniCount?.addEventListener('click', () => {
    muniSelectionMode = 'edit';
    openMuniModal();
});

// Botón "Listo" en el modal de municipios
confirmMuniBtn?.addEventListener('click', () => {
    // Actualizar la variable temporal con lo seleccionado
    tempSelectedMunis = Array.from(muniContainer.querySelectorAll('input[type="checkbox"]:checked'))
        .map(cb => cb.value);
    
    // Actualizar el texto del input en el modal principal
    if (muniSelectionMode === 'edit') {
        editMuniCount.value = `${tempSelectedMunis.length} municipios asignados`;
    } else {
        createMuniCount.value = `${tempSelectedMunis.length} seleccionados`;
    }
    
    // Cerrar modal de municipios
    muniModal.style.display = 'none';
});

// Botón Guardar en el Modal
document.getElementById('saveEditBtn')?.addEventListener('click', async () => {
    if (!currentEditId) return;

    const selectedRole = editRole.value;

    const updates = {
        name: editName.value,
        cedula: editCedula.value,
        // email: editEmail.value, // No se actualiza el email
        assigned_municipality: tempSelectedMunis, // Usar la variable temporal
        role: selectedRole,
        is_admin: ['Administrador', 'Administrador maestro', 'Desarrollador'].includes(selectedRole)
    };

    const { data: { session } } = await sbClient.auth.getSession();
    const { error } = await sbClient.functions.invoke('update-user', {
        body: { user_id: currentEditId, updates: updates },
        headers: { Authorization: `Bearer ${session?.access_token}` }
    });

    if (error) {
        alert('Error al actualizar: ' + error.message);
    } else {
        alert('Usuario actualizado correctamente');
        editModal.style.display = 'none';
        loadUsersTable(); // Recargar la tabla para ver cambios
    }
});

// Botón Cancelar en el Modal
document.getElementById('cancelEditBtn')?.addEventListener('click', () => {
    editModal.style.display = 'none';
    currentEditId = null;
});

// Botón Guardar NUEVO Usuario
document.getElementById('saveCreateBtn')?.addEventListener('click', async () => {
    if (!createEmail.value || !createPassword.value || !createName.value || !createCedula.value) {
        return alert('Por favor complete todos los campos obligatorios.');
    }
    if (createPassword.value.length < 6) {
        return alert('La contraseña debe tener al menos 6 caracteres.');
    }

    const selectedRole = createRole.value;

    // Obtener sesión para autorización
    const { data: { session } } = await sbClient.auth.getSession();
    if (!session) return alert('Sesión expirada. Por favor inicie sesión nuevamente.');

    const { error } = await sbClient.functions.invoke('create-user-admin', {
        body: {
            email: createEmail.value,
            password: createPassword.value,
            name: createName.value,
            cedula: createCedula.value,
            role: selectedRole,
            municipios: tempSelectedMunis,
            is_admin: ['Administrador', 'Administrador maestro', 'Desarrollador'].includes(selectedRole)
        },
        headers: { Authorization: `Bearer ${session.access_token}` }
    });

    if (error) {
        alert('Error al crear usuario: ' + error.message);
    } else {
        alert('Usuario creado exitosamente');
        createModal.style.display = 'none';
        loadUsersTable(); // Recargar tabla
    }
});

document.getElementById('cancelCreateBtn')?.addEventListener('click', () => {
    createModal.style.display = 'none';
});

editRole?.addEventListener('change', (e) => {
    toggleLocationFields(e.target.value, 'edit-location-container');
});

// --- Lógica Modal Contraseña ---

savePassBtn?.addEventListener('click', async () => {
    if (!newPasswordInput.value) return alert('Escribe una nueva contraseña.');
    if (newPasswordInput.value.length < 6) return alert('La contraseña debe tener al menos 6 caracteres.');

    savePassBtn.disabled = true;
    savePassBtn.innerText = 'Actualizando...';

    // El modo de recuperación personalizado está roto y es inseguro.
    // Se deshabilita temporalmente. Se recomienda usar el flujo de recuperación de Supabase.
    if (isRecoveryMode) {
        alert('La recuperación de contraseña por este método no está disponible. Contacte al desarrollador.');
        savePassBtn.disabled = false;
        savePassBtn.innerText = 'Actualizar';
        passwordModal.style.display = 'none';
        isRecoveryMode = false;
        return;
    }

    // --- NUEVA LÓGICA: Llamada a Edge Function para actualizar contraseña ---
    try {
        const { data: { session } } = await sbClient.auth.getSession();
        if (!session) throw new Error('Sesión expirada. Por favor inicie sesión nuevamente.');

        const { error } = await sbClient.functions.invoke('update-user-password-admin', {
            body: {
                target_user_id: currentPassId,
                new_password: newPasswordInput.value
            },
            headers: { Authorization: `Bearer ${session.access_token}` }
        });

        if (error) throw error;

        alert('Contraseña actualizada correctamente');
        passwordModal.style.display = 'none';

    } catch (err) {
        alert('Error al cambiar contraseña: ' + err.message);
    } finally {
        savePassBtn.disabled = false;
        savePassBtn.innerText = 'Actualizar';
        currentPassId = null;
    }
});

cancelPassBtn?.addEventListener('click', () => {
    passwordModal.style.display = 'none';
    currentPassId = null;
});

// --- Lógica Botón Desarrollador (Cambiar mi contraseña) ---
devChangePassBtn?.addEventListener('click', () => {
    // Reutilizamos el modal de contraseña pero configurado para sí mismo
    currentPassId = currentUserId;
    isRecoveryMode = false;
    passUserName.innerText = 'Mí mismo (Desarrollador)';
    newPasswordInput.value = '';
    passwordModal.style.display = 'block';
});

// --- Lógica Olvidé mi Contraseña ---
forgotPassBtn?.addEventListener('click', () => {
    forgotName.value = '';
    forgotEmail.value = '';
    forgotPassModal.style.display = 'block';
});

confirmForgotBtn?.addEventListener('click', async () => {
    const name = forgotName.value;
    const email = forgotEmail.value;
    const role = forgotRole.value;
    const newPassword = document.getElementById('forgot-new-password').value;
    const confirmPassword = document.getElementById('forgot-confirm-password').value;

    if (!name || !email || !role || !newPassword || !confirmPassword) {
        return alert('Por favor, complete todos los campos.');
    }
    if (newPassword.length < 6) {
        return alert('La nueva contraseña debe tener al menos 6 caracteres.');
    }
    if (newPassword !== confirmPassword) {
        return alert('Las contraseñas no coinciden.');
    }

    confirmForgotBtn.innerText = 'Procesando...';
    confirmForgotBtn.disabled = true;

    try {
        const { data, error } = await sbClient.functions.invoke('reset-password-identity', {
            body: {
                name: name,
                email: email,
                role: role,
                new_password: newPassword
            }
        });

        if (error) throw error;

        alert('Contraseña restablecida exitosamente. Ahora puede iniciar sesión con su nueva contraseña.');
        forgotPassModal.style.display = 'none';

    } catch (err) {
        const errorMessage = err.context?.error?.message || err.message || 'Ocurrió un error desconocido.';
        alert(`Error al restablecer la contraseña: ${errorMessage}`);
    } finally {
        confirmForgotBtn.innerText = 'Restablecer Contraseña';
        confirmForgotBtn.disabled = false;
    }
});

cancelForgotBtn?.addEventListener('click', () => {
    forgotPassModal.style.display = 'none';
});

// --- Lógica Botón Desarrollador (Actualizar mis datos) ---
devUpdateDataBtn?.addEventListener('click', async () => {
    // Cargar datos actuales del usuario logueado
    const { data: user, error } = await sbClient
        .from('users')
        .select('name, cedula, email')
        .eq('id', currentUserId)
        .single();

    if (user && !error) {
        devEditName.value = user.name || '';
        devEditCedula.value = user.cedula || '';
        devEditEmail.value = user.email || '';
        devUpdateModal.style.display = 'block';
    } else {
        alert('Error al cargar tus datos.');
    }
});

saveDevUpdateBtn?.addEventListener('click', async () => {
    if (!devEditEmail.value || !devEditName.value || !devEditCedula.value) {
        return alert('Todos los campos son obligatorios');
    }

    const { error } = await sbClient.rpc('update_developer_data', {
        new_name: devEditName.value,
        new_cedula: devEditCedula.value,
        new_email: devEditEmail.value
    });

    if (error) {
        alert('Error al actualizar datos: ' + error.message);
    } else {
        alert('Datos actualizados correctamente.');
        devUpdateModal.style.display = 'none';
        // Actualizar nombre en pantalla si cambió
        // menuUserName.innerText = devEditName.value; // Ya no se usa directamente
        userNameDisplay.innerText = devEditName.value;
    }
});

cancelDevUpdateBtn?.addEventListener('click', () => {
    devUpdateModal.style.display = 'none';
});

closeClientDetailsX?.addEventListener('click', () => {
    clientDetailsModal.style.display = 'none';
});

// --- Lógica Guardar Edición Cliente (Cascada) ---
saveEditClientBtn?.addEventListener('click', async () => {
    if (!currentClientEditCedula) return;

    // 1. Captura de Datos Nuevos
    const newName = editClientName.value;
    const newCedula = editClientCedula.value;
    const newPhone = editClientPhone.value;
    const newAddress = editClientAddress.value;
    const newMuni = editClientMuni.value;
    const newAdvisor = editClientAdvisor.value;
    const newFreq = editClientFrequency.value;

    const clientUpdates = {
        name: newName,
        cedula: newCedula,
        phone: newPhone,
        address: newAddress,
        municipality: newMuni,
        asesor_name: newAdvisor,
        payment_term: [newFreq]
    };

    const { data: { session } } = await sbClient.auth.getSession();
    const { error } = await sbClient.functions.invoke('update-client', {
        body: { client_id: currentClientEditCedula, updates: clientUpdates },
        headers: { Authorization: `Bearer ${session?.access_token}` }
    });

    if (error) {
        console.error('Error en actualización:', error);
        alert('Error al actualizar cliente: ' + error.message);
    } else {
        alert('Cliente y registros asociados actualizados correctamente.');
        editClientModal.style.display = 'none';
        loadClientsTable(true);
        clientsTableBody.innerHTML = '<tr><td colspan="7" style="text-align: center;">Cliente actualizado. Realice una búsqueda para ver los cambios.</td></tr>';
    }
});

cancelEditClientBtn?.addEventListener('click', () => {
    editClientModal.style.display = 'none';
});

// --- Lógica Cupo Extra ---

// Validar input de autorización
moraAuthInput?.addEventListener('input', () => {
    if (moraAuthInput.value === 'AUTORIZAR') {
        btnMoraAccept.disabled = false;
        btnMoraAccept.className = 'btn-primary';
        btnMoraAccept.style.backgroundColor = ''; // Clear inline
        btnMoraAccept.style.color = '';
        btnMoraAccept.style.cursor = 'pointer';
    } else {
        btnMoraAccept.disabled = true;
        btnMoraAccept.className = 'btn-secondary';
        btnMoraAccept.style.backgroundColor = '';
        btnMoraAccept.style.cursor = 'default';
    }
});

btnMoraAccept?.addEventListener('click', () => {
    warningMoraModal.style.display = 'none';
    openEnableQuotaModal();
});

btnMoraCancel?.addEventListener('click', () => {
    warningMoraModal.style.display = 'none';
    currentQuotaClientData = null;
});

function openEnableQuotaModal() {
    quotaClientName.innerText = currentQuotaClientData.name;
    // Desmarcar checkboxes
    document.querySelectorAll('.quota-check').forEach(cb => cb.checked = false);
    enableQuotaModal.style.display = 'block';
}

// Asegurar que solo se seleccione un checkbox
document.querySelectorAll('.quota-check').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            document.querySelectorAll('.quota-check').forEach(cb => {
                if (cb !== this) cb.checked = false;
            });
        }
    });
});

btnQuotaConfirm?.addEventListener('click', async () => {
    const selectedCheck = document.querySelector('.quota-check:checked');
    if (!selectedCheck) {
        return alert('Por favor seleccione un Tipo de Pago.');
    }

    const paymentTerm = selectedCheck.value;

    // Insertar en tabla 'extras'
    const { error } = await sbClient.from('extras').insert([
        {
            cedula: currentQuotaClientData.cedula,
            payment_term: [paymentTerm],
            valid: true
        }
    ]);

    if (error) {
        alert('Error al habilitar cupo: ' + error.message);
    } else {
        alert('Cupo extra habilitado correctamente.');
        enableQuotaModal.style.display = 'none';
        currentQuotaClientData = null;
    }
});

document.getElementById('btn-quota-cancel')?.addEventListener('click', () => {
    enableQuotaModal.style.display = 'none';
    currentQuotaClientData = null;
});

// --- Lógica Nuevo Cliente ---
btnNewClient?.addEventListener('click', async () => {
    // Limpiar campos
    createClientName.value = '';
    createClientCedula.value = '';
    createClientPhone.value = '';
    createClientAddress.value = '';
    createClientAdvisor.innerHTML = '';
    createClientFrequency.value = 'Diario';

    // Cargar departamentos
    const { data: deptsData } = await sbClient.from('municipalities').select('id, municipalities');
    
    if (!deptsData) return alert('Error al cargar departamentos');

    createClientDept.innerHTML = '<option value="">Seleccione Departamento</option>';
    deptsData.forEach(dept => {
        const option = document.createElement('option');
        option.value = dept.id;
        option.textContent = dept.id;
        createClientDept.appendChild(option);
    });

    const loadMunis = (deptId) => {
        createClientMuni.innerHTML = '<option value="">Seleccione Municipio</option>';
        const dept = deptsData.find(d => d.id === deptId);
        if (dept) {
            dept.municipalities.forEach(muni => {
                const opt = document.createElement('option');
                opt.value = muni;
                opt.textContent = muni;
                createClientMuni.appendChild(opt);
            });
        }
    };

    const loadAdvisors = async (muni) => {
        createClientAdvisor.innerHTML = '<option value="">Seleccione Asesor</option>';
        if (!muni) return;
        const { data: advisors } = await sbClient.from('users').select('name').contains('assigned_municipality', [muni])
            .neq('role', 'Administrador').neq('role', 'Administrador maestro').neq('role', 'Desarrollador');
        if (advisors) {
            advisors.forEach(adv => {
                const opt = document.createElement('option');
                opt.value = adv.name;
                opt.textContent = adv.name;
                createClientAdvisor.appendChild(opt);
            });
        }
    };

    if (deptsData.length === 1) {
        createClientDept.value = deptsData[0].id;
        createClientDept.disabled = true;
        loadMunis(deptsData[0].id);
    } else {
        createClientDept.disabled = false;
    }

    createClientDept.onchange = () => {
        loadMunis(createClientDept.value);
        createClientAdvisor.innerHTML = '<option value="">Seleccione Asesor</option>';
    };

    createClientMuni.onchange = () => {
        loadAdvisors(createClientMuni.value);
    };

    createClientModal.style.display = 'block';
});

saveCreateClientBtn?.addEventListener('click', async () => {
    if (!createClientName.value || !createClientCedula.value || !createClientMuni.value) {
        return alert('Nombre, Cédula y Municipio son obligatorios');
    }

    const { error } = await sbClient.from('clients').insert([{
        name: createClientName.value,
        cedula: createClientCedula.value,
        phone: createClientPhone.value,
        address: createClientAddress.value,
        municipality: createClientMuni.value,
        asesor_name: createClientAdvisor.value,
        payment_term: [createClientFrequency.value]
    }]);

    if (error) {
        alert('Error al crear cliente: ' + error.message);
    } else {
        alert('Cliente creado exitosamente');
        createClientModal.style.display = 'none';
        // No recargar tabla completa
    }
});

cancelCreateClientBtn?.addEventListener('click', () => {
    createClientModal.style.display = 'none';
});

// --- Botón Exportar (Menú Principal) ---
if (btnExportMenu) {
    btnExportMenu.addEventListener('click', async () => {
        // Lógica para abrir el modal de exportación
        populateDateSelectors();
        updateExportPeriodText();
        
        // Cargar Departamentos
        if (exportDepartment) {
            exportDepartment.innerHTML = '<option value="">Cargando...</option>';
            try {
                const { data: deptsData } = await sbClient.from('municipalities').select('id, municipalities');
                exportDepartment.innerHTML = '<option value="">Seleccione Departamento</option>';
                if (deptsData) {
                    deptsData.forEach(dept => {
                        const option = document.createElement('option');
                        option.value = dept.id;
                        option.textContent = dept.id;
                        exportDepartment.appendChild(option);
                    });
                    
                    // Evento cambio departamento
                    exportDepartment.onchange = () => {
                        if (exportMunicipality) {
                            exportMunicipality.innerHTML = '<option value="all">Todos los Municipios</option>';
                            const selected = deptsData.find(d => d.id === exportDepartment.value);
                            if (selected && selected.municipalities) {
                                selected.municipalities.forEach(m => {
                                    const opt = document.createElement('option');
                                    opt.value = m;
                                    opt.textContent = m;
                                    exportMunicipality.appendChild(opt);
                                });
                            }
                        }
                    };
                }
            } catch (e) { console.error(e); }
        }

        // Cargar Usuarios
        if (exportUser) {
            exportUser.innerHTML = '<option value="all">Todos los usuarios</option>';
            try {
                const { data: users } = await sbClient.from('users').select('name').order('name');
                if (users) {
                    users.forEach(u => {
                        const opt = document.createElement('option');
                        opt.value = u.name;
                        opt.textContent = u.name;
                        exportUser.appendChild(opt);
                    });
                }
            } catch (e) { console.error(e); }
        }

        if (exportReportModal) exportReportModal.style.display = 'block';
    });
}

// Cerrar modal de exportación
const closeExportModalBtn = document.getElementById('close-export-modal-btn');
if (closeExportModalBtn) {
    closeExportModalBtn.addEventListener('click', () => {
        if (exportReportModal) exportReportModal.style.display = 'none';
    });
}

// --- Lógica Modal Filtro Fechas Exportación ---
if (btnOpenExportDateModal) {
    btnOpenExportDateModal.addEventListener('click', () => {
        // Poblar selectores dinámicamente
        populateDateSelectors();
        exportDateFilterModal.style.display = 'block';
    });
}

function populateDateSelectors() {
    // Día
    exportDay.innerHTML = '<option value="all">Todos</option>';
    for (let i = 1; i <= 31; i++) {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = i;
        exportDay.appendChild(opt);
    }
    
    // Mes
    exportMonth.innerHTML = '<option value="all">Todos</option>';
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    months.forEach((m, i) => {
        const opt = document.createElement('option');
        opt.value = i + 1;
        opt.textContent = m;
        exportMonth.appendChild(opt);
    });

    // Año
    exportYear.innerHTML = '<option value="all">Todos</option>';
    const currentYear = new Date().getFullYear();
    for (let i = 2020; i <= currentYear + 1; i++) {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = i;
        exportYear.appendChild(opt);
    }

    // Setear valores actuales
    exportDay.value = exportFilters.day;
    exportMonth.value = exportFilters.month;
    exportYear.value = exportFilters.year;
}

if (btnApplyExportDate) {
    btnApplyExportDate.addEventListener('click', () => {
        exportFilters.day = exportDay.value;
        exportFilters.month = exportMonth.value;
        exportFilters.year = exportYear.value;
        
        updateExportPeriodText();
        exportDateFilterModal.style.display = 'none';
    });
}

function updateExportPeriodText() {
    const d = exportFilters.day === 'all' ? 'Todos los días' : `Día ${exportFilters.day}`;
    const m = exportFilters.month === 'all' ? 'todos los meses' : `Mes ${exportFilters.month}`;
    const y = exportFilters.year === 'all' ? 'todos los años' : `Año ${exportFilters.year}`;
    
    if (exportFilters.day === 'all' && exportFilters.month === 'all' && exportFilters.year === 'all') {
        exportPeriodText.innerText = "Todas las Fechas";
    } else {
        exportPeriodText.innerText = `${d} de ${m}, ${y}`;
    }
}

// --- Lógica Principal de Exportación ---
if (btnExportAction) {
    btnExportAction.addEventListener('click', async () => {
        btnExportAction.disabled = true;
        btnExportAction.innerText = 'Generando...';

        try {
            // 1. Construir consulta base a Debtors
            let query = sbClient.from('debtors').select('*');

            // Filtro Asesor
            if (exportUser.value && exportUser.value !== 'all') {
                query = query.eq('asesor_name', exportUser.value);
            }

            // Filtro Municipio/Departamento
            if (exportMunicipality.value && exportMunicipality.value !== 'all') {
                query = query.eq('municipality', exportMunicipality.value);
            } else if (exportDepartment.value) {
                const { data: deptData } = await sbClient.from('municipalities').select('municipalities').eq('id', exportDepartment.value).single();
                if (deptData && deptData.municipalities) {
                    query = query.in('municipality', deptData.municipalities);
                }
            }

            const { data: debtors, error } = await query;
            if (error) throw error;

            // 2. Filtrado por Fecha en Memoria
            const filteredDebtors = debtors.filter(d => {
                const dateVal = d.sale_date || d.created_at;
                const dateObj = parseDateValue(dateVal);
                
                if (!dateObj) return false;

                const day = exportDay.value;
                const month = exportMonth.value;
                const year = exportYear.value;

                if (year !== 'all' && dateObj.getFullYear() !== parseInt(year)) return false;
                if (month !== 'all' && (dateObj.getMonth() + 1) !== parseInt(month)) return false;
                if (day !== 'all' && dateObj.getDate() !== parseInt(day)) return false;

                return true;
            });

            if (filteredDebtors.length === 0) {
                alert('No se encontraron registros con los filtros seleccionados.');
                btnExportAction.disabled = false;
                btnExportAction.innerText = 'Exportar Excel';
                return;
            }

            // 3. Obtener Pagos (Vinculación por debtor_number)
            const debtorNumbers = filteredDebtors.map(d => d.debtor_number).filter(n => n);
            let allPayments = [];
            
            if (debtorNumbers.length > 0) {
                const chunkSize = 200;
                for (let i = 0; i < debtorNumbers.length; i += chunkSize) {
                    const chunk = debtorNumbers.slice(i, i + chunkSize);
                    const { data: paymentsChunk } = await sbClient
                        .from('payments')
                        .select('debtor_number, payment_amount, created_at, payment_date')
                        .in('debtor_number', chunk);
                    if (paymentsChunk) allPayments = allPayments.concat(paymentsChunk);
                }
            }

            const paymentsMap = new Map();
            allPayments.forEach(p => {
                if (!paymentsMap.has(p.debtor_number)) paymentsMap.set(p.debtor_number, []);
                paymentsMap.get(p.debtor_number).push(p);
            });

            // 4. Construir Datos para Excel
            const exportData = filteredDebtors.map(d => {
                const payments = paymentsMap.get(d.debtor_number) || [];
                const totalAbono = payments.reduce((sum, p) => sum + (parseFloat(p.payment_amount) || 0), 0);
                
                let lastPaymentDate = null;
                if (payments.length > 0) {
                    payments.sort((a, b) => {
                    const da = parseDateValue(a.created_at) || new Date(0);
                    const db = parseDateValue(b.created_at) || new Date(0);
                        return db - da;
                    });
                    const lastP = payments[0];
                    let rawDate = lastP.created_at;
                    const dateObj = parseDateValue(rawDate);
                    if (dateObj) {
                        dateObj.setHours(12, 0, 0, 0);
                        lastPaymentDate = dateObj;
                    } else {
                        lastPaymentDate = rawDate || '';
                    }
                } else {
                    lastPaymentDate = '';
                }

                let fechaPrestamo = d.sale_date || d.created_at;
                const fpObj = parseDateValue(fechaPrestamo);
                let fechaPrestamoExport = null;
                if (fpObj) {
                    fpObj.setHours(12, 0, 0, 0);
                    fechaPrestamoExport = fpObj;
                }

                // Lógica de ESTADO
                let estado = 'GRIS';
                const pTerm = Array.isArray(d.payment_term) ? d.payment_term[0] : d.payment_term;
                const remaining = Number(d.remaining_payments) || 0;
                const saleDate = parseDateValue(d.sale_date);
                const numPayments = Number(d.number_of_payments) || 0;
                const saldo = Number(d.balance) || 0;

                if (saleDate && numPayments > 0 && pTerm) {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    let expirationDate = new Date(saleDate);

                    if (String(pTerm).toUpperCase() === 'DIARIO') {
                        expirationDate.setDate(expirationDate.getDate() + numPayments);
                    } else if (String(pTerm).toUpperCase() === 'SEMANAL') {
                        expirationDate.setDate(expirationDate.getDate() + (numPayments * 7));
                    }

                    if (expirationDate < today && saldo > 0) {
                        estado = 'ROJO';
                    }
                }

                if (estado !== 'ROJO') {
                    if ((String(pTerm).toUpperCase() === 'DIARIO' && remaining === 1) || (String(pTerm).toUpperCase() === 'SEMANAL' && remaining === 5)) {
                        estado = 'VERDE';
                    } else if ((String(pTerm).toUpperCase() === 'DIARIO' && saldo === 20000) || (String(pTerm).toUpperCase() === 'SEMANAL' && saldo === 40000)) {
                        estado = 'AMARILLO';
                    }
                }

                return {
                    "CLIENTE": d.name,
                    "CEDULA": d.cedula,
                    "MUNICIPIO": d.municipality,
                    "ASESOR": d.asesor_name,
                    "DIRECCION": d.address || '',
                    "TELEFONO": d.phone || '',
                    "FECHA DE PRESTAMO": fechaPrestamoExport,
                    "VALOR CREDITO": parseFloat(d.sale_value) || 0,
                    "INTERESES": parseFloat(d.interests) || 0,
                    "TOTAL A PAGAR": (parseFloat(d.sale_value) || 0) + (parseFloat(d.interests) || 0),
                    "VALOR CUOTA": parseFloat(d.valor_cuota) || 0,
                    "SALDO": saldo,
                    "ABONO": totalAbono,
                    "FECHA ULTIMO ABONO": lastPaymentDate,
                    "TIPO": d.credit_type,
                    "FRECUENCIA": pTerm,
                    "ESTADO": estado
                };
            });

            const wb = XLSX.utils.book_new();
            const ws = XLSX.utils.json_to_sheet(exportData, { cellDates: true });
            
            // Aplicar anchos de columna
            const wscols = Object.keys(exportData[0] || {}).map(k => ({ wch: Math.max(k.length, 15) }));
            ws['!cols'] = wscols;

            // Aplicar estilos (Color en ESTADO y formato Fecha)
            const range = XLSX.utils.decode_range(ws['!ref']);
            
            // Buscar índices de columnas
            let dateColIdx = -1;
            let lastPaymentColIdx = -1;
            let estadoColIdx = -1;
            
            for (let C = range.s.c; C <= range.e.c; ++C) {
                const cell = ws[XLSX.utils.encode_cell({ r: 0, c: C })];
                if (cell && cell.v === "FECHA DE PRESTAMO") dateColIdx = C;
                if (cell && cell.v === "FECHA ULTIMO ABONO") lastPaymentColIdx = C;
                if (cell && cell.v === "ESTADO") estadoColIdx = C;
            }

            for (let R = range.s.r + 1; R <= range.e.r; ++R) {
                // Formato Fecha Prestamo
                if (dateColIdx !== -1) {
                    const cell = ws[XLSX.utils.encode_cell({ r: R, c: dateColIdx })];
                    if (cell && cell.t === 'd') {
                        cell.z = 'dd/mm/yyyy';
                    }
                }
                
                // Formato Fecha Ultimo Abono
                if (lastPaymentColIdx !== -1) {
                    const cell = ws[XLSX.utils.encode_cell({ r: R, c: lastPaymentColIdx })];
                    if (cell && cell.t === 'd') {
                        cell.z = 'dd/mm/yyyy';
                    }
                }
                
                // Formato Estado
                if (estadoColIdx !== -1) {
                    const cell = ws[XLSX.utils.encode_cell({ r: R, c: estadoColIdx })];
                    if (cell && cell.v) {
                        let color = "BFBFBF"; // GRIS
                        if (cell.v === 'VERDE') color = "92D050";
                        else if (cell.v === 'AMARILLO') color = "FFFF00";
                        else if (cell.v === 'ROJO') color = "FF0000";
                        
                        cell.s = { fill: { patternType: "solid", fgColor: { rgb: color } } };
                    }
                }
            }

            XLSX.utils.book_append_sheet(wb, ws, "Reporte");
            XLSX.writeFile(wb, `Reporte_Cartera_${new Date().getTime()}.xlsx`);

        } catch (e) {
            console.error(e);
            alert('Error exportando: ' + e.message);
        } finally {
            btnExportAction.disabled = false;
            btnExportAction.innerText = 'Exportar Excel';
        }
    });
}

// --- Lógica de Importación Masiva (ETL) ---

if (btnImportExcel) {
    btnImportExcel.addEventListener('click', () => {
        if (importExcelInput) importExcelInput.click();
    });
}

if (importExcelInput) {
    importExcelInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;

    if (!confirm('¿Está seguro de importar este archivo? Asegúrese de que el formato sea correcto.')) {
        importExcelInput.value = '';
        return;
    }

    // 1. Pre-carga de Referencias (Caché)
    // Cargar municipios para validación rápida
    const { data: munisData } = await sbClient.from('municipalities').select('municipalities');
    const dbMunicipalities = new Set();
    if (munisData) {
        munisData.forEach(row => {
            if (Array.isArray(row.municipalities)) {
                row.municipalities.forEach(m => dbMunicipalities.add(normalizeText(m)));
            }
        });
    }

    // Cargar usuarios para mapeo de asesores
    const { data: usersList } = await sbClient.from('users').select('name, cedula');
    
    // 2. Lógica de Resolución de Asesor (Jerarquía)
    // Detección por Nombre de Archivo
    const fileName = file.name.split('.').slice(0, -1).join('.'); // Sin extensión
    // Intentar buscar si el nombre del archivo es una cédula de un cobrador
    const fileAsesorMatch = usersList ? usersList.find(u => u.cedula === fileName) : null;
    const isCollectorVerified = !!fileAsesorMatch;
    const verifiedAsesorName = fileAsesorMatch ? fileAsesorMatch.name : null;

    const reader = new FileReader();
    reader.onload = async (e) => {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            
            // Convertir a JSON crudo
            const rawData = XLSX.utils.sheet_to_json(worksheet);

            if (rawData.length === 0) {
                alert('El archivo está vacío.');
                return;
            }

            // Procesamiento por Lotes (Chunking)
            const chunkSize = 50;
            let processedCount = 0;

            for (let i = 0; i < rawData.length; i += chunkSize) {
                const chunk = rawData.slice(i, i + chunkSize);
                await processImportBatch(chunk, dbMunicipalities, usersList, isCollectorVerified, verifiedAsesorName);
                processedCount += chunk.length;
                console.log(`Procesados ${processedCount} de ${rawData.length} registros...`);
            }

            alert('Importación completada exitosamente.');
            loadClientsTable();

        } catch (error) {
            console.error('Error en importación:', error);
            let userMessage = 'Error crítico al procesar el archivo: ' + error.message;
            // Detectar error específico de constraint para dar un mensaje más útil
            if (error.message && error.message.includes('no unique or exclusion constraint')) {
                userMessage = 'Error de Configuración: La columna "cédula" debe ser única en la tabla de clientes. Por favor, pida al administrador que añada una restricción "UNIQUE" a la columna "cedula" en la tabla "clients" de Supabase para que la importación funcione correctamente.';
            }
            alert(userMessage);
        } finally {
            importExcelInput.value = ''; // Limpiar input
        }
    };
    reader.readAsArrayBuffer(file);
});
}

// Función Auxiliar: Normalizar Texto (Quitar acentos, minúsculas)
function normalizeText(text) {
    if (!text) return '';
    return text.toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

// Función Auxiliar: Title Case
function toTitleCase(str) {
    if (!str) return '';
    return str.toString().toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Función Auxiliar: Parsear Fechas Excel
function parseExcelDate(value) {
    if (!value) return new Date().toISOString(); // Fallback a hoy si no hay fecha

    // Si es número (Serial Excel)
    if (typeof value === 'number') {
        // Ajuste fecha Excel (1900 epoch) a JS
        const date = new Date(Math.round((value - 25569) * 86400 * 1000));
        // Validar validez de fecha antes de usar métodos
        if (isNaN(date.getTime())) return new Date().toISOString();
        // Validar año
        if (date.getFullYear() < 2000) return new Date().toISOString();
        return date.toISOString();
    }

    // Si es string
    if (typeof value === 'string') {
        // Intentar formato dd/mm/yyyy
        if (value.includes('/')) {
            const parts = value.split('/');
            if (parts.length === 3) {
                // Asumimos dd/mm/yyyy
                const d = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
                if (!isNaN(d.getTime())) return d.toISOString();
            }
        }
        // Intentar parseo directo
        const d = new Date(value);
        if (!isNaN(d.getTime())) return d.toISOString();
    }

    return new Date().toISOString(); // Fallback final
}

// Función Auxiliar: Formatear fecha a DD-MM-YYYY limpio
function formatDateToDDMMYYYY(isoDateString) {
    if (!isoDateString) return null;
    const date = new Date(isoDateString);
    if (isNaN(date.getTime())) return null;
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}-${month}-${year}`;
}

// Función Auxiliar: Buscar Municipio en BD (Fuzzy match)
function findDbMunicipality(rawMuni, dbSet) {
    if (!rawMuni) return 'Sin Asignar';
    // Si existe en BD o no, guardamos el valor del Excel formateado para no perder datos
    return toTitleCase(rawMuni);
}

// Función Auxiliar: Buscar Asesor Exacto
function findExactMatchUser(rawUser, usersList) {
    if (!usersList) return null;
    const normalized = normalizeText(rawUser);
    const match = usersList.find(u => normalizeText(u.name) === normalized);
    return match ? match.name : null;
}

// Función Principal de Procesamiento de Lote
async function processImportBatch(chunk, dbMunicipalities, usersList, isCollectorVerified, verifiedAsesorName) {
    const rowsData = []; // Datos procesados listos para lógica de negocio

    // 1. Normalización y Preparación de Datos
    chunk.forEach(row => {
        // Normalizar claves a mayúsculas
        const normalizedRow = {};
        Object.keys(row).forEach(key => {
            normalizedRow[key.trim().toUpperCase()] = row[key];
        });

        // Extracción de Columnas
        const cedula = normalizedRow['CEDULA'] ? String(normalizedRow['CEDULA']).trim() : '';
        if (!cedula) return; // Saltar filas sin cédula

        const nombre = toTitleCase(normalizedRow['CLIENTE'] || 'Cliente Sin Nombre');
        const telefono = normalizedRow['TELEFONO'] ? String(normalizedRow['TELEFONO']) : '';
        const direccion = normalizedRow['DIRECCION'] || 'Sin dirección'; // Si existe columna
        
        // Municipio
        const rawMuni = normalizedRow['MUNICIPIO'] || '';
        const municipio = findDbMunicipality(rawMuni, dbMunicipalities);

        // Asesor
        let asesor = '';
        if (isCollectorVerified) {
            asesor = verifiedAsesorName; // Sobrescribir si el archivo es de un cobrador
        } else {
            const rawAsesor = normalizedRow['ASESOR'] || '';
            asesor = findExactMatchUser(rawAsesor, usersList) || 'Sin Asignar';
        }

        // Tipo de Pago
        let tipoPago = 'Diario';
        const rawTipo = normalizeText(normalizedRow['TIPO DE PAGO']);
        if (rawTipo.includes('semanal')) tipoPago = 'Semanal';

        // Valores Numéricos
        const recaudoTotal = Number(normalizedRow['RECAUDO TOTAL']) || 0; // Si existe en Excel para actualizar histórico
        const abono = Number(normalizedRow['ABONO']) || 0;
        const saldo = Number(normalizedRow['SALDO']) || 0;
        const valorCuota = Number(normalizedRow['VALOR CUOTA']) || 0;
        const nroCuotas = Number(normalizedRow['CUOTA']) || Number(normalizedRow['NRO CUOTAS']) || 0;
        const creditoNuevo = Number(normalizedRow['CREDITO NUEVO']) || 0;
        const represte = Number(normalizedRow['REPRESTE']) || 0;
        
        // Fechas
        const fechaPrestamo = parseExcelDate(normalizedRow['FECHA DE PRESTAMO']);
        // Convertir a formato limpio DD-MM-YYYY para guardar en campos de texto
        const fechaPrestamoClean = formatDateToDDMMYYYY(fechaPrestamo);

        // Guardar datos procesados
        const rowData = {
            cedula, nombre, telefono, direccion, municipio, asesor, tipoPago,
            recaudoTotal, abono, saldo, valorCuota, nroCuotas, creditoNuevo, represte, fechaPrestamo,
            fechaPrestamoClean
        };
        rowsData.push(rowData);
    });

    // Enviar lote a Edge Function para procesamiento eficiente
    if (rowsData.length > 0) {
        const { data: { session } } = await sbClient.auth.getSession();
        const { error } = await sbClient.functions.invoke('import-data', {
            body: { rows: rowsData },
            headers: { Authorization: `Bearer ${session?.access_token}` }
        });
        
        if (error) throw new Error('Error en importación (Edge Function): ' + error.message);
    }
}

// --- Lógica Eliminación (Opciones) ---
btnCancelDeleteOptions?.addEventListener('click', () => {
    deleteClientOptionsModal.style.display = 'none';
    clientToDeleteData = null;
});

btnDeleteExtraOnly?.addEventListener('click', async () => {
    if (!clientToDeleteData) return;
    const { error } = await sbClient.from('extras').delete().eq('cedula', clientToDeleteData.cedula);
    if (error) alert('Error al eliminar cupo extra: ' + error.message);
    else {
        alert('Cupo extra eliminado.');
        deleteClientOptionsModal.style.display = 'none';
        loadClientsTable(true);
        clientsTableBody.innerHTML = '<tr><td colspan="7" style="text-align: center;">Cupo eliminado. Realice una búsqueda para ver los cambios.</td></tr>';
    }
});

btnDeleteFullHistory?.addEventListener('click', async () => {
    if (!clientToDeleteData) return;
    if (!confirm('ESTA ACCIÓN ES IRREVERSIBLE. ¿Seguro que desea borrar TODO el historial de ' + clientToDeleteData.name + '?')) return;

    // Borrar de extras
    await sbClient.from('extras').delete().eq('cedula', clientToDeleteData.cedula);
    // Borrar de debtors
    await sbClient.from('debtors').delete().eq('cedula', clientToDeleteData.cedula);
    // Borrar de payments (por nombre de deudor)
    await sbClient.from('payments').delete().eq('debtor_name', clientToDeleteData.name);
    // Borrar de clients
    const { error } = await sbClient.from('clients').delete().eq('cedula', clientToDeleteData.cedula);

    if (error) alert('Error al eliminar cliente: ' + error.message);
    else {
        alert('Cliente y todo su historial eliminados.');
        deleteClientOptionsModal.style.display = 'none';
        loadClientsTable(true);
        clientsTableBody.innerHTML = '<tr><td colspan="7" style="text-align: center;">Cliente eliminado. Realice una búsqueda para ver los cambios.</td></tr>';
    }
});

// --- Lógica Eliminación Múltiple ---
btnMultiDeleteMode?.addEventListener('click', () => {
    isMultiDeleteMode = !isMultiDeleteMode;
    const cols = document.querySelectorAll('.multi-delete-col');
    cols.forEach(col => col.style.display = isMultiDeleteMode ? 'table-cell' : 'none');
    
    // Lógica para botón "Seleccionar Todos"
    let btnSelectAll = document.getElementById('btn-select-all-clients');
    if (!btnSelectAll) {
        btnSelectAll = document.createElement('button');
        btnSelectAll.id = 'btn-select-all-clients';
        btnSelectAll.className = 'btn-primary';
        btnSelectAll.innerText = 'Seleccionar Todos';
        btnSelectAll.style.marginRight = '10px';
        btnSelectAll.onclick = () => {
            const checkboxes = document.querySelectorAll('.client-select-cb');
            const allChecked = Array.from(checkboxes).every(cb => cb.checked);
            checkboxes.forEach(cb => cb.checked = !allChecked);
            updateSelectedCount();
            btnSelectAll.innerText = !allChecked ? 'Deseleccionar Todos' : 'Seleccionar Todos';
        };
        // Insertar antes del botón de borrar
        btnDeleteSelected.parentNode.insertBefore(btnSelectAll, btnDeleteSelected);
    }

    if (isMultiDeleteMode) {
        btnMultiDeleteMode.innerText = 'Cancelar';
        btnMultiDeleteMode.className = 'btn-primary';
        btnMultiDeleteMode.style.backgroundColor = '';
        btnDeleteSelected.style.display = 'inline-block';
        btnSelectAll.style.display = 'inline-block';
    } else {
        btnMultiDeleteMode.innerText = 'Eliminación múltiple';
        btnMultiDeleteMode.className = 'btn-primary';
        btnMultiDeleteMode.style.backgroundColor = '';
        btnDeleteSelected.style.display = 'none';
        btnSelectAll.style.display = 'none';
        // Desmarcar todos
        document.querySelectorAll('.client-select-cb').forEach(cb => cb.checked = false);
        updateSelectedCount();
    }
});

function updateSelectedCount() {
    const count = document.querySelectorAll('.client-select-cb:checked').length;
    selectedCountSpan.innerText = count;
}

btnDeleteSelected?.addEventListener('click', async () => {
    const selected = Array.from(document.querySelectorAll('.client-select-cb:checked'));
    if (selected.length === 0) return alert('Seleccione al menos un cliente.');
    
    if (!confirm(`¿Está seguro de eliminar ${selected.length} clientes y TODO su historial?`)) return;

    btnDeleteSelected.disabled = true;
    btnDeleteSelected.innerText = 'Borrando...';

    // Optimización: Borrado por lotes (Batch Delete)
    const allCedulas = selected.map(cb => cb.dataset.cedula).filter(c => c);
    // const allIds = selected.map(cb => cb.value); // Ya no se usa ID, value es cédula
    // Para pagos, intentamos borrar por cédula si existe, o por nombre como fallback
    const allNames = selected.map(cb => cb.dataset.name).filter(n => n);

    try {
        const promises = [];
        if (allCedulas.length > 0) {
            promises.push(sbClient.from('extras').delete().in('cedula', allCedulas));
            promises.push(sbClient.from('debtors').delete().in('cedula', allCedulas));
            // Borrar pagos por cédula es más seguro
            promises.push(sbClient.from('payments').delete().in('cedula', allCedulas));
            promises.push(sbClient.from('clients').delete().in('cedula', allCedulas));
        }
        await Promise.all(promises);
    } catch (err) {
        console.error("Error en eliminación múltiple:", err);
        alert("Hubo un error eliminando algunos registros: " + err.message);
    }

    alert('Eliminación múltiple completada.');
    btnDeleteSelected.disabled = false;
    btnDeleteSelected.innerText = `Borrar (0)`;
    if (isMultiDeleteMode) btnMultiDeleteMode.click(); // Desactivar modo
    loadClientsTable(true);
    clientsTableBody.innerHTML = '<tr><td colspan="7" style="text-align: center;">Clientes eliminados. Realice una búsqueda para ver los cambios.</td></tr>';
});

// --- Lógica Buscador ---
btnSearchClient?.addEventListener('click', () => {
    modalSearchInput.value = '';
    searchClientModal.style.display = 'block';
    modalSearchInput.focus();
});

modalSearchInput.addEventListener('keydown', async (e) => {
    if (e.key === 'Enter') {
        const term = modalSearchInput.value.trim();
        
        currentClientSearchQuery = term; // Guardar para persistencia
        searchClientModal.style.display = 'none';
        clientsTableBody.innerHTML = '<tr><td colspan="7" style="text-align: center;">Buscando en base de datos...</td></tr>';

        // Búsqueda directa en base de datos (Server-side)
        const { data: filtered, error } = await sbClient
            .from('clients')
            .select('name, cedula, phone, municipality, asesor_name, closed')
            .or(`name.ilike.%${term}%,cedula.ilike.%${term}%`)
            .limit(50);

        if (error) {
            clientsTableBody.innerHTML = `<tr><td colspan="7" style="color: red; text-align: center;">Error: ${error.message}</td></tr>`;
        } else {
            renderClientsTable(filtered || []);
        }
    }
});

btnCloseSearch.addEventListener('click', () => {
    searchClientModal.style.display = 'none';
});

btnShowAllClients.addEventListener('click', () => {
    currentClientSearchQuery = ''; // Resetear búsqueda
    renderClientsTable(allClientsData);
    searchClientModal.style.display = 'none';
});

// --- Lógica Buscar por Asesor ---
btnSearchAdvisor.addEventListener('click', async () => {
    // Cargar usuarios (asesores)
    const { data: users, error } = await sbClient.from('users')
        .select('id, name, assigned_municipality')
        .neq('role', 'Administrador')
        .neq('role', 'Administrador maestro')
        .neq('role', 'Desarrollador'); // Filtrar administradores y desarrolladores
    
    if (error) return alert('Error al cargar asesores');

    searchAdvisorSelect.innerHTML = '<option value="">Seleccione Asesor</option>';
    searchAdvisorMuniSelect.innerHTML = '<option value="">Seleccione primero un asesor</option>';

    users.forEach(u => {
        const opt = document.createElement('option');
        opt.value = u.name;
        opt.textContent = u.name;
        // Guardamos los municipios en un atributo data para acceso rápido
        opt.dataset.munis = Array.isArray(u.assigned_municipality) ? JSON.stringify(u.assigned_municipality) : JSON.stringify([]);
        searchAdvisorSelect.appendChild(opt);
    });

    searchByAdvisorModal.style.display = 'block';
});

searchAdvisorSelect.addEventListener('change', () => {
    const selectedOption = searchAdvisorSelect.options[searchAdvisorSelect.selectedIndex];
    searchAdvisorMuniSelect.innerHTML = '<option value="all">Todos los municipios</option>';
    
    if (selectedOption.value) {
        const munis = JSON.parse(selectedOption.dataset.munis || '[]');
        munis.forEach(m => {
            const opt = document.createElement('option');
            opt.value = m;
            opt.textContent = m;
            searchAdvisorMuniSelect.appendChild(opt);
        });
    }
});

btnDoSearchAdvisor.addEventListener('click', async () => {
    const advisorName = searchAdvisorSelect.value;
    const muni = searchAdvisorMuniSelect.value;

    if (!advisorName) return alert('Seleccione un asesor');

    showLoading('transparent');
    let query = sbClient.from('clients').select('*').eq('asesor_name', advisorName);
    if (muni && muni !== 'all') {
        query = query.eq('municipality', muni);
    }
    
    const { data: filtered, error } = await query;
    hideLoading();

    if (error) {
        alert('Error al buscar: ' + error.message);
    } else {
        renderClientsTable(filtered || []);
        searchByAdvisorModal.style.display = 'none';
        searchClientModal.style.display = 'none';
    }
});

btnCloseSearchAdvisor.addEventListener('click', () => {
    searchByAdvisorModal.style.display = 'none';
});

// --- Lógica Buscar por Municipio ---
btnSearchMuni.addEventListener('click', async () => {
    // Cargar departamentos
    const { data: deptsData, error } = await sbClient.from('municipalities').select('id, municipalities');
    
    if (error) return alert('Error al cargar departamentos');

    searchMuniDeptSelect.innerHTML = '<option value="">Seleccione Departamento</option>';
    searchMuniMuniSelect.innerHTML = '<option value="">Seleccione Municipio</option>';

    deptsData.forEach(dept => {
        const option = document.createElement('option');
        option.value = dept.id;
        option.textContent = dept.id;
        searchMuniDeptSelect.appendChild(option);
    });

    // Lógica de Departamento único
    if (deptsData.length === 1) {
        searchMuniDeptSelect.value = deptsData[0].id;
        searchMuniDeptSelect.disabled = true;
        loadSearchMunis(deptsData[0].municipalities);
    } else {
        searchMuniDeptSelect.disabled = false;
    }

    searchMuniDeptSelect.onchange = () => {
        const dept = deptsData.find(d => d.id === searchMuniDeptSelect.value);
        loadSearchMunis(dept ? dept.municipalities : []);
    };

    function loadSearchMunis(munis) {
        searchMuniMuniSelect.innerHTML = '<option value="">Seleccione Municipio</option>';
        if (munis) {
            munis.forEach(m => {
                const opt = document.createElement('option');
                opt.value = m;
                opt.textContent = m;
                searchMuniMuniSelect.appendChild(opt);
            });
        }
    }

    searchByMuniModal.style.display = 'block';
});

btnDoSearchMuni.addEventListener('click', async () => {
    const muni = searchMuniMuniSelect.value;

    if (!muni) return alert('Seleccione un municipio');

    showLoading('transparent');
    const { data: filtered, error } = await sbClient.from('clients').select('*').eq('municipality', muni);
    hideLoading();

    if (error) {
        alert('Error al buscar: ' + error.message);
    } else {
        renderClientsTable(filtered || []);
        searchByMuniModal.style.display = 'none';
        searchClientModal.style.display = 'none';
    }
});

btnCloseSearchMuni.addEventListener('click', () => {
    searchByMuniModal.style.display = 'none';
});

// --- Lógica Gestión de Municipios ---

// Llenar selectores de departamentos con la lista interna
function populateDeptSelects() {
    const selects = [viewMuniDeptSelect, createMuniDeptSelect];
    selects.forEach(sel => {
        sel.innerHTML = '<option value="">Seleccione Departamento</option>';
        DEPARTAMENTOS_COLOMBIA.forEach(dept => {
            const opt = document.createElement('option');
            opt.value = dept;
            opt.textContent = dept;
            sel.appendChild(opt);
        });
    });
}

// Inicializar selectores y mostrar sección
btnMunicipalitiesMgmt.addEventListener('click', () => {
    mainMenuContainer.style.display = 'none';
    municipalitiesContainer.style.display = 'block';
    populateDeptSelects();
});

// Botón Ver Municipios (Mostrar caja)
btnViewMunisSection.addEventListener('click', () => {
    createMunisBox.style.display = 'none';
    viewMunisBox.style.display = 'block';
});

// Botón Buscar Municipios (Ver)
btnSearchMunisDb.addEventListener('click', async () => {
    const dept = viewMuniDeptSelect.value;
    if (!dept) return alert('Seleccione un departamento');

    munisListContainer.innerHTML = 'Cargando...';

    const { data, error } = await sbClient
        .from('municipalities')
        .select('id, municipalities')
        .eq('id', dept)
        .single();

    if (error && error.code !== 'PGRST116') { // Ignorar error si no encuentra fila (es nuevo)
        munisListContainer.innerHTML = 'Error al cargar: ' + error.message;
        return;
    }

    const munis = data ? data.municipalities : [];
    renderMunisList(munis, dept);
});

function renderMunisList(munis, deptId) {
    munisListContainer.innerHTML = '';
    if (!munis || munis.length === 0) {
        munisListContainer.innerHTML = '<p>No hay municipios registrados en este departamento.</p>';
        return;
    }

    const ul = document.createElement('ul');
    ul.style.listStyle = 'none';
    ul.style.padding = '0';

    munis.forEach((muni, index) => {
        const li = document.createElement('li');
        li.style.padding = '10px';
        li.style.borderBottom = '1px solid #eee';
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.style.alignItems = 'center';

        const span = document.createElement('span');
        span.textContent = muni;

        const divBtns = document.createElement('div');
        
        const btnEdit = document.createElement('button');
        btnEdit.textContent = 'Editar';
        btnEdit.className = 'btn-primary';
        btnEdit.style.marginRight = '5px'; // Keep margin for spacing
        btnEdit.onclick = async () => {
            const newName = prompt('Editar nombre del municipio:', muni);
            if (newName && newName !== muni) {
                munis[index] = newName;
                await updateMunisInDb(deptId, munis);
            }
        };

        const btnDel = document.createElement('button');
        btnDel.textContent = 'Eliminar';
        btnDel.className = 'btn-danger';
        btnDel.onclick = async () => {
            if (confirm(`¿Eliminar ${muni}?`)) {
                munis.splice(index, 1);
                await updateMunisInDb(deptId, munis);
            }
        };

        divBtns.appendChild(btnEdit);
        divBtns.appendChild(btnDel);
        li.appendChild(span);
        li.appendChild(divBtns);
        ul.appendChild(li);
    });

    munisListContainer.appendChild(ul);
}

async function updateMunisInDb(deptId, newMunisArray) {
    const { data: { session } } = await sbClient.auth.getSession();
    const { error } = await sbClient.functions.invoke('update-municipality', {
        body: { dept_id: deptId, municipalities: newMunisArray },
        headers: { Authorization: `Bearer ${session?.access_token}` }
    });

    if (error) {
        alert('Error al actualizar: ' + error.message);
    } else {
        // Recargar lista
        renderMunisList(newMunisArray, deptId);
    }
}

// Botón Crear Municipios
btnCreateMunisSection.addEventListener('click', () => {
    viewMunisBox.style.display = 'none';
    createMunisBox.style.display = 'block';
    // Reiniciar inputs (1 por defecto)
    newMunisInputsContainer.innerHTML = '';
    addMuniInput(false);
});

function addMuniInput(allowDelete = true) {
    const div = document.createElement('div');
    div.style.marginBottom = '10px';
    div.style.display = 'flex';
    div.style.alignItems = 'flex-end';
    div.style.gap = '2px';

    const wrapper = document.createElement('div');
    wrapper.style.flexGrow = '1';
    wrapper.innerHTML = `
        <label>Nombre del Municipio:</label>
        <input type="text" class="new-muni-input" style="width: 100%; padding: 8px; height: 38px; box-sizing: border-box;">
    `;

    div.appendChild(wrapper);

    if (allowDelete) {
        const btnDel = document.createElement('button');
        btnDel.textContent = 'Borrar';
        btnDel.className = 'btn-primary';
        btnDel.style.height = '38px';
        btnDel.onclick = () => div.remove();
        div.appendChild(btnDel);
    }
    
    newMunisInputsContainer.appendChild(div);
}

btnAddMuniField.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.new-muni-input');
    if (inputs.length >= 5) {
        return alert('Máximo 5 municipios a la vez.');
    }
    addMuniInput();
});

btnSaveNewMuni.addEventListener('click', async () => {
    const dept = createMuniDeptSelect.value;
    if (!dept) return alert('Seleccione un departamento');

    // Recolectar nombres de los inputs
    const inputs = document.querySelectorAll('.new-muni-input');
    const newNames = [];
    inputs.forEach(input => {
        if (input.value.trim()) newNames.push(input.value.trim());
    });

    if (newNames.length === 0) return alert('Ingrese al menos un nombre de municipio');

    // Obtener array actual
    const { data } = await sbClient.from('municipalities').select('municipalities').eq('id', dept).single();
    const currentMunis = data ? data.municipalities : [];
    
    // Agregar nuevos (evitando duplicados si se desea, aquí solo agregamos)
    const updatedMunis = currentMunis.concat(newNames);
    
    await updateMunisInDb(dept, updatedMunis);
    alert('Municipios guardados correctamente.');
    // No recargamos la vista de "Ver Municipios" ni filtramos, como se solicitó.
    // Opcional: Limpiar inputs
    newMunisInputsContainer.innerHTML = '';
    addMuniInput(false);
});

btnCancelNewMuni.addEventListener('click', () => {
    createMunisBox.style.display = 'none';
});

// ==========================================
// LÓGICA TABLERO DE CONTROL (DASHBOARD)
// ==========================================

btnDashboardDaily.addEventListener('click', () => { currentDashboardMode = 'daily'; loadDashboardData('daily'); });
btnDashboardWeekly.addEventListener('click', () => { currentDashboardMode = 'weekly'; loadDashboardData('weekly'); });

async function loadDashboardData(mode, isBackground = false) {
    if (!isBackground) {
        dashboardCreditsBody.innerHTML = '<tr><td colspan="6">Cargando...</td></tr>';
        dashboardCollectionsBody.innerHTML = '<tr><td colspan="5">Cargando...</td></tr>';
    }
    
    // 1. Algoritmo de Fechas
    const now = new Date();
    let startDate, endDate;

    if (mode === 'daily') {
        // Modo Diario: 00:00:00 a 23:59:59 del día actual
        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
        endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
        dashboardDateRange.innerText = `Modo Diario: ${startDate.toLocaleDateString()}`;
        
        // Estilos botones
        btnDashboardDaily.className = 'btn-primary';
        btnDashboardWeekly.className = 'btn-secondary';
    } else {
        // Modo Semanal: Lunes a Domingo
        const day = now.getDay(); // 0 (Dom) - 6 (Sab)
        const diff = now.getDate() - day + (day === 0 ? -6 : 1); // Ajustar al lunes
        startDate = new Date(now.setDate(diff));
        startDate.setHours(0, 0, 0, 0);
        
        endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 6);
        endDate.setHours(23, 59, 59, 999);
        
        dashboardDateRange.innerText = `Modo Semanal: ${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
        
        // Estilos botones
        btnDashboardDaily.className = 'btn-secondary';
        btnDashboardWeekly.className = 'btn-primary';
    }

    const startISO = startDate.toISOString();
    const endISO = endDate.toISOString();

    try {
        // B. Estrategia de Consulta
        // Se eliminan filtros de created_at para usar sale_date/payment_date/etc en memoria

        // 1. Créditos (Debtors)
        let debtorsQuery = sbClient.from('debtors').select('*');
        const { data: debtors, error: debtError } = await debtorsQuery;
        if (debtError) throw debtError;

        // 2. Pagos (Payments)
        let paymentsQuery = sbClient.from('payments').select('*')
            .gte('created_at', startISO)
            .lte('created_at', endISO);
        const { data: payments, error: payError } = await paymentsQuery;
        if (payError) throw payError;

        // 2. Análisis Tabla de Créditos (Izquierda)
        // Consulta Principal: Debtors creados en el rango
        const newCredits = debtors.filter(d => {
            // Filtro de fecha para los CREDITOS
            const debtCreatedAt = new Date(d.created_at);
            return debtCreatedAt >= startDate && debtCreatedAt <= endDate;
        });

        // Procesamiento Créditos
        // Procesa créditos que pasaron el filtro inicial
        const processedCredits = newCredits.filter(d => { // AQUI
            // Exclusión de Importados
            if (d.imported === true) return false;
            return true;
        });

        currentDashboardCreditosData = processedCredits; // Persistencia para descarga
        renderCreditsTable(processedCredits);

        // 3. Análisis Tabla de Cobros y Recaudos (Derecha)
        // A. Obtener Pagos en el rango (Recaudo Real)
        const paymentsInRange = payments;


        // Filtrar pagos importados si aplica (según prompt)
        const validPayments = paymentsInRange.filter(p => p.imported !== true);

        // B. Obtener Deudores Relevantes (Activos + Los que pagaron hoy aunque saldo sea 0)
        //INNER JOIN


        // B1. Deudores con saldo > 0
        const activeDebtors = debtors.filter(d => d.balance > 0);

        // B2. Deudores que pagaron en el rango (para recuperar "Deudores Faltantes" que quedaron en 0)
        const paidDebtorNumbers = [...new Set(validPayments.map(p => p.debtor_number).filter(n => n))];
        let paidDebtors = [];
        if (paidDebtorNumbers.length > 0) {
            paidDebtors = debtors.filter(d => paidDebtorNumbers.includes(d.debtor_number));
        }

        // Unir listas de deudores (Activos + Pagaron) eliminando duplicados por debtor_number
        const allRelevantDebtorsMap = new Map();
        (activeDebtors || []).forEach(d => allRelevantDebtorsMap.set(d.debtor_number, d));
        paidDebtors.forEach(d => allRelevantDebtorsMap.set(d.debtor_number, d));
        const allRelevantDebtors = Array.from(allRelevantDebtorsMap.values());

        // C. Agrupación y Cálculos
        const groupedData = {}; // Clave: Asesor + Municipio

        allRelevantDebtors.forEach(d => {
            // Validación de paymentTerm (Polimorfismo String/Array)
            let term = d.payment_term;
            let isTermValid = false;
            const targetTerm = mode === 'daily' ? 'DIARIO' : 'SEMANAL';

            if (Array.isArray(term)) {
                // Si es array, verificamos si incluye el término (insensible a mayúsculas)
                isTermValid = term.some(t => t.toUpperCase() === targetTerm);
            } else if (typeof term === 'string') {
                isTermValid = term.toUpperCase() === targetTerm;
            }

            if (!isTermValid) return; // Si no corresponde al modo, saltar

            // Clave de agrupación
            const key = `${d.asesor_name || 'Sin Asesor'}-${d.municipality || 'Sin Muni'}`;
            
            if (!groupedData[key]) {
                groupedData[key] = {
                    asesor: d.asesor_name || 'Sin Asesor',
                    municipio: d.municipality || 'Sin Muni',
                    cobroEsperado: 0,
                    recaudoReal: 0
                };
            }

            // Cálculo de Cobro Esperado (Regla de Negocio)
            // Excepción de Creación: No sumar al cobro esperado si el crédito se creó en el rango actual
            const debtorCreatedAt = new Date(d.created_at).getTime();
            const rangeStart = startDate.getTime();
            const rangeEnd = endDate.getTime();

            // Si fue creado ANTES del rango actual, se debe cobrar.
            // Si fue creado DENTRO del rango, NO se cobra hoy/esta semana.
            if (debtorCreatedAt < rangeStart) {
                groupedData[key].cobroEsperado += (parseFloat(d.valor_cuota) || 0);
            }
        });

        // Cálculo de Recaudo Real (Cruce de Pagos)
        validPayments.forEach(p => {
            // Encontrar el deudor (crédito) específico en memoria usando debtor_number
            const debtor = allRelevantDebtors.find(d => d.debtor_number === p.debtor_number);

            if (debtor) {
                // Validar pertenencia al modo (Diario/Semanal)
                let term = debtor.payment_term;
                let isTermValid = false;
                const targetTerm = mode === 'daily' ? 'DIARIO' : 'SEMANAL';

                if (Array.isArray(term)) {
                    isTermValid = term.some(t => t.toUpperCase() === targetTerm);
                } else if (typeof term === 'string') {
                    isTermValid = term.toUpperCase() === targetTerm;
                }

                if (isTermValid) {
                    const key = `${debtor.asesor_name || 'Sin Asesor'}-${debtor.municipality || 'Sin Muni'}`;
                    
                    // Asegurar que el grupo existe (por si el deudor pagó todo y no salió en activos, pero sí en paidDebtors)
                    if (!groupedData[key]) {
                        groupedData[key] = {
                            asesor: debtor.asesor_name || 'Sin Asesor',
                            municipio: debtor.municipality || 'Sin Muni',
                            cobroEsperado: 0, // Si pagó y se creó hoy, esperado es 0. Si es viejo, ya se sumó arriba.
                            recaudoReal: 0
                        };
                    }
                    
                    // Sumar pago
                    groupedData[key].recaudoReal += (parseFloat(p.amount) || parseFloat(p.payment_amount) || 0);
                }
            }
        });

        // Convertir objeto a array y calcular %
        const collectionsArray = Object.values(groupedData).map(item => {
            const percent = item.cobroEsperado > 0 
                ? (item.recaudoReal / item.cobroEsperado) * 100 
                : (item.recaudoReal > 0 ? 100 : 0); // Si no había cobro esperado pero hubo recaudo, es 100% o extra
            return { ...item, percent };
        });

        currentDashboardCobrosData = collectionsArray; // Persistencia
        renderCollectionsTable(collectionsArray);

    } catch (err) {
        console.error("Error Dashboard:", err);
        alert("Error cargando el tablero: " + err.message);
    }
}

function renderCreditsTable(data) {
    dashboardCreditsBody.innerHTML = '';
    if (data.length === 0) {
        dashboardCreditsBody.innerHTML = '<tr><td colspan="6">No hay créditos nuevos en este periodo.</td></tr>';
        return;
    }

    data.forEach(d => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${d.asesor_name || ''}</td>
            <td>${d.municipality || ''}</td>
            <td>${d.credit_type || ''}</td>
            <td>$${(parseFloat(d.sale_value) || 0).toLocaleString()}</td>
            <td>$${(parseFloat(d.interests) || 0).toLocaleString()}</td>
            <td>$${(parseFloat(d.valor_cuota) || 0).toLocaleString()}</td>
        `;
        dashboardCreditsBody.appendChild(row);
    });
}

function renderCollectionsTable(data) {
    dashboardCollectionsBody.innerHTML = '';
    if (data.length === 0) {
        dashboardCollectionsBody.innerHTML = '<tr><td colspan="5">No hay datos de cobro/recaudo.</td></tr>';
        return;
    }

    data.forEach(d => {
        const row = document.createElement('tr');
        // Colorear % si es bajo o alto
        const color = d.percent >= 100 ? 'green' : (d.percent < 50 ? 'red' : 'orange');
        
        row.innerHTML = `
            <td>${d.asesor}</td>
            <td>${d.municipio}</td>
            <td>$${d.cobroEsperado.toLocaleString()}</td>
            <td>$${d.recaudoReal.toLocaleString()}</td>
            <td style="color:${color}; font-weight:bold;">${d.percent.toFixed(1)}%</td>
        `;
        dashboardCollectionsBody.appendChild(row);
    });
}

// 4. Funcionalidad de Descargas
btnDashboardDownload.addEventListener('click', () => {
    if (typeof XLSX === 'undefined') {
        alert('La librería XLSX no está cargada. Por favor recargue la página.');
        return;
    }

    // 1. Preparar datos para Hoja "Cobros"
    // Transformamos el array de objetos para que las claves sean los encabezados exactos del Excel
    const cobrosData = currentDashboardCobrosData.map(row => ({
        "ASESOR": row.asesor,
        "MUNICIPIO": row.municipio,
        "COBRO": row.cobroEsperado,
        "RECAUDO": row.recaudoReal,
        "% COBRO": row.percent.toFixed(2) + '%'
    }));

    // 2. Preparar datos para Hoja "Creditos"
    const creditosData = currentDashboardCreditosData.map(row => ({
        "ASESOR": row.asesor_name,
        "MUNICIPIO": row.municipality,
        "TIPO CREDITO": row.credit_type,
        "VALOR CREDITO": row.sale_value,
        "GANANCIAS": row.interests,
        "CUOTA": row.valor_cuota
    }));

    // 3. Generar el Libro de Excel (Workbook)
    const wb = XLSX.utils.book_new();
    const wsCobros = XLSX.utils.json_to_sheet(cobrosData);
    const wsCreditos = XLSX.utils.json_to_sheet(creditosData);

    // 4. Adjuntar las hojas al libro
    XLSX.utils.book_append_sheet(wb, wsCobros, "Cobros");
    XLSX.utils.book_append_sheet(wb, wsCreditos, "Creditos");

    // 5. Descargar archivo
    XLSX.writeFile(wb, "reporte_tablero.xlsx");
});

// ==========================================
// LÓGICA DE ENLACES DINÁMICOS (CONECTION)
// ==========================================

async function handleLinkNavigation(linkName) {
    // 1. Buscar link en la tabla conection
    const { data, error } = await sbClient
        .from('conection')
        .select('link_conecction')
        .eq('name_link', linkName)
        .single();

    if (data && data.link_conecction) {
        // Si existe, redirigir
        window.open(data.link_conecction, '_blank');
    } else {
        // Si no existe (o error de no encontrado), abrir modal de provisión
        provLinkName.value = linkName;
        provLinkUrl.value = '';
        linkProvisionModal.style.display = 'block';
    }
}

btnSaveProvisionLink.addEventListener('click', async () => {
    const name = provLinkName.value;
    const url = provLinkUrl.value;

    if (!url) return alert('Ingrese la URL');

    // Obtener el contador actual (número máximo)
    const { data: maxData } = await sbClient
        .from('conection')
        .select('number')
        .order('number', { ascending: false })
        .limit(1);
    
    let nextNum = 1;
    if (maxData && maxData.length > 0) {
        nextNum = (maxData[0].number || 0) + 1;
    }

    const { error } = await sbClient.from('conection').insert({
        name_link: name,
        link_conecction: url,
        number: nextNum
    });

    if (error) {
        alert('Error al guardar link: ' + error.message);
    } else {
        alert('Link guardado. Redirigiendo...');
        linkProvisionModal.style.display = 'none';
        window.open(url, '_blank');
    }
});

// ==========================================
// LÓGICA DE REPORTES (ADMIN / DEV)
// ==========================================

function openReportsWorkspace() {
    openWorkspace(adminReportsContainer);
    
    const adminView = document.getElementById('admin-view-reports');
    const devView = document.getElementById('dev-view-reports');

    if (currentUserIsDeveloper) {
        adminView.style.display = 'none';
        devView.style.display = 'block';
        loadDevReportsTable();
    } else {
        // Admin o Admin Maestro
        adminView.style.display = 'block';
        devView.style.display = 'none';
    }
}

// --- Lógica Admin (Enviar Reporte) ---
document.getElementById('btn-create-admin-report').addEventListener('click', () => {
    reportNameInput.value = '';
    reportDescInput.value = '';
    createAdminReportModal.style.display = 'block';
});

btnSendAdminReport.addEventListener('click', async () => {
    const name = reportNameInput.value;
    const desc = reportDescInput.value;
    if (!name || !desc) return alert('Complete todos los campos');
    if (!currentUserId) return alert('Error de sesión. Por favor recargue la página.');

    const now = new Date();
    // Formato dd-mm-yyyy
    const dateStr = `${String(now.getDate()).padStart(2,'0')}-${String(now.getMonth()+1).padStart(2,'0')}-${now.getFullYear()}`;

    const { error } = await sbClient.from('admin_reports').insert({
        name: name,
        description: desc,
        report_date: dateStr,
        created_at: now,
        do: null, // Se guarda como null explícitamente
        user_id: currentUserId // Necesario para políticas RLS
    });

    if (error) alert('Error: ' + error.message);
    else {
        alert('Reporte enviado');
        createAdminReportModal.style.display = 'none';
    }
});

// --- Lógica Dev (Ver y Atender Reportes) ---
async function loadDevReportsTable() {
    const tbody = document.getElementById('dev-reports-body');
    tbody.innerHTML = '<tr><td colspan="4">Cargando...</td></tr>';

    const { data: reports, error } = await sbClient.from('admin_reports').select('*').order('created_at', { ascending: false });

    if (error) {
        tbody.innerHTML = `<tr><td colspan="4">Error: ${error.message}</td></tr>`;
        return;
    }

    tbody.innerHTML = '';
    reports.forEach(r => {
        let statusHtml = '';
        if (r.do === true) {
            statusHtml = `<div class="status-capsule status-capsule-green">Atendido</div>`;
        } else {
            statusHtml = `<div class="status-capsule status-capsule-gray" style="cursor:pointer;" onclick="openMarkDoneModal(${r.id})">Sin atender</div>`;
        }

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${r.name}</td>
            <td><button class="btn-primary btn-action-small" onclick="openDescModal('${r.name}', '${r.description.replace(/'/g, "\\'")}')" style="background-color: #3498db;" title="Ver"><i class="fas fa-eye"></i></button></td>
            <td>${r.report_date}</td>
            <td>${statusHtml}</td>
        `;
        tbody.appendChild(row);
    });
}

// Funciones globales para onclick en HTML generado
window.openDescModal = (title, desc) => {
    document.getElementById('view-report-title').innerText = title;
    document.getElementById('view-report-content').innerText = desc;
    viewReportDescModal.style.display = 'block';
};

window.openMarkDoneModal = (id) => {
    currentReportActionId = id;
    markReportDoneModal.style.display = 'block';
};

btnConfirmReportDone.addEventListener('click', async () => {
    if (!currentReportActionId) return;
    
    const { error } = await sbClient.from('admin_reports').update({ do: true }).eq('id', currentReportActionId);
    
    if (error) alert('Error: ' + error.message);
    else {
        markReportDoneModal.style.display = 'none';
        loadDevReportsTable();
    }
});

// ==========================================
// LÓGICA HISTORIAL DE CRÉDITOS (ACCIONES)
// ==========================================

const clientCreditsTableBody = document.getElementById('client-credits-table-body');

clientCreditsTableBody.addEventListener('click', async (e) => {
    const target = e.target;
    const debtorNumber = target.dataset.debtorNumber;

    // 1. Botón Ver Pagos (Ojo)
    if (target.classList.contains('btn-view-payments')) {
        currentCreditPaymentsNumber = debtorNumber;
        loadCreditPayments(currentCreditPaymentsNumber);
        creditPaymentsModal.style.display = 'flex';
    }

    // 2. Botón Editar Crédito (Lápiz)
    if (target.classList.contains('btn-edit-credit-history')) {
        currentCreditEditNumber = debtorNumber;
        // Cargar datos del crédito
        const { data: credit } = await sbClient.from('debtors').select('*').eq('debtor_number', debtorNumber).single();
        if (credit) {
            // Pre-llenar inputs
            // Convertir fecha ISO a YYYY-MM-DD para input date
            let dateVal = '';
            const rawDate = credit.sale_date || '';
            // Si viene como dd-MM-yyyy (ej: 11-02-2022), convertir a 2022-02-11
            if (/^\d{2}-\d{2}-\d{4}$/.test(rawDate)) {
                const parts = rawDate.split('-');
                dateVal = `${parts[2]}-${parts[1]}-${parts[0]}`;
            } else if (rawDate) {
                // Intentar parsear si es ISO u otro formato
                const d = new Date(rawDate);
                if (!isNaN(d.getTime())) dateVal = d.toISOString().split('T')[0];
            }
            editCreditDate.value = dateVal;
            editCreditValue.value = credit.sale_value;
            editCreditInterests.value = credit.interests;
            editCreditQuota.value = credit.valor_cuota;
            editCreditBalance.value = credit.balance;
            
            // Nuevos campos
            editCreditType.value = credit.credit_type || 'Nuevo';
            editCreditTerm.value = (Array.isArray(credit.payment_term) ? credit.payment_term[0] : credit.payment_term) || 'Diario';
            editCreditRemaining.value = credit.remaining_payments || 0;
            editCreditMuni.value = credit.municipality || '';
            editCreditAdvisor.value = credit.asesor_name || '';
            
            editCreditModal.style.display = 'block';
        }
    }

    // 3. Botón Eliminar Crédito (Basura)
    if (target.classList.contains('btn-delete-credit-history')) {
        if (confirm('¿Está seguro de eliminar este crédito y TODOS sus pagos asociados? Esta acción no se puede deshacer.')) {
            // Lógica de Eliminación en Cascada
            // 1. Eliminar pagos asociados (debtor_number)
            await sbClient.from('payments').delete().eq('debtor_number', debtorNumber);
            
            // 2. Eliminar el crédito (debtors)
            const { error } = await sbClient.from('debtors').delete().eq('debtor_number', debtorNumber);

            if (error) {
                alert('Error al eliminar crédito: ' + error.message);
            } else {
                alert('Crédito eliminado correctamente.');
                // Recargar el modal de detalles del cliente para ver el cambio.
                if (currentViewingClientCedula) openClientDetails(currentViewingClientCedula);
            }
        }
    }
});

// --- Lógica Modal Editar Crédito ---
btnSaveEditCredit?.addEventListener('click', async () => {
    if (!currentCreditEditNumber) return;

    // Manejo de fechas: Convertir input YYYY-MM-DD a texto dd-MM-yyyy
    let saleDateText = null;
    if (editCreditDate.value) {
        const parts = editCreditDate.value.split('-'); // [YYYY, MM, DD]
        if (parts.length === 3) {
            saleDateText = `${parts[2]}-${parts[1]}-${parts[0]}`; // dd-MM-yyyy
        }
    }

    const updates = {
        sale_date: saleDateText,
        // created_at: saleDateISO, // Se comenta para no sobrescribir el timestamp original con texto
        sale_value: editCreditValue.value,
        interests: editCreditInterests.value,
        valor_cuota: editCreditQuota.value,
        balance: editCreditBalance.value,
        credit_type: editCreditType.value,
        payment_term: [editCreditTerm.value],
        remaining_payments: editCreditRemaining.value,
        municipality: editCreditMuni.value,
        asesor_name: editCreditAdvisor.value
    };

    const { data: { session } } = await sbClient.auth.getSession();
    const { error } = await sbClient.functions.invoke('update-credit', {
        body: { credit_id: currentCreditEditNumber, updates: updates },
        headers: { Authorization: `Bearer ${session?.access_token}` }
    });

    if (error) {
        alert('Error al actualizar crédito: ' + error.message);
    } else {
        alert('Crédito actualizado.');
        editCreditModal.style.display = 'none';
        // Recargar el modal de detalles del cliente para ver el cambio.
        if (currentViewingClientCedula) openClientDetails(currentViewingClientCedula);
    }
});

btnCancelEditCredit?.addEventListener('click', () => {
    editCreditModal.style.display = 'none';
});

// --- Lógica Modal Pagos del Crédito ---
async function loadCreditPayments(debtorNumber, isBackground = false) {
    if (!isBackground) creditPaymentsBody.innerHTML = '<tr><td colspan="5">Cargando...</td></tr>';
    
    const { data: payments, error } = await sbClient
        .from('payments')
        .select('*')
        .eq('debtor_number', debtorNumber)
        .order('created_at', { ascending: false });

    creditPaymentsBody.innerHTML = '';
    
    if (error || !payments || payments.length === 0) {
        creditPaymentsBody.innerHTML = '<tr><td colspan="5">No hay pagos registrados.</td></tr>';
        return;
    }

    payments.forEach(p => {
        const row = document.createElement('tr');
        // Mapeo de campos: Fecha, Día, Abono, Método
        // Mostrar tal cual viene de la BD (texto)
        const dateStr = p.payment_date || p.created_at || '';
        
        row.innerHTML = `
            <td class="payment-date-cell" data-val="${dateStr}">${dateStr}</td>
            <td class="payment-day-cell">${p.payment_day || ''}</td>
            <td class="payment-amount-cell" data-val="${p.payment_amount}">$${parseFloat(p.payment_amount).toLocaleString()}</td>
            <td class="payment-method-cell" data-val="${p.payment_method || 'Efectivo'}">${p.payment_method || 'Efectivo'}</td>
            <td>
                <div style="display: flex; gap: 5px; justify-content: center;">
                    <button class="btn-edit-payment btn-action-payment" data-id="${p.id}" data-amount="${p.payment_amount}" data-date="${dateStr}" data-method="${p.payment_method || 'Efectivo'}">✏️</button>
                    <button class="btn-delete-payment btn-action-payment" data-id="${p.id}" data-amount="${p.payment_amount}">🗑️</button>
                </div>
            </td>
        `;
        creditPaymentsBody.appendChild(row);
    });
}

creditPaymentsBody.addEventListener('click', async (e) => {
    const target = e.target;
    const paymentId = target.dataset.id;
    const amount = parseFloat(target.dataset.amount);

    // Editar Pago en Línea
    if (target.classList.contains('btn-edit-payment')) {
        const row = target.closest('tr');
        const cellDate = row.querySelector('.payment-date-cell');
        const cellAmount = row.querySelector('.payment-amount-cell');
        const cellMethod = row.querySelector('.payment-method-cell');
        const cellActions = target.parentElement;
        
        const currentDate = target.dataset.date;
        const currentMethod = target.dataset.method;
        
        // Convertir fecha actual (posiblemente dd-MM-yyyy) a YYYY-MM-DD para el input
        let inputDateVal = '';
        if (/^\d{2}-\d{2}-\d{4}$/.test(currentDate)) {
            const parts = currentDate.split('-');
            inputDateVal = `${parts[2]}-${parts[1]}-${parts[0]}`;
        } else if (currentDate) {
            const d = new Date(currentDate);
            if (!isNaN(d.getTime())) inputDateVal = d.toISOString().split('T')[0];
        }

        // Transformar a input
        cellDate.innerHTML = `<input type="date" class="input-edit-date" value="${inputDateVal}" style="width:100%">`;
        cellAmount.innerHTML = `<input type="number" class="input-edit-amount" value="${amount}" style="width:100%">`;
        cellMethod.innerHTML = `
            <select class="input-edit-method" style="width:100%">
                <option value="Efectivo" ${currentMethod === 'Efectivo' ? 'selected' : ''}>Efectivo</option>
                <option value="Transferencia" ${currentMethod === 'Transferencia' ? 'selected' : ''}>Transferencia</option>
            </select>
        `;
        
        // Mover botón guardar a la celda de acciones
        cellActions.innerHTML = `
            <button class="btn-save-payment btn-action-payment" data-id="${paymentId}" data-old="${amount}">💾</button>
            <button class="btn-delete-payment btn-action-payment" data-id="${paymentId}" data-amount="${amount}">🗑️</button>
        `;
    }

    // Guardar Edición Pago
    if (target.classList.contains('btn-save-payment')) {
        const row = target.closest('tr');
        const inputAmount = row.querySelector('.input-edit-amount');
        const inputDate = row.querySelector('.input-edit-date');
        const inputMethod = row.querySelector('.input-edit-method');
        
        const newAmount = parseFloat(inputAmount.value);
        const newDateInput = inputDate.value; // YYYY-MM-DD
        const newMethod = inputMethod.value;
        const oldAmount = parseFloat(target.dataset.old);

        if (isNaN(newAmount)) return alert('Monto inválido');

        // Calcular nuevo día de la semana
        const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const d = new Date(newDateInput);
        // Ajuste zona horaria simple para obtener día correcto
        d.setMinutes(d.getMinutes() + d.getTimezoneOffset());
        const newDayName = days[d.getDay()];

        // Convertir a formato dd-MM-yyyy para guardar
        let newDateText = newDateInput;
        const parts = newDateInput.split('-');
        if (parts.length === 3) {
            newDateText = `${parts[2]}-${parts[1]}-${parts[0]}`;
        }

        const updates = { 
            payment_amount: newAmount,
            payment_date: newDateText,
            payment_day: newDayName,
            payment_method: newMethod
        };

        const { data: { session } } = await sbClient.auth.getSession();
        const { error } = await sbClient.functions.invoke('update-payment', {
            body: { payment_id: paymentId, updates: updates, old_amount: oldAmount, debtor_number: currentCreditPaymentsNumber },
            headers: { Authorization: `Bearer ${session?.access_token}` }
        });
        
        if (error) return alert('Error al actualizar pago: ' + error.message);

        loadCreditPayments(currentCreditPaymentsNumber); // Recargar tabla
    }

    // Eliminar Pago
    if (target.classList.contains('btn-delete-payment')) {
        if (confirm('¿Eliminar este pago? El saldo del crédito aumentará.')) {
            // 1. Eliminar pago
            const { error } = await sbClient.from('payments').delete().eq('id', paymentId);
            
            if (error) return alert('Error al eliminar pago');

            // 2. Reversión de Saldo y Cuotas
            // Incrementar balance por el monto eliminado
            // Incrementar remainingPayments en 1
            
            // Leer datos actuales del deudor
            const { data: debtor } = await sbClient
                .from('debtors')
                .select('balance, remaining_payments')
                .eq('debtor_number', currentCreditPaymentsNumber)
                .single();

            if (debtor) {
                const newBalance = (parseFloat(debtor.balance) || 0) + amount;
                const newRemaining = (parseInt(debtor.remaining_payments) || 0) + 1;

                await sbClient.from('debtors').update({
                    balance: newBalance,
                    remaining_payments: newRemaining
                }).eq('debtor_number', currentCreditPaymentsNumber);
            }

            loadCreditPayments(currentCreditPaymentsNumber);
        }
    }
});

closeCreditPaymentsX?.addEventListener('click', () => {
    creditPaymentsModal.style.display = 'none';
});

// --- Función reutilizable para abrir detalles de cliente ---
async function openClientDetails(clientCedula) {
    currentViewingClientCedula = clientCedula;
    clientDetailsModal.style.display = 'block';
    
    document.getElementById('detail-client-name').innerText = 'Cargando...';
    const tbody = document.getElementById('client-credits-table-body');
    tbody.innerHTML = '<tr><td colspan="10">Cargando créditos...</td></tr>';

    const { data: clientData, error: clientError } = await sbClient
        .from('clients')
        .select('name, cedula, total_recaudo')
        .eq('cedula', clientCedula)
        .single();

    if (clientError) {
        tbody.innerHTML = `<tr><td colspan="10" style="color: red;">Error al cargar datos del cliente: ${clientError.message}</td></tr>`;
        return;
    }

    if (clientData) {
        document.getElementById('detail-client-name').innerText = clientData.name;
        
        const baseImportada = parseFloat(clientData.total_recaudo) || 0;
        const { data: payments } = await sbClient.from('payments').select('payment_amount').eq('cedula', clientData.cedula);
        const totalNativo = (payments || []).reduce((sum, p) => sum + (parseFloat(p.payment_amount) || 0), 0);
        document.getElementById('detail-total-collection').innerText = `$${(baseImportada + totalNativo).toLocaleString()}`;

        const { data: credits, error: creditsError } = await sbClient
            .from('debtors')
        .select('debtor_number, credit_type, valor_cuota, interests, sale_date, sale_value, balance, remaining_payments, payment_term, asesor_name')
            .eq('cedula', clientData.cedula)
            .order('sale_date', { ascending: true });

        if (creditsError) {
            tbody.innerHTML = `<tr><td colspan="10" style="color: red;">Error al cargar créditos: ${creditsError.message}</td></tr>`;
        } else if (!credits || credits.length === 0) {
            tbody.innerHTML = '<tr><td colspan="10">No hay créditos registrados para este cliente.</td></tr>';
        } else {
            tbody.innerHTML = '';
            credits.forEach(c => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td style="white-space: nowrap;">${c.credit_type || ''}</td>
                    <td style="white-space: nowrap;">$ ${(Number(c.valor_cuota) || 0).toLocaleString('es-CO')}</td>
                    <td style="white-space: nowrap;">$ ${(Number(c.interests) || 0).toLocaleString('es-CO')}</td>
                    <td style="white-space: nowrap;">${c.sale_date || ''}</td>
                    <td style="white-space: nowrap;">$ ${(Number(c.sale_value) || 0).toLocaleString('es-CO')}</td>
                    <td style="white-space: nowrap;">$ ${(Number(c.balance) || 0).toLocaleString('es-CO')}</td>
                    <td style="white-space: nowrap;">${c.remaining_payments || ''}</td>
                    <td style="white-space: nowrap;">${c.payment_term || ''}</td>
                    <td>${c.asesor_name || ''}</td>
                    <td style="white-space: nowrap;">
                        <div style="display: flex; gap: 5px; justify-content: center;">
                            <button class="btn-view-payments" data-debtor-number="${c.debtor_number}" title="Ver Pagos" style="width: 25px; height: 25px; padding: 0; display: flex; align-items: center; justify-content: center; font-size: 12px;">👁️</button>
                            <button class="btn-edit-credit-history" data-debtor-number="${c.debtor_number}" title="Editar Crédito" style="width: 25px; height: 25px; padding: 0; display: flex; align-items: center; justify-content: center; font-size: 12px;">✏️</button>
                            <button class="btn-delete-credit-history" data-debtor-number="${c.debtor_number}" title="Eliminar Crédito" style="width: 25px; height: 25px; padding: 0; display: flex; align-items: center; justify-content: center; font-size: 12px;">🗑️</button>
                        </div>
                    </td>
                `;
                tbody.appendChild(row);
            });
        }
    }
}