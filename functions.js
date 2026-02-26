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
// Referencias Informes P&G
const btnReportPg = document.getElementById('btn-report-pg');
const btnPgDaily = document.getElementById('btn-pg-daily');
const btnPgWeekly = document.getElementById('btn-pg-weekly');
const btnPgFilterDate = document.getElementById('btn-pg-filter-date');
const pgFilterDateText = document.getElementById('pg-filter-date-text');
const pgFilterDept = document.getElementById('pg-filter-dept');
const pgFilterMuni = document.getElementById('pg-filter-muni');
const pgFilterUser = document.getElementById('pg-filter-user');
const btnGeneratePg = document.getElementById('btn-generate-pg');
const btnDownloadPg = document.getElementById('btn-download-pg');
const pgTableBody = document.getElementById('pg-table-body');
const pgReportBox = document.getElementById('pg-report-box');
// Referencias Informes PB (Payment Behavior)
const btnReportPb = document.getElementById('btn-report-pb');
const pbReportBox = document.getElementById('pb-report-box');
const btnPbDaily = document.getElementById('btn-pb-daily');
const btnPbWeekly = document.getElementById('btn-pb-weekly');
const btnPbFilterDate = document.getElementById('btn-pb-filter-date');
const pbFilterDateText = document.getElementById('pb-filter-date-text');
const pbFilterDept = document.getElementById('pb-filter-dept');
const pbFilterMuni = document.getElementById('pb-filter-muni');
const pbFilterUser = document.getElementById('pb-filter-user');
const btnGeneratePb = document.getElementById('btn-generate-pb');
const btnDownloadPb = document.getElementById('btn-download-pb');
const pbTableBody = document.getElementById('pb-table-body');
// Referencias Informes CR (Credits Report)
const btnReportCr = document.getElementById('btn-report-cr');
const crReportBox = document.getElementById('cr-report-box');
const btnCrDaily = document.getElementById('btn-cr-daily');
const btnCrWeekly = document.getElementById('btn-cr-weekly');
const btnCrFilterDate = document.getElementById('btn-cr-filter-date');
const crFilterDateText = document.getElementById('cr-filter-date-text');
const crFilterDept = document.getElementById('cr-filter-dept');
const crFilterMuni = document.getElementById('cr-filter-muni');
const crFilterUser = document.getElementById('cr-filter-user');
const btnGenerateCr = document.getElementById('btn-generate-cr');
const btnDownloadCr = document.getElementById('btn-download-cr');
const crTableBody = document.getElementById('cr-table-body');
const crTotalDisplay = document.getElementById('cr-total-display');
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
const pmTotalRecaudoDisplay = document.getElementById('pm-total-recaudo-display');
// Referencias Informes EX (Expenses Report)
const btnReportEx = document.getElementById('btn-report-ex');
const exReportBox = document.getElementById('ex-report-box');
const btnExDaily = document.getElementById('btn-ex-daily');
const btnExWeekly = document.getElementById('btn-ex-weekly');
const btnExFilterDate = document.getElementById('btn-ex-filter-date');
const exFilterDateText = document.getElementById('ex-filter-date-text');
const exFilterUser = document.getElementById('ex-filter-user');
const btnGenerateEx = document.getElementById('btn-generate-ex');
const btnDownloadEx = document.getElementById('btn-download-ex');
const exTableBody = document.getElementById('ex-table-body');
// Referencias Informes GN (General Report)
const btnReportGn = document.getElementById('btn-report-gn');
const gnReportBox = document.getElementById('gn-report-box');
const btnGnDaily = document.getElementById('btn-gn-daily');
const btnGnWeekly = document.getElementById('btn-gn-weekly');
const btnGnFilterDate = document.getElementById('btn-gn-filter-date');
const gnFilterDateText = document.getElementById('gn-filter-date-text');
const gnFilterUser = document.getElementById('gn-filter-user');
const btnGenerateGn = document.getElementById('btn-generate-gn');
const btnDownloadGn = document.getElementById('btn-download-gn');
const gnTableBody = document.getElementById('gn-table-body');
// Referencias Modales GN
const editExpensesModal = document.getElementById('editExpensesModal');
const editExpGas = document.getElementById('edit-exp-gas');
const editExpLunch = document.getElementById('edit-exp-lunch');
const editExpOtherVal = document.getElementById('edit-exp-other-val');
const editExpOtherDesc = document.getElementById('edit-exp-other-desc');
const btnSaveExpChanges = document.getElementById('btn-save-exp-changes');
const reportCreditsDetailBody = document.getElementById('report-credits-detail-body');
const reportCreditsTotal = document.getElementById('report-credits-total');
const reportPaymentsDetailBody = document.getElementById('report-payments-detail-body');
const reportPaymentsTotal = document.getElementById('report-payments-total');
const reportPaymentsCash = document.getElementById('report-payments-cash');
const reportPaymentsTransfer = document.getElementById('report-payments-transfer');
const btnDownloadReportPaymentsDetails = document.getElementById('download-report-payments-details-btn');
const btnDownloadReportCreditsDetails = document.getElementById('download-report-credits-details-btn');
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
let currentClientEditId = null; // ID del cliente que se está editando
let currentViewingClientId = null; // ID del cliente cuyo detalle se está viendo
let currentQuotaClientData = null; // Datos del cliente para el proceso de cupo extra
let clientToDeleteData = null; // Datos del cliente a eliminar
let isMultiDeleteMode = false; // Modo eliminación múltiple
let allClientsData = []; // Almacenar clientes cargados para búsqueda
let allDebtorsData = []; // Almacenar todos los deudores para cálculo de estado rápido
let isRecoveryMode = false; // Bandera para saber si estamos en modo recuperación
let recoveryData = null; // Datos temporales para recuperación
// Variables globales para el reporte
let currentCreditEditId = null; // ID del crédito (debtor) que se está editando
let currentCreditPaymentsId = null; // ID del crédito cuyos pagos se están viendo
let currentDashboardCobrosData = [];
let currentDashboardCreditosData = [];
let currentPgReportData = []; // Datos para exportar P&G
let currentPgMode = null; // daily | weekly
let currentPbReportData = []; // Datos para exportar PB
let currentPbMode = null; // daily | weekly
let currentCrReportData = []; // Datos para exportar CR
let currentCrMode = null; // daily | weekly
let currentPmReportData = []; // Datos para exportar PM
let currentPmMode = null; // daily | weekly
let currentExReportData = []; // Datos para exportar EX
let currentExMode = null; // daily | weekly
let currentGnReportData = []; // Datos para exportar GN
let currentGnMode = null; // null | 'daily' | 'weekly'
let currentReportDateTarget = 'pg'; // 'pg' | 'pb' | 'cr' | 'pm' | 'ex' | 'gn'
let currentDownloadContext = null; // Contexto para descargas de detalles
let currentDownloadUser = null;
let currentDownloadDate = null;
let currentExpEditData = null; // Datos temporales para edición de gastos
let currentAlertsData = []; // Almacena alertas activas
let currentAlertActionId = null; // ID de la alerta a aprobar/rechazar
let currentReactivateClientId = null; // ID del cliente a reactivar
let currentCloseClientId = null; // ID del cliente a cerrar crédito
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
// Estado de fechas P&G
let pgDateState = {
    type: 'specific',
    start: null,
    end: null,
    label: ''
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
    const { data: { session } } = await sbClient.auth.getSession();
    if (session) {
        initializeSession(session.user.id);
    }
});

// Función de Inicio de Sesión
loginBtn.addEventListener('click', async () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    showLoading('solid');

    const { data, error } = await sbClient.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        let msg = 'Error: ' + error.message;
        // Detectar errores de base de datos (Triggers rotos)
        if (error.status === 500 || error.message.includes('Database error')) {
            msg += '. (Posible error interno en Triggers de Base de Datos. Revise la consola de Supabase).';
        }
        statusMessage.innerText = msg;
        hideLoading();
        console.error('Error de login:', error);
    } else {
        statusMessage.innerText = 'Verificando permisos...';
        // Llamar a la función de inicialización
        initializeSession(data.user.id, email, password);
    }
});

// Función para inicializar la sesión (usada en login y recarga)
async function initializeSession(userId, email = null, password = null) {
    // 1. Buscar el usuario en la tabla 'users' por su ID
    const { data: userData, error: userError } = await sbClient
        .from('users')
        .select('role, is_admin, name')
        .eq('id', userId)
        .single();

    if (userError) {
        if (statusMessage) statusMessage.innerText = 'Error al verificar permisos: ' + userError.message;
        await sbClient.auth.signOut(); // Cerrar sesión por seguridad
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
        if (clientDetailsModal.style.display === 'block' && currentViewingClientId) {
            openClientDetails(currentViewingClientId);
        }
        if (creditPaymentsModal.style.display === 'flex' && currentCreditPaymentsId) {
            loadCreditPayments(currentCreditPaymentsId);
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
    mainMenuContainer.style.display = 'none';
    loginContainer.style.display = 'none';

    // Mostrar barra lateral
    sidebarContainer.style.display = 'flex';

    // Ocultar todos los espacios de trabajo primero
    [dashboardContainer, clientsContainer, municipalitiesContainer, dashboardControlContainer, reportsContainer, adminReportsContainer].forEach(el => {
        el.style.display = 'none';
        el.classList.add('workspace-with-sidebar'); // Agregar margen izquierdo
    });

    // Mostrar el contenedor deseado
    containerToShow.style.display = 'block';
    setTimeout(hideLoading, 500); // Pequeño delay para transición suave
}

// Función auxiliar para volver al menú principal (cerrar barra lateral)
function closeWorkspace() {
    sidebarContainer.style.display = 'none';
    [dashboardContainer, clientsContainer, municipalitiesContainer, dashboardControlContainer, reportsContainer, adminReportsContainer].forEach(el => {
        el.style.display = 'none';
        el.classList.remove('workspace-with-sidebar');
    });
    mainMenuContainer.style.display = 'block';
}

// Listeners del Menú Principal (Actualizados)
btnUsersMgmt.addEventListener('click', () => {
    setActiveSidebar(sbBtnUsers);
    openWorkspace(dashboardContainer);
    loadUsersTable(); // Cargar datos al entrar
});

btnClientsMgmt.addEventListener('click', () => {
    setActiveSidebar(sbBtnClients);
    openWorkspace(clientsContainer);
    // No recargar si ya hay datos, para persistencia
    if (allClientsData.length === 0) {
        loadClientsTable();
    } else {
        // Si ya hay datos, mantener la vista actual (no limpiar)
    }
});

btnMunicipalitiesMgmt.addEventListener('click', () => {
    setActiveSidebar(sbBtnMunis);
    openWorkspace(municipalitiesContainer);
    populateDeptSelects(); // Asegurar carga de departamentos
});

btnDashboardControl.addEventListener('click', () => {
    setActiveSidebar(sbBtnDashboard);
    openWorkspace(dashboardControlContainer);
});

btnReportsSection.addEventListener('click', () => {
    setActiveSidebar(sbBtnReports);
    openWorkspace(reportsContainer);
});

btnInversionesMenu.addEventListener('click', () => {
    handleLinkNavigation('INVERSIONES M&R');
});

btnDatabaseMenu.addEventListener('click', () => {
    handleLinkNavigation('Base de datos');
});

btnAdminReportsMenu.addEventListener('click', () => {
    setActiveSidebar(sbBtnAdminReports);
    openReportsWorkspace();
});

// Listeners de la Barra Lateral
function setActiveSidebar(btn) {
    document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');
}

if(sbBtnUsers) sbBtnUsers.addEventListener('click', () => { setActiveSidebar(sbBtnUsers); openWorkspace(dashboardContainer); if(usersTableBody.children.length === 0) loadUsersTable(); });
if(sbBtnClients) sbBtnClients.addEventListener('click', () => { 
    setActiveSidebar(sbBtnClients); 
    openWorkspace(clientsContainer); 
    // Persistencia: Solo cargar si está vacío
    if (allClientsData.length === 0) {
        loadClientsTable();
    }
});
if(sbBtnMunis) sbBtnMunis.addEventListener('click', () => { setActiveSidebar(sbBtnMunis); openWorkspace(municipalitiesContainer); populateDeptSelects(); });
if(sbBtnDashboard) sbBtnDashboard.addEventListener('click', () => { 
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
if(sbBtnReports) sbBtnReports.addEventListener('click', () => { setActiveSidebar(sbBtnReports); openWorkspace(reportsContainer); hideAllReportBoxes(); });
if(sbBtnImport) sbBtnImport.addEventListener('click', () => { /* No active state */ importExcelInput.click(); });
if(sbBtnExport) sbBtnExport.addEventListener('click', () => { /* No active state */ btnOpenExportModal.click(); });
if(sbBtnInversiones) sbBtnInversiones.addEventListener('click', () => { handleLinkNavigation('INVERSIONES M&R'); });
if(sbBtnDatabase) sbBtnDatabase.addEventListener('click', () => { handleLinkNavigation('Base de datos'); });
if(sbBtnAdminReports) sbBtnAdminReports.addEventListener('click', () => { setActiveSidebar(sbBtnAdminReports); openReportsWorkspace(); });
if(sbBtnRefresh) sbBtnRefresh.addEventListener('click', async () => {
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
    if (reportsContainer.style.display === 'block') {
        if (pgReportBox.style.display === 'block') await generatePgReport();
        if (pbReportBox.style.display === 'block') await generatePaymentBehaviorReport();
        if (crReportBox.style.display === 'block') await generateCreditsReport();
        if (pmReportBox.style.display === 'block') await generatePmReport();
        if (exReportBox.style.display === 'block') await generateExReport();
        if (gnReportBox.style.display === 'block') await generateGnReport();
    }
    if (adminReportsContainer.style.display === 'block' && currentUserIsDeveloper) await loadDevReportsTable();
    hideLoading();
});
if(sbBtnLogout) sbBtnLogout.addEventListener('click', async () => {
    await sbClient.auth.signOut();
    location.reload();
});

logoutBtn.addEventListener('click', async () => {
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

    // Notificación Masiva si hay alertas pendientes (represt === false)
    const pendingAlerts = currentAlertsData.filter(a => a.represt === false);
    if (pendingAlerts.length > 0) {
        alertReprestNotificationModal.style.display = 'block';
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
    currentAlertsData.forEach(a => alertsMap.set(a.cedula, a));

    // Mapa de Alertas Segundo Pago
    const secondPaymentMap = new Map();
    currentSecondPaymentAlerts.forEach(a => secondPaymentMap.set(a.cedula, a));

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
            statusHtml = `<div class="status-capsule status-alert" data-id="${alertInfo.id}">Intento de pago represte</div>`;
        } 
        // 1.1 Prioridad Alta: Alerta Segundo Pago
        else if (secondPaymentInfo) {
            statusHtml = `<div class="status-capsule status-second-payment" data-id="${secondPaymentInfo.id}" style="background-color: orange; cursor: pointer;">Intento de segundo pago</div>`;
        }
        // 2. Prioridad Alta: Crédito Cerrado
        else if (client.closed === true) {
            statusHtml = `<div class="status-capsule status-closed" data-id="${client.id}">Crédito cerrado</div>`;
        }
        // 3. Estado Normal: Rojo (Deuda) / Verde (Libre)
        else if (hasActiveCredit) {
            if (openCreditsCount >= 2) {
                statusHtml = `<div class="status-capsule status-open">${openCreditsCount} Créditos Abiertos</div>`;
            } else {
                statusHtml = '<div class="status-capsule status-open">Crédito Abierto</div>';
            }
        } else {
            statusHtml = `<div class="status-capsule status-free" data-id="${client.id}" style="cursor: pointer;" title="Click para cerrar crédito">Sin Crédito</div>`;
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
            <td class="multi-delete-col" style="display: ${multiDeleteDisplay}; text-align: center;"><input type="checkbox" class="client-select-cb" value="${client.id}" data-cedula="${client.cedula}" data-name="${client.name}"></td>
            <td>${client.name || ''}</td>
            <td>${client.cedula || ''}</td>
            <td>${client.phone || ''}</td>
            <td>${client.municipality || ''}</td>
            <td>${statusHtml}</td>
            <td>
                <button class="btn-ver-cliente" data-id="${client.id}" title="Ver">👁️</button>
                <button class="btn-editar-cliente" data-id="${client.id}" title="Editar">✏️</button>
                <button class="btn-cupo-extra" data-id="${client.id}" ${cupoExtraDisabled} style="${cupoExtraStyle}" title="Cupo extra">➕</button>
                <button class="btn-eliminar-cliente" data-id="${client.id}" title="Eliminar">🗑️</button>
            </td>
        `;
        clientsTableBody.appendChild(row);
    });

    // Actualizar eventos de checkboxes
    document.querySelectorAll('.client-select-cb').forEach(cb => {
        cb.addEventListener('change', updateSelectedCount);
    });
}

// Manejo de eventos en la tabla (Delegación de eventos)
clientsTableBody.addEventListener('click', async (e) => {
    const target = e.target;
    const clientId = target.dataset.id;

    // --- Lógica Botones de Estado ---
    
    // Botón Azul: Alerta Represte
    if (target.classList.contains('status-alert')) {
        currentAlertActionId = target.dataset.id;
        approveReprestModal.style.display = 'block';
        return;
    }

    // Botón Naranja: Alerta Segundo Pago
    if (target.classList.contains('status-second-payment')) {
        currentSecondPaymentActionId = target.dataset.id;
        approveSecondPaymentModal.style.display = 'block';
        return;
    }

    // Botón Gris: Crédito Cerrado
    if (target.classList.contains('status-closed')) {
        currentReactivateClientId = target.dataset.id;
        reactivateCreditModal.style.display = 'block';
        return;
    }

    // Botón Verde: Sin Crédito (Cerrar Crédito)
    if (target.classList.contains('status-free')) {
        currentCloseClientId = target.dataset.id;
        closeCreditModal.style.display = 'block';
        return;
    }

    if (target.classList.contains('btn-ver-cliente')) {
        openClientDetails(clientId);
    }
    if (target.classList.contains('btn-editar-cliente')) {
        // 1. Obtener datos del cliente
        const { data: client, error } = await sbClient
            .from('clients')
            .select('*') // Seleccionamos todo para obtener dirección, asesor, etc.
            .eq('id', clientId)
            .single();

        // 2. Obtener departamentos
        const { data: deptsData } = await sbClient.from('municipalities').select('id, municipalities');

        if (client && !error && deptsData) {
            currentClientEditId = clientId;
            
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
        const { data: client, error } = await sbClient.from('clients').select('id, name, cedula').eq('id', clientId).single();
        
        if (error || !client) return alert('Error al cargar datos del cliente');
        
        currentQuotaClientData = client;

        // 2. Verificar si tiene créditos activos en 'debtors'
        const { data: debts } = await sbClient
            .from('debtors')
            .select('balance, remaining_payments')
            .eq('cedula', client.cedula);

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
        const { data: client } = await sbClient.from('clients').select('id, name, cedula').eq('id', clientId).single();
        if (client) {
            clientToDeleteData = client;
            deleteClientNameDisplay.innerText = client.name;
            deleteClientOptionsModal.style.display = 'block';
        }
    }
});

// --- Lógica Modal Aprobar Represte ---
btnConfirmReprest.addEventListener('click', async () => {
    if (!currentAlertActionId) return;
    
    // Actualizar estado del cliente a abierto (closed = false)
    const alertObj = currentAlertsData.find(a => a.id == currentAlertActionId);
    if (alertObj && alertObj.cedula) {
        await sbClient.from('clients').update({ closed: false }).eq('cedula', alertObj.cedula);
    }

    // Actualizar alerta a TRUE (Autorizado)
    const { error } = await sbClient.from('alerts_represt').update({ represt: true }).eq('id', currentAlertActionId);
    
    if (error) alert('Error al autorizar: ' + error.message);
    else {
        alert('Pago represte autorizado.');
        approveReprestModal.style.display = 'none';
        // Actualizar estado visual sin recargar todo si es posible, o recargar silenciosamente
        const btn = document.querySelector(`.status-alert[data-id="${currentAlertActionId}"]`);
        if(btn) btn.parentElement.innerHTML = '<div class="status-capsule status-open">Crédito Abierto</div>';
        loadClientsTable(true); // Recargar para sincronizar estado
    }
});

btnRejectReprest.addEventListener('click', async () => {
    if (!currentAlertActionId) return;
    
    // Eliminar alerta (Rechazado)
    const { error } = await sbClient.from('alerts_represt').delete().eq('id', currentAlertActionId);
    
    if (error) alert('Error al rechazar: ' + error.message);
    else {
        alert('Solicitud rechazada y eliminada.');
        approveReprestModal.style.display = 'none';
        const btn = document.querySelector(`.status-alert[data-id="${currentAlertActionId}"]`);
        if(btn) btn.remove();
    }
});

// --- Lógica Modal Aprobar Segundo Pago ---
btnConfirmSecondPayment.addEventListener('click', async () => {
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

btnRejectSecondPayment.addEventListener('click', async () => {
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
btnConfirmReactivate.addEventListener('click', async () => {
    if (!currentReactivateClientId) return;

    const { error } = await sbClient.from('clients').update({ closed: false }).eq('id', currentReactivateClientId);
    
    if (error) alert('Error al reactivar: ' + error.message);
    else {
        alert('Crédito reactivado exitosamente.');
        reactivateCreditModal.style.display = 'none';
        const btn = document.querySelector(`.status-closed[data-id="${currentReactivateClientId}"]`);
        if(btn) btn.parentElement.innerHTML = '<div class="status-capsule status-open">Crédito Abierto</div>';
    }
});

// --- Lógica Modal Cerrar Crédito ---
btnConfirmCloseCredit.addEventListener('click', async () => {
    if (!currentCloseClientId) return;

    const { error } = await sbClient.from('clients').update({ closed: true }).eq('id', currentCloseClientId);
    
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

btnCloseAssignedMunis.addEventListener('click', () => {
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

createRole.addEventListener('change', (e) => {
    toggleLocationFields(e.target.value, 'create-location-container');
});

// Abrir modal de municipios desde Creación
createMuniCount.addEventListener('click', () => {
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
editMuniCount.addEventListener('click', () => {
    muniSelectionMode = 'edit';
    openMuniModal();
});

// Botón "Listo" en el modal de municipios
confirmMuniBtn.addEventListener('click', () => {
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
document.getElementById('saveEditBtn').addEventListener('click', async () => {
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
document.getElementById('cancelEditBtn').addEventListener('click', () => {
    editModal.style.display = 'none';
    currentEditId = null;
});

// Botón Guardar NUEVO Usuario
document.getElementById('saveCreateBtn').addEventListener('click', async () => {
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

document.getElementById('cancelCreateBtn').addEventListener('click', () => {
    createModal.style.display = 'none';
});

editRole.addEventListener('change', (e) => {
    toggleLocationFields(e.target.value, 'edit-location-container');
});

// --- Lógica Modal Contraseña ---

savePassBtn.addEventListener('click', async () => {
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

cancelPassBtn.addEventListener('click', () => {
    passwordModal.style.display = 'none';
    currentPassId = null;
});

// --- Lógica Botón Desarrollador (Cambiar mi contraseña) ---
devChangePassBtn.addEventListener('click', () => {
    // Reutilizamos el modal de contraseña pero configurado para sí mismo
    currentPassId = currentUserId;
    isRecoveryMode = false;
    passUserName.innerText = 'Mí mismo (Desarrollador)';
    newPasswordInput.value = '';
    passwordModal.style.display = 'block';
});

// --- Lógica Olvidé mi Contraseña ---
forgotPassBtn.addEventListener('click', () => {
    forgotName.value = '';
    forgotEmail.value = '';
    forgotPassModal.style.display = 'block';
});

confirmForgotBtn.addEventListener('click', async () => {
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

cancelForgotBtn.addEventListener('click', () => {
    forgotPassModal.style.display = 'none';
});

// --- Lógica Botón Desarrollador (Actualizar mis datos) ---
devUpdateDataBtn.addEventListener('click', async () => {
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

saveDevUpdateBtn.addEventListener('click', async () => {
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

cancelDevUpdateBtn.addEventListener('click', () => {
    devUpdateModal.style.display = 'none';
});

closeClientDetailsX.addEventListener('click', () => {
    clientDetailsModal.style.display = 'none';
});

// --- Lógica Guardar Edición Cliente (Cascada) ---
saveEditClientBtn.addEventListener('click', async () => {
    if (!currentClientEditId) return;

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
        body: { client_id: currentClientEditId, updates: clientUpdates },
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

cancelEditClientBtn.addEventListener('click', () => {
    editClientModal.style.display = 'none';
});

// --- Lógica Cupo Extra ---

// Validar input de autorización
moraAuthInput.addEventListener('input', () => {
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

btnMoraAccept.addEventListener('click', () => {
    warningMoraModal.style.display = 'none';
    openEnableQuotaModal();
});

btnMoraCancel.addEventListener('click', () => {
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

btnQuotaConfirm.addEventListener('click', async () => {
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

document.getElementById('btn-quota-cancel').addEventListener('click', () => {
    enableQuotaModal.style.display = 'none';
    currentQuotaClientData = null;
});

// --- Lógica Nuevo Cliente ---
btnNewClient.addEventListener('click', async () => {
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

saveCreateClientBtn.addEventListener('click', async () => {
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

cancelCreateClientBtn.addEventListener('click', () => {
    createClientModal.style.display = 'none';
});

// --- Botón Exportar (Menú Principal) ---
btnExportMenu.addEventListener('click', () => {
    // Reutilizar la lógica de apertura del modal de exportación
    btnOpenExportModal.click();
});

// --- Lógica de Importación Masiva (ETL) ---

btnImportExcel.addEventListener('click', () => {
    importExcelInput.click();
});

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
btnCancelDeleteOptions.addEventListener('click', () => {
    deleteClientOptionsModal.style.display = 'none';
    clientToDeleteData = null;
});

btnDeleteExtraOnly.addEventListener('click', async () => {
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

btnDeleteFullHistory.addEventListener('click', async () => {
    if (!clientToDeleteData) return;
    if (!confirm('ESTA ACCIÓN ES IRREVERSIBLE. ¿Seguro que desea borrar TODO el historial de ' + clientToDeleteData.name + '?')) return;

    // Borrar de extras
    await sbClient.from('extras').delete().eq('cedula', clientToDeleteData.cedula);
    // Borrar de debtors
    await sbClient.from('debtors').delete().eq('cedula', clientToDeleteData.cedula);
    // Borrar de payments (por nombre de deudor)
    await sbClient.from('payments').delete().eq('debtor_name', clientToDeleteData.name);
    // Borrar de clients
    const { error } = await sbClient.from('clients').delete().eq('id', clientToDeleteData.id);

    if (error) alert('Error al eliminar cliente: ' + error.message);
    else {
        alert('Cliente y todo su historial eliminados.');
        deleteClientOptionsModal.style.display = 'none';
        loadClientsTable(true);
        clientsTableBody.innerHTML = '<tr><td colspan="7" style="text-align: center;">Cliente eliminado. Realice una búsqueda para ver los cambios.</td></tr>';
    }
});

// --- Lógica Eliminación Múltiple ---
btnMultiDeleteMode.addEventListener('click', () => {
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

btnDeleteSelected.addEventListener('click', async () => {
    const selected = Array.from(document.querySelectorAll('.client-select-cb:checked'));
    if (selected.length === 0) return alert('Seleccione al menos un cliente.');
    
    if (!confirm(`¿Está seguro de eliminar ${selected.length} clientes y TODO su historial?`)) return;

    btnDeleteSelected.disabled = true;
    btnDeleteSelected.innerText = 'Borrando...';

    // Optimización: Borrado por lotes (Batch Delete)
    const allCedulas = selected.map(cb => cb.dataset.cedula).filter(c => c);
    const allIds = selected.map(cb => cb.value);
    // Para pagos, intentamos borrar por cédula si existe, o por nombre como fallback
    const allNames = selected.map(cb => cb.dataset.name).filter(n => n);

    try {
        const promises = [];
        if (allCedulas.length > 0) {
            promises.push(sbClient.from('extras').delete().in('cedula', allCedulas));
            promises.push(sbClient.from('debtors').delete().in('cedula', allCedulas));
            // Borrar pagos por cédula es más seguro
            promises.push(sbClient.from('payments').delete().in('cedula', allCedulas));
        }
        if (allIds.length > 0) {
            promises.push(sbClient.from('clients').delete().in('id', allIds));
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
btnSearchClient.addEventListener('click', () => {
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
            .select('id, name, cedula, phone, municipality, asesor_name, closed')
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
        if (pgFilterUser.value) debtorsQuery = debtorsQuery.eq('asesor_name', pgFilterUser.value);
        if (pgFilterMuni.value) debtorsQuery = debtorsQuery.eq('municipality', pgFilterMuni.value);

        const { data: debtors, error: debtError } = await debtorsQuery;
        if (debtError) throw debtError;

        // 2. Pagos (Payments)
        let paymentsQuery = sbClient.from('payments').select('*');
        if (pgFilterUser.value) paymentsQuery = paymentsQuery.eq('user_name', pgFilterUser.value);
        if (pgFilterMuni.value) paymentsQuery = paymentsQuery.eq('municipality', pgFilterMuni.value);

        const { data: payments, error: payError } = await paymentsQuery;
        if (payError) throw payError;

        // 2. Análisis Tabla de Créditos (Izquierda)
        // Consulta Principal: Debtors creados en el rango
        const newCredits = debtors.filter(d => {
            // Filtro de fecha para los CREDITOS
            const debtCreatedAt = new Date(d.created_at);
            return debtCreatedAt >= start && debtCreatedAt <= end;
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
        const paymentsInRange = payments.filter(p => {
            // Filtro de fecha para los PAGOS
            const paymentCreatedAt = new Date(p.created_at);
            return paymentCreatedAt >= start && paymentCreatedAt <= end;
        });


        // Filtrar pagos importados si aplica (según prompt)
        const validPayments = paymentsInRange.filter(p => p.imported !== true);

        // B. Obtener Deudores Relevantes (Activos + Los que pagaron hoy aunque saldo sea 0)
        //INNER JOIN


        // B1. Deudores con saldo > 0
        const activeDebtors = debtors.filter(d => d.balance > 0);

        // B2. Deudores que pagaron en el rango (para recuperar "Deudores Faltantes" que quedaron en 0)
        const paidCedulas = [...new Set(validPayments.map(p => p.cedula))]; // Asumiendo que payments tiene cedula o debtor_id
        let paidDebtors = [];
        if (paidCedulas.length > 0) {
            const pd = debtors.filter(d => paidCedulas.includes(d.cedula))

                .in('cedula', paidCedulas); // Usamos cedula como link
            paidDebtors = pd || [];
        }

        // Unir listas de deudores (Activos + Pagaron) eliminando duplicados por ID
        const allRelevantDebtorsMap = new Map();
        (activeDebtors || []).forEach(d => allRelevantDebtorsMap.set(d.id, d));
        paidDebtors.forEach(d => allRelevantDebtorsMap.set(d.id, d));
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
            // Necesitamos saber el asesor y municipio del deudor asociado al pago
            // Buscamos el deudor en nuestra lista cargada
            // Nota: En payments deberíamos tener debtor_name o cedula. Usamos cedula para linkear.
            // Si payments no tiene cedula, usamos debtor_name, pero es menos preciso.
            // Asumiremos que payments tiene 'cedula' o cruzamos por 'debtor_name' con la lista allRelevantDebtors.
            
            // Intentar encontrar el deudor en memoria
            const debtor = allRelevantDebtors.find(d => d.cedula === p.cedula || d.name === p.debtor_name);

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
    const debtorId = target.dataset.id;

    // 1. Botón Ver Pagos (Ojo)
    if (target.classList.contains('btn-view-payments')) {
        currentCreditPaymentsId = debtorId;
        loadCreditPayments(debtorId);
        creditPaymentsModal.style.display = 'flex';
    }

    // 2. Botón Editar Crédito (Lápiz)
    if (target.classList.contains('btn-edit-credit-history')) {
        currentCreditEditId = debtorId;
        // Cargar datos del crédito
        const { data: credit } = await sbClient.from('debtors').select('*').eq('id', debtorId).single();
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
            // 1. Eliminar pagos asociados (debtor_id)
            await sbClient.from('payments').delete().eq('debtor_id', debtorId);
            
            // 2. Eliminar el crédito (debtors)
            const { error } = await sbClient.from('debtors').delete().eq('id', debtorId);

            if (error) {
                alert('Error al eliminar crédito: ' + error.message);
            } else {
                alert('Crédito eliminado correctamente.');
                // Recargar el modal de detalles del cliente para ver el cambio.
                if (currentViewingClientId) openClientDetails(currentViewingClientId);
            }
        }
    }
});

// --- Lógica Modal Editar Crédito ---
btnSaveEditCredit.addEventListener('click', async () => {
    if (!currentCreditEditId) return;

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
        body: { credit_id: currentCreditEditId, updates: updates },
        headers: { Authorization: `Bearer ${session?.access_token}` }
    });

    if (error) {
        alert('Error al actualizar crédito: ' + error.message);
    } else {
        alert('Crédito actualizado.');
        editCreditModal.style.display = 'none';
        // Recargar el modal de detalles del cliente para ver el cambio.
        if (currentViewingClientId) openClientDetails(currentViewingClientId);
    }
});

btnCancelEditCredit.addEventListener('click', () => {
    editCreditModal.style.display = 'none';
});

// --- Lógica Modal Pagos del Crédito ---
async function loadCreditPayments(debtorId, isBackground = false) {
    if (!isBackground) creditPaymentsBody.innerHTML = '<tr><td colspan="5">Cargando...</td></tr>';
    
    const { data: payments, error } = await sbClient
        .from('payments')
        .select('*')
        .eq('debtor_id', debtorId)
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
            body: { payment_id: paymentId, updates: updates, old_amount: oldAmount, debtor_id: currentCreditPaymentsId },
            headers: { Authorization: `Bearer ${session?.access_token}` }
        });
        
        if (error) return alert('Error al actualizar pago: ' + error.message);

        loadCreditPayments(currentCreditPaymentsId); // Recargar tabla
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
                .eq('id', currentCreditPaymentsId)
                .single();

            if (debtor) {
                const newBalance = (parseFloat(debtor.balance) || 0) + amount;
                const newRemaining = (parseInt(debtor.remaining_payments) || 0) + 1;

                await sbClient.from('debtors').update({
                    balance: newBalance,
                    remaining_payments: newRemaining
                }).eq('id', currentCreditPaymentsId);
            }

            loadCreditPayments(currentCreditPaymentsId);
        }
    }
});

closeCreditPaymentsX.addEventListener('click', () => {
    creditPaymentsModal.style.display = 'none';
});

// --- Función reutilizable para abrir detalles de cliente ---
async function openClientDetails(clientId) {
    currentViewingClientId = clientId;
    clientDetailsModal.style.display = 'block';
    
    document.getElementById('detail-client-name').innerText = 'Cargando...';
    const tbody = document.getElementById('client-credits-table-body');
    tbody.innerHTML = '<tr><td colspan="10">Cargando créditos...</td></tr>';

    const { data: clientData, error: clientError } = await sbClient
        .from('clients')
        .select('name, cedula, total_recaudo')
        .eq('id', clientId)
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
            .select('id, credit_type, valor_cuota, interests, sale_date, sale_value, balance, remaining_payments, payment_term, asesor_name')
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
                            <button class="btn-view-payments" data-id="${c.id}" title="Ver Pagos" style="width: 25px; height: 25px; padding: 0; display: flex; align-items: center; justify-content: center; font-size: 12px;">👁️</button>
                            <button class="btn-edit-credit-history" data-id="${c.id}" title="Editar Crédito" style="width: 25px; height: 25px; padding: 0; display: flex; align-items: center; justify-content: center; font-size: 12px;">✏️</button>
                            <button class="btn-delete-credit-history" data-id="${c.id}" title="Eliminar Crédito" style="width: 25px; height: 25px; padding: 0; display: flex; align-items: center; justify-content: center; font-size: 12px;">🗑️</button>
                        </div>
                    </td>
                `;
                tbody.appendChild(row);
            });
        }
    }
}

// ==========================================
// LÓGICA INFORMES P&G (PROFIT & LOSS)
// ==========================================

// 1. Lógica de Filtrado y Control de Tiempo

btnPgDaily.addEventListener('click', () => {
    currentPgMode = 'daily';
    btnPgDaily.className = 'btn-primary';
    btnPgWeekly.className = 'btn-secondary';
    pgFilterDateText.innerText = 'Seleccionar Fecha'; // Limpiar fecha al cambiar modo
});

btnPgWeekly.addEventListener('click', () => {
    currentPgMode = 'weekly';
    btnPgWeekly.className = 'btn-primary';
    btnPgDaily.className = 'btn-secondary';
    pgFilterDateText.innerText = 'Seleccionar Fecha'; // Limpiar fecha al cambiar modo
});

// Función auxiliar para ocultar todos los reportes y resetear botones
function hideAllReportBoxes() {
    pgReportBox.style.display = 'none';
    pbReportBox.style.display = 'none';
    crReportBox.style.display = 'none';
    pmReportBox.style.display = 'none';
    exReportBox.style.display = 'none';
    gnReportBox.style.display = 'none';
    
    [btnReportPg, btnReportPb, btnReportCr, btnReportPm, btnReportEx, btnReportGn].forEach(btn => {
        btn.className = 'btn-secondary';
    });

    // Limpiar textos de fecha en todos los reportes
    pgFilterDateText.innerText = '';
    pbFilterDateText.innerText = '';
    crFilterDateText.innerText = '';
    pmFilterDateText.innerText = '';
    exFilterDateText.innerText = '';
    gnFilterDateText.innerText = '';
}

// Navegación interna de reportes
btnReportPg.addEventListener('click', () => {
    hideAllReportBoxes();
    pgReportBox.style.display = 'block';
    btnReportPg.className = 'btn-primary';
    loadPgFilters();
});

btnReportPb.addEventListener('click', () => {
    hideAllReportBoxes();
    pbReportBox.style.display = 'block';
    btnReportPb.className = 'btn-primary';
    loadPbFilters();
});

btnReportCr.addEventListener('click', () => {
    hideAllReportBoxes();
    crReportBox.style.display = 'block';
    btnReportCr.className = 'btn-primary';
    loadCrFilters();
});

btnReportPm.addEventListener('click', () => {
    hideAllReportBoxes();
    pmReportBox.style.display = 'block';
    btnReportPm.className = 'btn-primary';
    loadPmFilters();
});

btnReportEx.addEventListener('click', () => {
    hideAllReportBoxes();
    exReportBox.style.display = 'block';
    btnReportEx.className = 'btn-primary';
    loadExFilters();
});

btnReportGn.addEventListener('click', () => {
    hideAllReportBoxes();
    gnReportBox.style.display = 'block';
    btnReportGn.className = 'btn-primary';
    loadGnFilters();
});

btnReportsSection.addEventListener('click', async () => {
    // Ningún reporte seleccionado por defecto
    hideAllReportBoxes();
});

async function loadPgFilters() {
    // 1. Cargar Asesores
    // Cargar asesores
    const { data: users } = await sbClient.from('users').select('name')
        .neq('role', 'Administrador')
        .neq('role', 'Administrador maestro')
        .neq('role', 'Desarrollador');
    pgFilterUser.innerHTML = '<option value="">Todos los Asesores</option>';
    if (users) {
        users.forEach(u => pgFilterUser.innerHTML += `<option value="${u.name}">${u.name}</option>`);
    }

    // 2. Cargar Departamentos (Selector Inteligente)
    const { data: deptsData, error } = await sbClient.from('municipalities').select('id, municipalities');
    
    if (error) {
        console.error('Error cargando departamentos:', error);
        return;
    }

    pgFilterDept.innerHTML = '<option value="">Todos los Departamentos</option>';
    deptsData.forEach(dept => {
        const option = document.createElement('option');
        option.value = dept.id;
        option.textContent = dept.id;
        pgFilterDept.appendChild(option);
    });

    // Lógica Condicional de UI (Caso Único vs Múltiple)
    if (deptsData.length === 1) {
        // Caso Único: Asignar valor y deshabilitar
        pgFilterDept.value = deptsData[0].id;
        pgFilterDept.disabled = true;
        // Disparar evento de cambio manualmente para cargar municipios
        pgFilterDept.dispatchEvent(new Event('change'));
    } else {
        // Caso Múltiple: Habilitar y permitir elección
        pgFilterDept.disabled = false;
    }
}

// --- Lógica de Filtrado Dinámico de Municipios por Usuario ---

pgFilterUser.addEventListener('change', () => {
    updateUserMunicipalities(pgFilterUser.value, 'pg-filter-muni');
});

async function updateUserMunicipalities(userName, targetSelectId) {
    const select = document.getElementById(targetSelectId);
    if (!select) return;

    // Estado de carga
    select.innerHTML = '<option value="">Cargando...</option>';
    select.disabled = true;

    if (!userName) {
        // Si se selecciona "Todos los Asesores", restaurar comportamiento por defecto
        // (Disparar cambio en Dept para recargar según departamento o limpiar)
        select.innerHTML = '<option value="">Todos los Municipios</option>';
        select.disabled = false;
        
        // Si hay un departamento seleccionado, recargar sus municipios
        if (pgFilterDept.value) {
            pgFilterDept.dispatchEvent(new Event('change'));
        }
        return;
    }

    // Consultar municipios asignados al usuario
    const { data: user, error } = await sbClient
        .from('users')
        .select('assigned_municipality')
        .eq('name', userName)
        .single();

    if (error || !user) {
        select.innerHTML = '<option value="">Error al cargar</option>';
        select.disabled = false;
        return;
    }

    // Procesar array o string
    const assigned = user.assigned_municipality || [];
    let list = [];
    if (Array.isArray(assigned)) list = assigned;
    else if (typeof assigned === 'string') list = assigned.split(',').map(s => s.trim());

    // Actualizar DOM
    select.innerHTML = '<option value="">Todos los Municipios</option>';
    list.forEach(m => {
        const opt = document.createElement('option');
        opt.value = m;
        opt.textContent = m;
        select.appendChild(opt);
    });
    select.disabled = false;
}

// Lógica de Municipios dependiente de Dept
pgFilterDept.addEventListener('change', async () => {
    pgFilterMuni.innerHTML = '<option value="">Todos los Municipios</option>';
    if (!pgFilterDept.value) return;
    
    const { data } = await sbClient.from('municipalities').select('municipalities').eq('id', pgFilterDept.value).single();
    if (data) {
        data.municipalities.forEach(m => pgFilterMuni.innerHTML += `<option value="${m}">${m}</option>`);
    }
});

// --- Lógica Modal de Fechas ---

btnPgFilterDate.addEventListener('click', () => {
    currentReportDateTarget = 'pg'; // Contexto P&G
    const mode = currentPgMode || 'daily';
    // 1. Configurar opciones según el modo
    pgModalDateType.innerHTML = '';
    
    if (mode === 'daily') {
        pgModalDateType.innerHTML += '<option value="specific">Día Específico</option>';
        pgModalDateType.innerHTML += '<option value="range">Rango de Fechas</option>';
        pgModalDateType.innerHTML += '<option value="all">Mostrar Todo</option>';
    } else {
        // Modo Semanal
        pgModalDateType.innerHTML += '<option value="month">Mes Completo</option>';
        pgModalDateType.innerHTML += '<option value="range">Rango Personalizado</option>';
        pgModalDateType.innerHTML += '<option value="all">Mostrar Todo</option>';
    }

    // Seleccionar el tipo actual si es compatible, sino el primero
    pgModalDateType.value = pgDateState.type;
    if (!pgModalDateType.value) pgModalDateType.selectedIndex = 0;

    updatePgModalView();
    pgDateSelectionModal.style.display = 'block';
});

btnPbFilterDate.addEventListener('click', () => {
    currentReportDateTarget = 'pb'; // Contexto PB
    const mode = currentPbMode || 'daily';
    // 1. Configurar opciones según el modo
    pgModalDateType.innerHTML = '';
    
    if (mode === 'daily') {
        pgModalDateType.innerHTML += '<option value="specific">Día Específico</option>';
        pgModalDateType.innerHTML += '<option value="range">Rango de Fechas</option>';
        pgModalDateType.innerHTML += '<option value="all">Mostrar Todo</option>';
    } else {
        // Modo Semanal
        pgModalDateType.innerHTML += '<option value="month">Mes Completo</option>';
        pgModalDateType.innerHTML += '<option value="range">Rango Personalizado</option>';
    }
    pgModalDateType.selectedIndex = 0;
    updatePgModalView();
    pgDateSelectionModal.style.display = 'block';
});

btnCrFilterDate.addEventListener('click', () => {
    currentReportDateTarget = 'cr'; // Contexto CR
    const mode = currentCrMode || 'daily';
    // 1. Configurar opciones según el modo
    pgModalDateType.innerHTML = '';
    
    if (mode === 'daily') {
        pgModalDateType.innerHTML += '<option value="specific">Día Específico</option>';
        pgModalDateType.innerHTML += '<option value="range">Rango de Fechas</option>';
        pgModalDateType.innerHTML += '<option value="all">Mostrar Todo</option>';
    } else {
        // Modo Semanal
        pgModalDateType.innerHTML += '<option value="month">Mes Completo</option>';
        pgModalDateType.innerHTML += '<option value="range">Rango Personalizado</option>';
    }
    pgModalDateType.selectedIndex = 0;
    updatePgModalView();
    pgDateSelectionModal.style.display = 'block';
});

btnPmFilterDate.addEventListener('click', () => {
    currentReportDateTarget = 'pm'; // Contexto PM
    const mode = currentPmMode || 'daily';
    // 1. Configurar opciones según el modo
    pgModalDateType.innerHTML = '';
    
    if (mode === 'daily') {
        pgModalDateType.innerHTML += '<option value="specific">Día Específico</option>';
        pgModalDateType.innerHTML += '<option value="range">Rango de Fechas</option>';
        pgModalDateType.innerHTML += '<option value="all">Mostrar Todo</option>';
    } else {
        // Modo Semanal
        pgModalDateType.innerHTML += '<option value="month">Mes Completo</option>';
        pgModalDateType.innerHTML += '<option value="range">Rango Personalizado</option>';
    }
    pgModalDateType.selectedIndex = 0;
    updatePgModalView();
    pgDateSelectionModal.style.display = 'block';
});

btnExFilterDate.addEventListener('click', () => {
    currentReportDateTarget = 'ex'; // Contexto EX
    const mode = currentExMode || 'daily';
    // 1. Configurar opciones según el modo
    pgModalDateType.innerHTML = '';
    
    if (mode === 'daily') {
        pgModalDateType.innerHTML += '<option value="specific">Día Específico</option>';
        pgModalDateType.innerHTML += '<option value="range">Rango de Fechas</option>';
        pgModalDateType.innerHTML += '<option value="all">Mostrar Todo</option>';
    } else {
        // Modo Semanal
        pgModalDateType.innerHTML += '<option value="month">Mes Completo</option>';
        pgModalDateType.innerHTML += '<option value="range">Rango Personalizado</option>';
    }
    pgModalDateType.selectedIndex = 0;
    updatePgModalView();
    pgDateSelectionModal.style.display = 'block';
});

btnGnFilterDate.addEventListener('click', () => {
    currentReportDateTarget = 'gn'; // Contexto GN
    const mode = currentGnMode || 'daily'; // Default daily si no hay selección
    // 1. Configurar opciones según el modo
    pgModalDateType.innerHTML = '';
    
    if (mode === 'daily') {
        pgModalDateType.innerHTML += '<option value="specific">Día Específico</option>';
        pgModalDateType.innerHTML += '<option value="range">Rango de Fechas</option>';
        pgModalDateType.innerHTML += '<option value="all">Mostrar Todo</option>';
    } else {
        // Modo Semanal
        pgModalDateType.innerHTML += '<option value="month">Mes Completo</option>';
        pgModalDateType.innerHTML += '<option value="range">Rango Personalizado</option>';
    }
    pgModalDateType.selectedIndex = 0;
    updatePgModalView();
    pgDateSelectionModal.style.display = 'block';
});

pgModalDateType.addEventListener('change', updatePgModalView);

function updatePgModalView() {
    const type = pgModalDateType.value;
    pgModalDateInputsContainer.innerHTML = '';
    const now = new Date();
    const todayISO = getLocalDateKey(now);
    const currentMonthISO = now.toISOString().slice(0, 7); // YYYY-MM

    if (type === 'specific') {
        pgModalDateInputsContainer.innerHTML = `
            <label>Seleccionar Día:</label>
            <input type="date" id="pg-input-day" value="${todayISO}" class="pg-date-input">
        `;
    } else if (type === 'range') {
        pgModalDateInputsContainer.innerHTML = `
            <label>Desde:</label>
            <input type="date" id="pg-input-start" value="${todayISO}" class="pg-date-input">
            <label>Hasta:</label>
            <input type="date" id="pg-input-end" value="${todayISO}" class="pg-date-input">
        `;
    } else if (type === 'month') {
        pgModalDateInputsContainer.innerHTML = `
            <label>Seleccionar Mes:</label>
            <input type="month" id="pg-input-month" value="${currentMonthISO}" class="pg-date-input">
        `;
    } else if (type === 'week_of_month') {
        pgModalDateInputsContainer.innerHTML = `
            <label>Mes:</label>
            <input type="month" id="pg-input-month-week" value="${currentMonthISO}" class="pg-date-input">
            <label>Semana:</label>
            <select id="pg-input-week-num" class="pg-date-input">
                <option value="1">Semana 1 (1-7)</option>
                <option value="2">Semana 2 (8-14)</option>
                <option value="3">Semana 3 (15-21)</option>
                <option value="4">Semana 4 (22-Fin)</option>
            </select>
        `;
    } else if (type === 'all') {
        pgModalDateInputsContainer.innerHTML = '<p>Se mostrarán todos los registros disponibles.</p>';
    }

    // Agregar listeners a los nuevos inputs para actualizar preview
    document.querySelectorAll('.pg-date-input').forEach(input => {
        input.addEventListener('change', updatePgDatePreview);
        input.addEventListener('input', updatePgDatePreview);
    });
    updatePgDatePreview();
}

function updatePgDatePreview() {
    const type = pgModalDateType.value;
    let text = '';
    
    if (type === 'specific') {
        const val = document.getElementById('pg-input-day').value;
        text = val ? `Día: ${val}` : '--';
    } else if (type === 'range') {
        const start = document.getElementById('pg-input-start').value;
        const end = document.getElementById('pg-input-end').value;
        text = (start && end) ? `Del ${start} al ${end}` : '--';
    } else if (type === 'month') {
        const val = document.getElementById('pg-input-month').value;
        text = val ? `Todo el mes: ${val}` : '--';
    } else if (type === 'week_of_month') {
        const month = document.getElementById('pg-input-month-week').value;
        const week = document.getElementById('pg-input-week-num').value;
        text = month ? `Semana ${week} de ${month}` : '--';
    } else if (type === 'all') {
        text = 'Todos los registros';
    }
    
    pgDatePreview.innerText = text;
}

btnPgDateAccept.addEventListener('click', () => {
    const type = pgModalDateType.value;
    let start = new Date();
    let end = new Date();
    let label = pgDatePreview.innerText;

    // Lógica de cálculo de fechas
    if (type === 'specific') {
        const val = document.getElementById('pg-input-day').value;
        if (!val) return alert('Seleccione una fecha');
        const [y, m, d] = val.split('-').map(Number);
        start = new Date(y, m - 1, d);
        end = new Date(y, m - 1, d);
    } else if (type === 'range') {
        const sVal = document.getElementById('pg-input-start').value;
        const eVal = document.getElementById('pg-input-end').value;
        if (!sVal || !eVal) return alert('Seleccione ambas fechas');
        const [sy, sm, sd] = sVal.split('-').map(Number);
        const [ey, em, ed] = eVal.split('-').map(Number);
        start = new Date(sy, sm - 1, sd);
        end = new Date(ey, em - 1, ed);
    } else if (type === 'month') {
        const val = document.getElementById('pg-input-month').value; // YYYY-MM
        if (!val) return alert('Seleccione un mes');
        const [year, month] = val.split('-');
        start = new Date(year, month - 1, 1);
        end = new Date(year, month, 0); // Último día del mes
    } else if (type === 'week_of_month') {
        const val = document.getElementById('pg-input-month-week').value;
        const week = parseInt(document.getElementById('pg-input-week-num').value);
        if (!val) return alert('Seleccione un mes');
        const [year, month] = val.split('-');
        
        start = new Date(year, month - 1, 1); // Base inicio mes
        end = new Date(year, month - 1, 1);   // Base fin mes

        if (week === 1) {
            start.setDate(1); end.setDate(7);
        } else if (week === 2) {
            start.setDate(8); end.setDate(14);
        } else if (week === 3) {
            start.setDate(15); end.setDate(21);
        } else {
            start.setDate(22);
            end = new Date(year, month, 0); // Fin de mes
        }
    } else if (type === 'all') {
        // Rango muy amplio
        start = new Date(2000, 0, 1);
        end = new Date(2100, 11, 31);
    }

    // Ajustar horas
    start.setHours(0,0,0,0);
    
    end.setHours(23,59,59,999);

    // Guardar estado global
    pgDateState = { type, start, end, label };
    
    // Actualizar UI principal
    if (currentReportDateTarget === 'pg') {
        pgFilterDateText.innerText = label;
    } else if (currentReportDateTarget === 'pb') {
        pbFilterDateText.innerText = label;
    } else if (currentReportDateTarget === 'cr') {
        crFilterDateText.innerText = label;
    } else if (currentReportDateTarget === 'pm') {
        pmFilterDateText.innerText = label;
    } else if (currentReportDateTarget === 'ex') {
        exFilterDateText.innerText = label;
    } else if (currentReportDateTarget === 'gn') {
        gnFilterDateText.innerText = label;
    }
    
    pgDateSelectionModal.style.display = 'none';
});

btnPgDateCancel.addEventListener('click', () => {
    pgDateSelectionModal.style.display = 'none';
});

// 2. Generación del Reporte
btnGeneratePg.addEventListener('click', generatePgReport);

async function generatePgReport() {
    pgTableBody.innerHTML = '<tr><td colspan="8">Generando informe... esto puede tardar un poco.</td></tr>';

    if (!currentPgMode) return alert('Seleccione un modo (Diario/Semanal)');
    // Validación de Filtros Estricta
    // if (pgFilterDept.value === "" && pgFilterUser.value === "") {
    //     pgTableBody.innerHTML = '<tr><td colspan="8" style="text-align:center; color: #dc3545; font-weight: bold;">Por favor configure su consulta en el espacio de filtros (Seleccione al menos un Departamento o Asesor).</td></tr>';
    //     return;
    // }

    // A. Usar fechas del estado global
    const start = pgDateState.start;
    const end = pgDateState.end;
    if (!start) return alert('Seleccione una fecha');

    const startISO = start.toISOString();
    const endISO = end.toISOString();

    try {
        // 1. Calcular fecha de retroceso (Lookback)
        const isWeekly = currentPgMode === 'weekly';
        const lookbackDate = new Date(start);
        lookbackDate.setDate(lookbackDate.getDate() - (isWeekly ? 365 : 180));
        
        // 2. Consultas sin límite
        const { data: debtors, error: debtError } = await sbClient
            .from('debtors')
            .select('*')
            .gte('created_at', lookbackDate.toISOString())
            .lte('created_at', end.toISOString());

        if (debtError) throw debtError;

        const { data: payments, error: payError } = await sbClient
            .from('payments')
            .select('*')
            .gte('created_at', start.toISOString())
            .lte('created_at', end.toISOString());

        if (payError) throw payError;

        const expenseTable = isWeekly ? 'wreports' : 'reports';
        let reportsQuery = sbClient.from(expenseTable).select('*');
        
        // Filtro de usuario para reportes de gastos si aplica
        if (pgFilterUser.value) {
             reportsQuery = reportsQuery.eq('user_name', pgFilterUser.value);
        }
        
        const { data: reportsSnap, error: reportsError } = await reportsQuery;
        if (reportsError) throw reportsError;

        // Procesamiento (Lógica de guia.html adaptada)
        const dataMap = {}; 
        const getKey = (dateStr, userName, muniName) => `${dateStr}|${userName}|${muniName}`;
        
        const initRow = (key, dateStr, userName, muniName, sortTime) => {
            if (!dataMap[key]) {
                dataMap[key] = { 
                    date: dateStr, 
                    user: userName, 
                    muni: muniName, 
                    cobro: 0, 
                    creditos: 0, 
                    ganancia: 0, 
                    cobroReal: 0, 
                    gastos: 0, 
                    sortDate: sortTime 
                };
            }
        };

        const isDiario = (term) => {
            if (!term) return false;
            if (Array.isArray(term)) return term.some(t => String(t).toUpperCase() === 'DIARIO');
            return String(term).toUpperCase() === 'DIARIO';
        };
        
        const isSemanal = (term) => {
            if (!term) return false;
            if (Array.isArray(term)) return term.some(t => String(t).toUpperCase() === 'SEMANAL');
            return String(term).toUpperCase() === 'SEMANAL';
        };

        const getWeekInfo = (dateObj) => {
            const d = dateObj.getDate();
            const m = dateObj.getMonth();
            const y = dateObj.getFullYear();
            const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
            let w = 4;
            if (d <= 7) w = 1;
            else if (d <= 14) w = 2;
            else if (d <= 21) w = 3;
            const label = `Semana ${w} - ${months[m]} ${y}`;
            const sortTime = new Date(y, m, (w - 1) * 7 + 1).getTime();
            return { label, sortTime };
        };

        const debtorsMap = new Map();
        const datesInRange = [];
        let currentDateIter = new Date(start);
        while (currentDateIter <= end) {
            datesInRange.push(new Date(currentDateIter));
            currentDateIter.setDate(currentDateIter.getDate() + 1);
        }

        // Procesar Créditos
        debtors.forEach(d => {
            if (pgFilterUser.value && d.asesor_name !== pgFilterUser.value) return;
            if (pgFilterMuni.value && d.municipality !== pgFilterMuni.value) return;
            
            debtorsMap.set(d.id, d);

            if (isWeekly) { if (!isSemanal(d.payment_term)) return; } 
            else { if (!isDiario(d.payment_term)) return; }

            const createdAt = new Date(d.created_at);

            // Nuevos Créditos y Ganancia
            if (d.imported !== true && createdAt >= start && createdAt <= end) {
                let dateStr, sortTime;
                if (isWeekly) {
                    const info = getWeekInfo(createdAt);
                    dateStr = info.label;
                    sortTime = info.sortTime;
                } else {
                    dateStr = getLocalDateKey(createdAt); // YYYY-MM-DD
                    sortTime = createdAt.getTime();
                }
                const key = getKey(dateStr, d.asesor_name, d.municipality);
                initRow(key, dateStr, d.asesor_name, d.municipality, sortTime);
                dataMap[key].creditos += (Number(d.sale_value) || 0);
                dataMap[key].ganancia += (Number(d.interests) || 0);
            }

            // Cobro Esperado
            let effectiveDate = createdAt;
            if (d.sale_date) {
                const parsed = parseDateValue(d.sale_date);
                if (parsed) effectiveDate = parsed;
            }

            const numDays = Number(d.number_of_payments) || 0;
            const expirationDate = new Date(effectiveDate);
            if (isWeekly) expirationDate.setDate(expirationDate.getDate() + (numDays * 7));
            else expirationDate.setDate(expirationDate.getDate() + numDays);

            const activeStart = new Date(effectiveDate);
            activeStart.setDate(activeStart.getDate() + 1);
            activeStart.setHours(0,0,0,0);
            const activeEnd = new Date(expirationDate);
            activeEnd.setHours(23,59,59,999);

            datesInRange.forEach(dayDate => {
                const dayStart = new Date(dayDate);
                dayStart.setHours(0,0,0,0);
                const hasBalance = (Number(d.balance) || 0) > 0;

                if (dayStart >= activeStart && (dayStart <= activeEnd || hasBalance)) {
                    if (!isWeekly || (isWeekly && dayStart.getDay() === effectiveDate.getDay())) {
                        let dateStr, sortTime;
                        if (isWeekly) {
                            const info = getWeekInfo(dayStart);
                            dateStr = info.label;
                            sortTime = info.sortTime;
                        } else {
                            dateStr = getLocalDateKey(dayStart);
                            sortTime = dayStart.getTime();
                        }
                        const key = getKey(dateStr, d.asesor_name, d.municipality);
                        initRow(key, dateStr, d.asesor_name, d.municipality, sortTime);
                        dataMap[key].cobro += (Number(d.valor_cuota) || 0);
                    }
                }
            });
        });

        // Procesar Pagos
        payments.forEach(p => {
            if (pgFilterUser.value && p.user_name !== pgFilterUser.value) return;
            if (pgFilterMuni.value && p.municipality !== pgFilterMuni.value) return;
            if (isWeekly && p.imported === true) return;
            if (p.imported === true) return;

            const debtor = debtorsMap.get(p.debtor_id);
            if (!debtor) return;
            
            if (isWeekly) { if (!isSemanal(debtor.payment_term)) return; }
            else { if (!isDiario(debtor.payment_term)) return; }

            const date = new Date(p.created_at);
            let dateStr, sortTime;
            if (isWeekly) {
                const info = getWeekInfo(date);
                dateStr = info.label;
                sortTime = info.sortTime;
            } else {
                dateStr = getLocalDateKey(date);
                sortTime = date.getTime();
            }
            const key = getKey(dateStr, p.user_name, p.municipality);
            initRow(key, dateStr, p.user_name, p.municipality, sortTime);
            dataMap[key].cobroReal += (parseFloat(p.payment_amount) || 0);
        });

        // Gastos
        const expensesMap = {};
        reportsSnap.forEach(r => {
            let rDate, dateStr;
            if (isWeekly) {
                rDate = new Date(r.created_at);
                const info = getWeekInfo(rDate);
                dateStr = info.label;
            } else {
                const parsed = parseDateValue(r.report_date);
                rDate = parsed || new Date(r.created_at);
                dateStr = r.report_date || getLocalDateKey(rDate);
            }
            if (rDate >= start && rDate <= end) {
                expensesMap[`${dateStr}|${r.user_name}`] = (Number(r.expense_report) || Number(r.expenses_report) || 0);
            }
        });

        const expensesApplied = new Set();
        Object.values(dataMap).forEach(row => {
            const expKey = `${row.date}|${row.user}`;
            if (expensesMap[expKey] && !expensesApplied.has(expKey)) {
                row.gastos = expensesMap[expKey];
                expensesApplied.add(expKey);
            }
        });

        // Renderizar
        currentPgReportData = Object.values(dataMap).sort((a,b) => a.date.localeCompare(b.date));
        pgTableBody.innerHTML = '';
        
        currentPgReportData.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.date}</td>
                <td>${row.user}</td>
                <td>${row.muni}</td>
                <td>$${row.cobro.toLocaleString()}</td>
                <td>$${row.gastos.toLocaleString()}</td>
                <td>$${row.creditos.toLocaleString()}</td>
                <td>$${row.ganancia.toLocaleString()}</td>
                <td>$${row.cobroReal.toLocaleString()}</td>
            `;
            pgTableBody.appendChild(tr);
        });

    } catch (e) {
        console.error(e);
        pgTableBody.innerHTML = `<tr><td colspan="8" style="color:red">Error: ${e.message}</td></tr>`;
    }
}

// 3. Descarga Excel
btnDownloadPg.addEventListener('click', () => {
    if (!currentPgReportData.length) return alert('No hay datos para descargar');
    
    const exportData = currentPgReportData.map(row => ({
        "FECHA": adjustDateForExport(row.date),
        "ASESOR": row.user,
        "MUNICIPIO": row.muni,
        "COBRO REAL": row.cobro, // Expectativa
        "GASTOS": row.gastos,
        "CREDITOS": row.creditos,
        "GANANCIA": row.ganancia,
        "RECAUDO": row.cobroReal // Real
    }));

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(exportData);
    XLSX.utils.book_append_sheet(wb, ws, "Informe PG");
    XLSX.writeFile(wb, "Informe_PG.xlsx");
});

// ==========================================
// LÓGICA INFORME COMPORTAMIENTO DE PAGO (PB)
// ==========================================

btnPbDaily.addEventListener('click', () => {
    currentPbMode = 'daily';
    btnPbDaily.className = 'btn-primary';
    btnPbWeekly.className = 'btn-secondary';
    pbFilterDateText.innerText = 'Seleccionar Fecha';
});

btnPbWeekly.addEventListener('click', () => {
    currentPbMode = 'weekly';
    btnPbWeekly.className = 'btn-primary';
    btnPbDaily.className = 'btn-secondary';
    pbFilterDateText.innerText = 'Seleccionar Fecha';
});

async function loadPbFilters() {
    // Reutilizamos lógica de carga pero para elementos PB
    // Asesores
    const { data: users } = await sbClient.from('users').select('name')
        .neq('role', 'Administrador').neq('role', 'Administrador maestro').neq('role', 'Desarrollador');
    pbFilterUser.innerHTML = '<option value="">Todos los Asesores</option>';
    if (users) users.forEach(u => pbFilterUser.innerHTML += `<option value="${u.name}">${u.name}</option>`);

    // Departamentos
    const { data: deptsData } = await sbClient.from('municipalities').select('id, municipalities');
    pbFilterDept.innerHTML = '<option value="">Todos los Departamentos</option>';
    if (deptsData) {
        deptsData.forEach(dept => {
            const option = document.createElement('option');
            option.value = dept.id;
            option.textContent = dept.id;
            pbFilterDept.appendChild(option);
        });
        if (deptsData.length === 1) {
            pbFilterDept.value = deptsData[0].id;
            pbFilterDept.disabled = true;
            pbFilterDept.dispatchEvent(new Event('change'));
        } else {
            pbFilterDept.disabled = false;
        }
    }
}

// Lógica Dept -> Muni para PB
pbFilterDept.addEventListener('change', async () => {
    pbFilterMuni.innerHTML = '<option value="">Todos los Municipios</option>';
    if (!pbFilterDept.value) return;
    const { data } = await sbClient.from('municipalities').select('municipalities').eq('id', pbFilterDept.value).single();
    if (data) data.municipalities.forEach(m => pbFilterMuni.innerHTML += `<option value="${m}">${m}</option>`);
});

// Lógica User -> Muni para PB
pbFilterUser.addEventListener('change', () => {
    updateUserMunicipalities(pbFilterUser.value, 'pb-filter-muni');
});

btnGeneratePb.addEventListener('click', generatePaymentBehaviorReport);

async function generatePaymentBehaviorReport() {
    pbTableBody.innerHTML = '<tr><td colspan="9">Buscando morosos...</td></tr>';

    if (!currentPbMode) return alert('Seleccione un modo (Diario/Semanal)');
    // Validación de Filtros Estricta
    // if (pbFilterDept.value === "" && pbFilterUser.value === "") {
    //     pbTableBody.innerHTML = '<tr><td colspan="9" style="text-align:center; color: #dc3545; font-weight: bold;">Por favor configure su consulta en el espacio de filtros (Seleccione al menos un Departamento o Asesor).</td></tr>';
    //     return;
    // }

    const start = pgDateState.start;
    const end = pgDateState.end;
    if (!start) return alert('Seleccione una fecha');
    const startISO = start.toISOString();
    const endISO = end.toISOString();

    try {
        // 1. Consultar Deudores (Activos)
        // Filtramos por saldo > 0
        let query = sbClient.from('debtors').select('*').gt('balance', 0);
        
        if (pbFilterUser.value) query = query.eq('asesor_name', pbFilterUser.value);
        if (pbFilterMuni.value) query = query.eq('municipality', pbFilterMuni.value);
        
        const { data: debtors, error: debtError } = await query;
        if (debtError) throw debtError;

        // Filtrar por frecuencia (Diario/Semanal)
        const isWeekly = currentPbMode === 'weekly';
        const targetTerm = isWeekly ? 'SEMANAL' : 'DIARIO';
        
        const activeDebtors = debtors.filter(d => {
            let term = d.payment_term;
            if (Array.isArray(term)) return term.some(t => t.toUpperCase() === targetTerm);
            return String(term).toUpperCase() === targetTerm;
        });

        // 2. Consultar Pagos
        // Helper for DD-MM-YYYY
        const getDDMMYYYY = (dateObj) => {
            const d = String(dateObj.getDate()).padStart(2, '0');
            const m = String(dateObj.getMonth() + 1).padStart(2, '0');
            const y = dateObj.getFullYear();
            return `${d}-${m}-${y}`;
        };

        const queryDateStrings = [];
        let currentDate = new Date(start);
        while (currentDate <= end) {
            queryDateStrings.push(getDDMMYYYY(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }

        // Fetch payments in chunks (by payment_date string)
        const chunks = [];
        for (let i = 0; i < queryDateStrings.length; i += 20) {
            chunks.push(queryDateStrings.slice(i, i + 20));
        }

        // Also fetch by created_at range to catch those without payment_date string or different format
        const paymentsByCreatedPromise = sbClient
            .from('payments')
            .select('debtor_id, created_at, payment_date, payment_amount')
            .gte('created_at', startISO)
            .lte('created_at', endISO);

        const chunkPromises = chunks.map(chunk => 
            sbClient.from('payments').select('debtor_id, created_at, payment_date, payment_amount').in('payment_date', chunk)
        );

        const [createdResult, ...chunkResults] = await Promise.all([paymentsByCreatedPromise, ...chunkPromises]);

        // Helper for Week Info
        const getWeekInfo = (dateObj) => {
            const d = dateObj.getDate();
            const m = dateObj.getMonth();
            const y = dateObj.getFullYear();
            const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
            let w = 4;
            if (d <= 7) w = 1;
            else if (d <= 14) w = 2;
            else if (d <= 21) w = 3;
            const label = `Semana ${w} - ${months[m]} ${y}`;
            return { label };
        };

        const paymentsMap = new Set();
        const processPayment = (p) => {
            let pDate = parseDateValue(p.payment_date) || parseDateValue(p.created_at);
            if (pDate) {
                if (isWeekly) {
                    const label = getWeekInfo(pDate).label;
                    paymentsMap.add(`${p.debtor_id}|${label}`);
                } else {
                    paymentsMap.add(`${p.debtor_id}|${getDDMMYYYY(pDate)}`);
                }
            }
        };

        if (createdResult.data) createdResult.data.forEach(processPayment);
        chunkResults.forEach(res => {
            if (res.data) res.data.forEach(processPayment);
        });

        // 3. Detect Misses
        const misses = [];

        if (isWeekly) {
            // Iterate Weeks
            const weeksProcessed = new Set();
            currentDate = new Date(start);
            while (currentDate <= end) {
                const info = getWeekInfo(currentDate);
                if (!weeksProcessed.has(info.label)) {
                    weeksProcessed.add(info.label);
                    
                    activeDebtors.forEach(debtor => {
                        const created = parseDateValue(debtor.sale_date) || parseDateValue(debtor.created_at);
                        // If created > currentDate (approx start of week check), skip
                        if (created && created > currentDate) return;

                        if (!paymentsMap.has(`${debtor.id}|${info.label}`)) {
                            misses.push({
                                dateStr: info.label,
                                debtor: debtor
                            });
                        }
                    });
                }
                currentDate.setDate(currentDate.getDate() + 1);
            }
        } else {
            // Iterate Days
            currentDate = new Date(start);
            while (currentDate <= end) {
                const dateStr = getDDMMYYYY(currentDate);
                const checkTs = currentDate.getTime();

                activeDebtors.forEach(debtor => {
                    const created = parseDateValue(debtor.sale_date) || parseDateValue(debtor.created_at);
                    // If created today or later, skip (assuming payment starts next day)
                    if (created && created.getTime() >= checkTs) return;

                    if (!paymentsMap.has(`${debtor.id}|${dateStr}`)) {
                        misses.push({
                            dateStr: dateStr,
                            debtor: debtor
                        });
                    }
                });
                currentDate.setDate(currentDate.getDate() + 1);
            }
        }

        currentPbReportData = misses;
        renderPbTable(misses);

    } catch (e) {
        console.error(e);
        pbTableBody.innerHTML = `<tr><td colspan="9" style="color:red">Error: ${e.message}</td></tr>`;
    }
}

function renderPbTable(data) {
    pbTableBody.innerHTML = '';
    if (data.length === 0) {
        pbTableBody.innerHTML = '<tr><td colspan="9">¡Excelente! No se encontraron morosos en este periodo.</td></tr>';
        return;
    }

    data.forEach((item, index) => {
        const d = item.debtor;
        const isNew = (d.credit_type || '').toUpperCase() === 'NUEVO';
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${d.name || ''}</td>
            <td>${d.municipality || ''}</td>
            <td>${d.asesor_name || ''}</td>
            <td>${item.dateStr}</td>
            <td>${isNew ? '$' + parseFloat(d.sale_value).toLocaleString() : '-'}</td>
            <td>${!isNew ? '$' + parseFloat(d.sale_value).toLocaleString() : '-'}</td>
            <td>$${(parseFloat(d.valor_cuota) || 0).toLocaleString()}</td>
            <td>
                <span class="btn-drill-down" data-id="${d.id}" data-idx="${index}" style="cursor:pointer; color:blue; font-weight:bold; margin-left:5px;" title="Ver Historial">▼</span>
            </td>
            <td>$${(parseFloat(d.balance) || 0).toLocaleString()}</td>
        `;
        pbTableBody.appendChild(row);
        
        // Fila oculta para el drill-down
        const detailRow = document.createElement('tr');
        detailRow.id = `detail-row-${index}`;
        detailRow.style.display = 'none';
        detailRow.innerHTML = `<td colspan="9" id="detail-content-${index}" style="background-color: #f8f9fa; padding: 10px;"></td>`;
        pbTableBody.appendChild(detailRow);
    });

    // Listeners para drill-down
    document.querySelectorAll('.btn-drill-down').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const debtorId = e.target.dataset.id;
            const idx = e.target.dataset.idx;
            toggleMissedPaymentDetails(debtorId, idx);
        });
    });
}

// 4. Interactividad: Historial Desplegable
async function getLastPaymentsForDebtor(debtorId) {
    const limit = currentPbMode === 'daily' ? 15 : 4;
    const { data: history } = await sbClient
        .from('payments')
        .select('*')
        .eq('debtor_id', debtorId)
        .order('created_at', { ascending: false })
        .limit(limit);
    return history || [];
}

async function toggleMissedPaymentDetails(debtorId, idx) {
    const row = document.getElementById(`detail-row-${idx}`);
    const content = document.getElementById(`detail-content-${idx}`);
    
    if (row.style.display === 'none') {
        row.style.display = 'table-row';
        content.innerHTML = 'Cargando últimos pagos...';
        
        const history = await getLastPaymentsForDebtor(debtorId);
            
        if (history.length === 0) {
            content.innerHTML = '<strong>No hay pagos registrados recientemente.</strong>';
        } else {
            let html = '<div style="margin-bottom: 10px;"><button class="btn-download-history" data-idx="' + idx + '" style="background-color: #28a745; color: white; border: none; padding: 5px 10px; cursor: pointer;">Descargar Historial Excel</button></div>';
            html += '<table border="1" style="width:100%; font-size:0.85em;"><thead><tr><th>Fecha Pago</th><th>Abono</th><th>Método</th></tr></thead><tbody>';
            history.forEach(h => {
                const date = h.payment_date || getLocalDateKey(new Date(h.created_at));
                html += `<tr><td>${date}</td><td>$${parseFloat(h.payment_amount).toLocaleString()}</td><td>${h.payment_method || 'Efectivo'}</td></tr>`;
            });
            html += '</tbody></table>';
            content.innerHTML = html;
        }
    } else {
        row.style.display = 'none';
    }
}

// Listener para descarga de historial individual (Delegación)
pbTableBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-download-history')) {
        const idx = e.target.dataset.idx;
        downloadMissedPaymentHistory(idx);
    }
});

async function downloadMissedPaymentHistory(idx) {
    const item = currentPbReportData[idx];
    if (!item) return alert('Error al obtener datos del cliente.');
    
    const debtor = item.debtor;
    const history = await getLastPaymentsForDebtor(debtor.id);

    // Construcción del Excel
    const ws_data = [];

    // Bloque 1: Cabecera del Cliente
    ws_data.push(['ASESOR', 'MUNICIPIO', 'FECHA PRESTAMO', 'TIPO CREDITO', 'VALOR CUOTA', 'SALDO ACTUAL', 'FRECUENCIA']);
    ws_data.push([
        debtor.asesor_name || '',
        debtor.municipality || '',
        debtor.sale_date || '',
        debtor.credit_type || '',
        parseFloat(debtor.valor_cuota) || 0,
        parseFloat(debtor.balance) || 0,
        debtor.payment_term || ''
    ]);

    // Separación (2 filas vacías)
    ws_data.push([]);
    ws_data.push([]);

    // Bloque 2: Tabla de Pagos
    if (currentPbMode === 'weekly') {
        ws_data.push(['SEMANA', 'MES', 'FECHA PAGO', 'VALOR CUOTA', 'ABONO']);
    } else {
        ws_data.push(['FECHA PAGO', 'VALOR CUOTA', 'ABONO']);
    }

    history.forEach(h => {
        const dateStr = h.payment_date || getLocalDateKey(new Date(h.created_at));
        const amount = parseFloat(h.payment_amount) || 0;
        const quota = parseFloat(debtor.valor_cuota) || 0;

        // Formato de fecha corta m/d/yy
        let formattedDate = dateStr;
        const parts = dateStr.split('-');
        if (parts.length === 3) {
            formattedDate = `${parseInt(parts[1])}/${parseInt(parts[2])}/${parts[0].slice(2)}`;
        }

        if (currentPbMode === 'weekly') {
            const d = new Date(dateStr);
            d.setMinutes(d.getMinutes() + d.getTimezoneOffset());
            const month = d.toLocaleString('es-ES', { month: 'long' });
            // Cálculo aproximado de semana
            const onejan = new Date(d.getFullYear(), 0, 1);
            const week = Math.ceil((((d.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);
            ws_data.push([week, month.toUpperCase(), formattedDate, quota, amount]);
        } else {
            ws_data.push([formattedDate, quota, amount]);
        }
    });

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(ws_data);
    XLSX.utils.book_append_sheet(wb, ws, "Historial");
    XLSX.writeFile(wb, `Historial_${(debtor.name || 'Cliente').replace(/\s+/g, '_')}.xlsx`);
}

// 5. Descarga Excel
btnDownloadPb.addEventListener('click', () => {
    if (!currentPbReportData.length) return alert('No hay datos para descargar');
    
    const exportData = currentPbReportData.map(item => ({
        "FECHA REVISION": adjustDateForExport(item.date),
        "CLIENTE": item.debtor.name,
        "MUNICIPIO": item.debtor.municipality,
        "ASESOR": item.debtor.asesor_name,
        "SALDO PENDIENTE": item.debtor.balance
    }));

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(exportData);
    XLSX.utils.book_append_sheet(wb, ws, "Morosos");
    XLSX.writeFile(wb, "Reporte_Mora.xlsx");
});

// ==========================================
// LÓGICA INFORME DE CRÉDITOS (CR)
// ==========================================

btnCrDaily.addEventListener('click', () => {
    currentCrMode = 'daily';
    btnCrDaily.className = 'btn-primary';
    btnCrWeekly.className = 'btn-secondary';
    crFilterDateText.innerText = 'Seleccionar Fecha';
});

btnCrWeekly.addEventListener('click', () => {
    currentCrMode = 'weekly';
    btnCrWeekly.className = 'btn-primary';
    btnCrDaily.className = 'btn-secondary';
    crFilterDateText.innerText = 'Seleccionar Fecha';
});

async function loadCrFilters() {
    // Reutilizamos lógica de carga para CR
    // Asesores
    const { data: users } = await sbClient.from('users').select('name')
        .neq('role', 'Administrador').neq('role', 'Administrador maestro').neq('role', 'Desarrollador');
    crFilterUser.innerHTML = '<option value="">Todos los Asesores</option>';
    if (users) users.forEach(u => crFilterUser.innerHTML += `<option value="${u.name}">${u.name}</option>`);

    // Departamentos
    const { data: deptsData } = await sbClient.from('municipalities').select('id, municipalities');
    crFilterDept.innerHTML = '<option value="">Todos los Departamentos</option>';
    if (deptsData) {
        deptsData.forEach(dept => {
            const option = document.createElement('option');
            option.value = dept.id;
            option.textContent = dept.id;
            crFilterDept.appendChild(option);
        });
        if (deptsData.length === 1) {
            crFilterDept.value = deptsData[0].id;
            crFilterDept.disabled = true;
            crFilterDept.dispatchEvent(new Event('change'));
        } else {
            crFilterDept.disabled = false;
        }
    }
}

// Lógica Dept -> Muni para CR
crFilterDept.addEventListener('change', async () => {
    crFilterMuni.innerHTML = '<option value="">Todos los Municipios</option>';
    if (!crFilterDept.value) return;
    const { data } = await sbClient.from('municipalities').select('municipalities').eq('id', crFilterDept.value).single();
    if (data) data.municipalities.forEach(m => crFilterMuni.innerHTML += `<option value="${m}">${m}</option>`);
});

// Lógica User -> Muni para CR (Reutiliza updateUserMunicipalities)
crFilterUser.addEventListener('change', () => {
    updateUserMunicipalities(crFilterUser.value, 'cr-filter-muni');
});

btnGenerateCr.addEventListener('click', generateCreditsReport);

async function generateCreditsReport() {
    crTableBody.innerHTML = '<tr><td colspan="6">Generando informe...</td></tr>';
    crTotalDisplay.innerText = '$0';

    if (!currentCrMode) return alert('Seleccione un modo (Diario/Semanal)');
    // Validación de Filtros Estricta
    // if (crFilterDept.value === "" && crFilterUser.value === "") {
    //     crTableBody.innerHTML = '<tr><td colspan="6" style="text-align:center; color: #dc3545; font-weight: bold;">Por favor configure su consulta en el espacio de filtros (Seleccione al menos un Departamento o Asesor).</td></tr>';
    //     return;
    // }

    const start = pgDateState.start;
    const end = pgDateState.end;
    if (!start) return alert('Seleccione una fecha');
    const startTs = start.getTime();
    const endTs = end.getTime();

    try {
        // 1. Consulta sin límite de fecha (Filtrado en memoria)
        let query = sbClient.from('debtors').select('*');

        if (crFilterUser.value) query = query.eq('asesor_name', crFilterUser.value);
        if (crFilterMuni.value) query = query.eq('municipality', crFilterMuni.value);
        
        const { data: snapshot, error } = await query;
        if (error) throw error;

        // 2. Filtrado en Memoria
        const records = [];
        const isWeekly = currentCrMode === 'weekly';
        const targetTerm = isWeekly ? 'SEMANAL' : 'DIARIO';
        
        snapshot.forEach(d => {
            // Filtro de Fecha
            const recordDate = parseDateValue(d.sale_date) || parseDateValue(d.created_at);
            if (!recordDate || recordDate < start || recordDate > end) return;

            // Filtro de Modo
            let term = d.payment_term;
            let match = false;
            
            if (Array.isArray(term)) {
                match = term.some(t => String(t).toUpperCase() === targetTerm);
            } else {
                match = String(term).toUpperCase() === targetTerm;
            }
            
            if (!match) return;

            records.push(d);
        });

        // Ordenamiento Descendente por fecha
        records.sort((a, b) => {
            const dateA = parseDateValue(a.sale_date) || parseDateValue(a.created_at) || new Date(0);
            const dateB = parseDateValue(b.sale_date) || parseDateValue(b.created_at) || new Date(0);
            return dateB - dateA;
        });

        currentCrReportData = records;
        renderCrTable(records);

    } catch (e) {
        console.error(e);
        crTableBody.innerHTML = `<tr><td colspan="6" style="color:red">Error: ${e.message}</td></tr>`;
    }
}

function renderCrTable(data) {
    crTableBody.innerHTML = '';
    let totalSales = 0;

    if (data.length === 0) {
        crTableBody.innerHTML = '<tr><td colspan="6" style="text-align:center;">No se encontraron registros.</td></tr>';
        return;
    }

    let html = '';
    data.forEach(r => {
        const isNew = (r.credit_type || '').toUpperCase() === 'NUEVO';
        const saleVal = parseFloat(r.sale_value) || 0;
        totalSales += saleVal;

        const nuevo = isNew ? saleVal : 0;
        const represte = !isNew ? saleVal : 0;

        let dateStr = 'N/A';
        if (r.sale_date) dateStr = r.sale_date;
        else if (r.created_at) dateStr = new Date(r.created_at).toLocaleDateString();

        html += `<tr>
            <td>${r.name || 'N/A'}</td>
            <td>${dateStr}</td>
            <td>${r.asesor_name || 'N/A'}</td>
            <td>${r.municipality || 'N/A'}</td>
            <td>$${nuevo.toLocaleString('es-CO')}</td>
            <td>$${represte.toLocaleString('es-CO')}</td>
        </tr>`;
    });

    crTableBody.innerHTML = html;
    crTotalDisplay.innerText = '$' + totalSales.toLocaleString('es-CO');
}

btnDownloadCr.addEventListener('click', () => {
    if (!currentCrReportData.length) return alert('No hay datos para descargar');

    const exportData = currentCrReportData.map(r => {
        const isNew = (r.credit_type || '').toUpperCase() === 'NUEVO';
        const saleVal = parseFloat(r.sale_value) || 0;
        
        return {
            "CLIENTE": r.name,
            "FECHA": adjustDateForExport(r.sale_date || r.created_at),
            "ASESOR": r.asesor_name,
            "MUNICIPIO": r.municipality,
            "NUEVO": isNew ? saleVal : 0,
            "REPRESTE": !isNew ? saleVal : 0
        };
    });

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(exportData);
    XLSX.utils.book_append_sheet(wb, ws, "Informe Creditos");
    XLSX.writeFile(wb, `Informe_Creditos_${Date.now()}.xlsx`);
});

// ==========================================
// LÓGICA INFORME DE COBROS (PM)
// ==========================================

btnPmDaily.addEventListener('click', () => {
    currentPmMode = 'daily';
    btnPmDaily.className = 'btn-primary';
    btnPmWeekly.className = 'btn-secondary';
    pmFilterDateText.innerText = 'Seleccionar Fecha';
});

btnPmWeekly.addEventListener('click', () => {
    currentPmMode = 'weekly';
    btnPmWeekly.className = 'btn-primary';
    btnPmDaily.className = 'btn-secondary';
    pmFilterDateText.innerText = 'Seleccionar Fecha';
});

async function loadPmFilters() {
    // Reutilizamos lógica de carga para PM
    // Asesores
    const { data: users } = await sbClient.from('users').select('name')
        .neq('role', 'Administrador').neq('role', 'Administrador maestro').neq('role', 'Desarrollador');
    pmFilterUser.innerHTML = '<option value="">Todos los Asesores</option>';
    if (users) users.forEach(u => pmFilterUser.innerHTML += `<option value="${u.name}">${u.name}</option>`);

    // Departamentos
    const { data: deptsData } = await sbClient.from('municipalities').select('id, municipalities');
    pmFilterDept.innerHTML = '<option value="">Todos los Departamentos</option>';
    if (deptsData) {
        deptsData.forEach(dept => {
            const option = document.createElement('option');
            option.value = dept.id;
            option.textContent = dept.id;
            pmFilterDept.appendChild(option);
        });
        if (deptsData.length === 1) {
            pmFilterDept.value = deptsData[0].id;
            pmFilterDept.disabled = true;
            pmFilterDept.dispatchEvent(new Event('change'));
        } else {
            pmFilterDept.disabled = false;
        }
    }
}

// Lógica Dept -> Muni para PM
pmFilterDept.addEventListener('change', async () => {
    pmFilterMuni.innerHTML = '<option value="">Todos los Municipios</option>';
    if (!pmFilterDept.value) return;
    const { data } = await sbClient.from('municipalities').select('municipalities').eq('id', pmFilterDept.value).single();
    if (data) data.municipalities.forEach(m => pmFilterMuni.innerHTML += `<option value="${m}">${m}</option>`);
});

// Lógica User -> Muni para PM (Reutiliza updateUserMunicipalities)
pmFilterUser.addEventListener('change', () => {
    updateUserMunicipalities(pmFilterUser.value, 'pm-filter-muni');
});

btnGeneratePm.addEventListener('click', generatePmReport);

async function generatePmReport() {
    pmTableBody.innerHTML = '<tr><td colspan="6">Generando informe...</td></tr>';
    pmTotalCobroDisplay.innerText = '$0';
    pmTotalRecaudoDisplay.innerText = '$0';

    if (!currentPmMode) return alert('Seleccione un modo (Diario/Semanal)');
    // Validación de Filtros Estricta
    // if (pmFilterDept.value === "" && pmFilterUser.value === "") {
    //     pmTableBody.innerHTML = '<tr><td colspan="6" style="text-align:center; color: #dc3545; font-weight: bold;">Por favor configure su consulta en el espacio de filtros (Seleccione al menos un Departamento o Asesor).</td></tr>';
    //     return;
    // }

    const start = pgDateState.start;
    const end = pgDateState.end;
    if (!start) return alert('Seleccione una fecha');
    const startISO = start.toISOString();
    const endISO = end.toISOString();

    try {
        // 1. Consulta de Pagos
        let query = sbClient.from('payments').select('*')
            .gte('created_at', startISO)
            .lte('created_at', endISO);

        if (pmFilterUser.value) query = query.eq('user_name', pmFilterUser.value);
        if (pmFilterMuni.value) query = query.eq('municipality', pmFilterMuni.value);

        const { data: payments, error: payError } = await query;
        if (payError) throw payError;

        if (!payments || payments.length === 0) {
            pmTableBody.innerHTML = '<tr><td colspan="6" style="text-align:center;">No se encontraron pagos en este periodo.</td></tr>';
            return;
        }

        // 2. Enriquecimiento de Datos (Debtors)
        const debtorIds = [...new Set(payments.map(p => p.debtor_id))];
        let debtorsMap = new Map();
        
        if (debtorIds.length > 0) {
            const chunkSize = 200;
            for (let i = 0; i < debtorIds.length; i += chunkSize) {
                const chunk = debtorIds.slice(i, i + chunkSize);
                const { data: debtorsChunk, error: debtError } = await sbClient
                    .from('debtors')
                    .select('id, name, municipality, asesor_name, payment_term, valor_cuota')
                    .in('id', chunk);
                
                if (debtError) throw debtError;
                debtorsChunk.forEach(d => debtorsMap.set(d.id, d));
            }
        }

        // 3. Procesamiento
        const records = [];
        const isWeekly = currentPmMode === 'weekly';
        const targetTerm = isWeekly ? 'SEMANAL' : 'DIARIO';
        
        let totalCobro = 0;
        let totalRecaudo = 0;

        payments.forEach(p => {
            const debtor = debtorsMap.get(p.debtor_id);
            
            // Determinar modo (Default Diario si no hay deudor)
            let term = debtor ? debtor.payment_term : 'Diario';
            let match = false;
            
            if (Array.isArray(term)) {
                match = term.some(t => String(t).toUpperCase() === targetTerm);
            } else {
                match = String(term).toUpperCase() === targetTerm;
            }
            
            if (!match) return;

            const valorCuota = debtor ? (Number(debtor.valor_cuota) || 0) : (Number(p.valor_cuota) || 0);
            const paymentAmount = Number(p.payment_amount) || 0;

            totalCobro += valorCuota;
            totalRecaudo += paymentAmount;

            const pDate = parseDateValue(p.payment_date) || parseDateValue(p.created_at);
            const dateStr = getLocalDateKey(pDate);

            records.push({
                debtorName: p.debtor_name || (debtor ? debtor.name : 'Desconocido'),
                paymentDate: dateStr,
                created_at: p.created_at,
                userName: p.user_name,
                municipality: p.municipality,
                valorCuota: valorCuota,
                paymentAmount: paymentAmount
            });
        });

        // Sort
        records.sort((a, b) => {
            const dateA = parseDateValue(a.paymentDate) || parseDateValue(a.created_at) || new Date(0);
            const dateB = parseDateValue(b.paymentDate) || parseDateValue(b.created_at) || new Date(0);
            return dateB - dateA;
        });

        currentPmReportData = records;
        renderPmTable(records, totalCobro, totalRecaudo);

    } catch (e) {
        console.error(e);
        pmTableBody.innerHTML = `<tr><td colspan="6" style="color:red">Error: ${e.message}</td></tr>`;
    }
}

function renderPmTable(data, totalCobro, totalRecaudo) {
    pmTableBody.innerHTML = '';
    
    if (data.length === 0) {
        pmTableBody.innerHTML = '<tr><td colspan="6" style="text-align:center;">No se encontraron pagos que coincidan con los filtros.</td></tr>';
        return;
    }

    let html = '';
    data.forEach(r => {
        html += `<tr>
            <td>${r.debtorName || 'N/A'}</td>
            <td>${r.paymentDate}</td>
            <td>${r.userName || 'N/A'}</td>
            <td>${r.municipality || 'N/A'}</td>
            <td>$${r.valorCuota.toLocaleString('es-CO')}</td>
            <td>$${r.paymentAmount.toLocaleString('es-CO')}</td>
        </tr>`;
    });

    pmTableBody.innerHTML = html;
    pmTotalCobroDisplay.innerText = '$' + totalCobro.toLocaleString('es-CO');
    pmTotalRecaudoDisplay.innerText = '$' + totalRecaudo.toLocaleString('es-CO');
}

btnDownloadPm.addEventListener('click', () => {
    if (!currentPmReportData.length) return alert('No hay datos para descargar');

    const exportData = currentPmReportData.map(r => ({
        "CLIENTE": r.debtorName,
        "FECHA": adjustDateForExport(r.paymentDate || r.created_at),
        "ASESOR": r.userName,
        "MUNICIPIO": r.municipality,
        "CUOTA": r.valorCuota,
        "ABONO": r.paymentAmount
    }));

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(exportData);
    XLSX.utils.book_append_sheet(wb, ws, "Informe Cobros");
    XLSX.writeFile(wb, `Informe_Cobros_${Date.now()}.xlsx`);
});

// ==========================================
// LÓGICA INFORME DE OTROS GASTOS (EX)
// ==========================================

btnExDaily.addEventListener('click', () => {
    currentExMode = 'daily';
    btnExDaily.className = 'btn-primary';
    btnExWeekly.className = 'btn-secondary';
    exFilterDateText.innerText = 'Seleccionar Fecha';
});

btnExWeekly.addEventListener('click', () => {
    currentExMode = 'weekly';
    btnExWeekly.className = 'btn-primary';
    btnExDaily.className = 'btn-secondary';
    exFilterDateText.innerText = 'Seleccionar Fecha';
});

async function loadExFilters() {
    // Cargar Asesores
    const { data: users } = await sbClient.from('users').select('name')
        .neq('role', 'Administrador').neq('role', 'Administrador maestro').neq('role', 'Desarrollador');
    exFilterUser.innerHTML = '<option value="">Todos los Asesores</option>';
    if (users) users.forEach(u => exFilterUser.innerHTML += `<option value="${u.name}">${u.name}</option>`);
}

btnGenerateEx.addEventListener('click', generateExReport);

async function generateExReport() {
    exTableBody.innerHTML = '<tr><td colspan="4">Generando informe...</td></tr>';

    if (!currentExMode) return alert('Seleccione un modo (Diario/Semanal)');
    // Validación de Filtros Estricta (Opcional, aquí solo usuario es filtro)
    // Si se requiere usuario obligatorio:
    // if (exFilterUser.value === "") return alert('Seleccione un asesor');

    const start = pgDateState.start;
    const end = pgDateState.end;
    const startISO = start.toISOString();
    const endISO = end.toISOString();
    if (!start) return alert('Seleccione una fecha');

    try {
        // 1. Selección Dinámica de Colección
        // Diario -> expenses, Semanal -> wexpenses (Tablas de detalle de gastos)
        const collectionName = currentExMode === 'weekly' ? 'wexpenses' : 'expenses';

        // 2. Consulta a Firestore
        let query = sbClient.from(collectionName)
            .select('*')

        // Filtro opcional por usuario
        if (exFilterUser.value) {
            query = query.eq('user_name', exFilterUser.value);
        }

        const { data: reports, error } = await query;
        if (error) throw error;

        // 3. Lógica de Filtrado en Memoria (Regla de Negocio)
        const processedData = [];

        if (reports) {
            reports.forEach(r => {
                // Filtro de Fecha (expenses_date o created_at)
                const rDate = parseDateValue(r.expenses_date) || parseDateValue(r.created_at);
                if (rDate < start || rDate > end) return;

                // Extraer información del campo 'others'
                // others es un array: [valor, descripcion]
                let others = r.others;
                
                // Asegurar que sea array (por si Supabase devuelve string JSON)
                if (typeof others === 'string') {
                    try { others = JSON.parse(others); } catch (e) { others = []; }
                }
                
                if (Array.isArray(others) && others.length >= 1) {
                    const valor = parseFloat(others[0]) || 0;
                    const descripcion = others[1] || 'N/A';

                    // Condición de Visualización: valor > 0
                    if (valor > 0) {
                        processedData.push({
                            userName: r.user_name,
                            createdAt: r.expenses_date || r.created_at,
                            valor: valor,
                            descripcion: descripcion
                        });
                    }
                }
            });
        }

        currentExReportData = processedData;
        renderExTable(processedData);

    } catch (e) {
        console.error(e);
        exTableBody.innerHTML = `<tr><td colspan="4" style="color:red">Error: ${e.message}</td></tr>`;
    }
}

function renderExTable(data) {
    exTableBody.innerHTML = '';
    
    if (data.length === 0) {
        exTableBody.innerHTML = '<tr><td colspan="4">No se encontraron gastos en este periodo.</td></tr>';
        return;
    }

    data.forEach(r => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${r.userName || ''}</td>
            <td>${new Date(r.createdAt).toLocaleDateString()}</td>
            <td>$${r.valor.toLocaleString()}</td>
            <td>${r.descripcion}</td>
        `;
        exTableBody.appendChild(row);
    });
}

btnDownloadEx.addEventListener('click', () => {
    if (!currentExReportData.length) return alert('No hay datos para descargar');

    const exportData = currentExReportData.map(r => ({
        "ASESOR": r.userName,
        "FECHA": adjustDateForExport(r.createdAt),
        "VALOR": r.valor,
        "DESCRIPCION": r.descripcion
    }));

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(exportData);
    XLSX.utils.book_append_sheet(wb, ws, "Otros Gastos");
    XLSX.writeFile(wb, `Otros_Gastos_${Date.now()}.xlsx`);
});

// ==========================================
// LÓGICA INFORME GENERAL (GN)
// ==========================================

btnGnDaily.addEventListener('click', () => {
    currentGnMode = 'daily';
    btnGnDaily.className = 'btn-primary';
    btnGnWeekly.className = 'btn-secondary';
    gnFilterDateText.innerText = 'Seleccionar Fecha';
});

btnGnWeekly.addEventListener('click', () => {
    currentGnMode = 'weekly';
    btnGnWeekly.className = 'btn-primary';
    btnGnDaily.className = 'btn-secondary';
    gnFilterDateText.innerText = 'Seleccionar Fecha';
});

async function loadGnFilters() {
    // Cargar Asesores
    const { data: users } = await sbClient.from('users').select('name')
        .neq('role', 'Administrador').neq('role', 'Administrador maestro').neq('role', 'Desarrollador');
    gnFilterUser.innerHTML = '<option value="">Todos los Asesores</option>';
    if (users) users.forEach(u => gnFilterUser.innerHTML += `<option value="${u.name}">${u.name}</option>`);
}

btnGenerateGn.addEventListener('click', generateGnReport);

async function generateGnReport() {
    gnTableBody.innerHTML = '<tr><td colspan="8">Generando informe...</td></tr>';

    if (!currentGnMode) return alert('Seleccione un modo (Diario/Semanal)');
    if (!pgDateState.start) return alert('Seleccione una fecha'); // Validación de fecha

    const start = pgDateState.start;
    const end = pgDateState.end;
    const startISO = start.toISOString();
    const endISO = end.toISOString();

    try {
        // 1. Selección de Fuente de Datos
        const collectionName = currentGnMode === 'weekly' ? 'wreports' : 'reports';

        // 2. Consulta a Firestore
        let query = sbClient.from(collectionName)
            .select('*')
            .order('created_at', { ascending: false }); // Orden descendente para inyección

        if (gnFilterUser.value) {
            query = query.eq('user_name', gnFilterUser.value);
        }

        const { data: reports, error } = await query;
        if (error) throw error;

        // Filtro de Fecha en Memoria (report_date o created_at)
        currentGnReportData = (reports || []).filter(r => {
            const rDate = parseDateValue(r.report_date) || parseDateValue(r.created_at);
            return rDate >= start && rDate <= end;
        });
        
        renderGnTable(currentGnReportData);

    } catch (e) {
        console.error(e);
        gnTableBody.innerHTML = `<tr><td colspan="8" style="color:red">Error: ${e.message}</td></tr>`;
    }
}

function renderGnTable(data) {
    gnTableBody.innerHTML = '';

    if (data.length === 0) {
        gnTableBody.innerHTML = '<tr><td colspan="8">No se encontraron reportes.</td></tr>';
        return;
    }

    // 1. Agrupar los reportes por usuario
    const reportsByUser = data.reduce((acc, report) => {
        const user = report.user_name;
        if (!acc[user]) {
            acc[user] = [];
        }
        acc[user].push(report);
        return acc;
    }, {});

    // 2. Iterar sobre cada usuario y renderizar su bloque
    Object.keys(reportsByUser).forEach(userName => {
        const userReports = reportsByUser[userName];

        // 4. Renderizar los reportes normales para este usuario
        userReports.forEach(r => {
            const row = document.createElement('tr');
            
            const creditsVal = parseFloat(r.credits_report) || 0;
            const paymentsVal = parseFloat(r.payments_report) || 0;
            const expensesVal = parseFloat(r.expense_report) || parseFloat(r.expenses_report) || 0;
            const initialBase = parseFloat(r.initial_base) || 0;
            const finalBase = parseFloat(r.final_base) || 0;
            const dateObj = new Date(r.created_at);

            row.innerHTML = `
                <td>${r.user_name}</td>
                <td>
                    $${creditsVal.toLocaleString()}
                    <button class="btn btn-view-gn-credits" data-user="${r.user_name}" data-date="${r.created_at}" style="width: 25px; height: 25px; padding: 0; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; cursor:pointer; background-color: #3498db;">👁️</button>
                </td>
                <td>
                    $${paymentsVal.toLocaleString()}
                    <button class="btn btn-view-gn-payments" data-user="${r.user_name}" data-date="${r.created_at}" style="width: 25px; height: 25px; padding: 0; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; cursor:pointer; background-color: #3498db;">👁️</button>
                </td>
                <td>
                    $${expensesVal.toLocaleString()}
                    <button class="btn btn-edit-gn-expenses" data-id="${r.id}" data-user="${r.user_name}" data-date="${r.created_at}" style="width: 25px; height: 25px; padding: 0; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; cursor:pointer; background-color: #f39c12;">✏️</button>
                    <button class="btn btn-view-gn-expenses" data-user="${r.user_name}" data-date="${r.created_at}" style="width: 25px; height: 25px; padding: 0; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; cursor:pointer; background-color: #3498db;">👁️</button>
                </td>
                <td>
                    $${initialBase.toLocaleString()}
                    <button class="btn btn-edit-base" data-type="initial" data-id="${r.id}" data-val="${initialBase}" style="width: 25px; height: 25px; padding: 0; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; cursor:pointer; background-color: #f39c12;">✏️</button>
                </td>
                <td>
                    $${finalBase.toLocaleString()}
                    <button class="btn btn-edit-base" data-type="final" data-id="${r.id}" data-val="${finalBase}" style="width: 25px; height: 25px; padding: 0; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; cursor:pointer; background-color: #f39c12;">✏️</button>
                </td>
                <td>${dateObj.toLocaleDateString('es-ES', { weekday: 'long' })}</td>
                <td>${dateObj.toLocaleDateString()}</td>
            `;
            gnTableBody.appendChild(row);
        });

        // El primer reporte en la lista es el más reciente porque los datos vienen ordenados desc.
        const lastRecord = userReports[0];

        // 3. Renderizar la fila de "Inyección" para este usuario
        const lastDate = new Date(lastRecord.created_at);
        const nextDate = new Date(lastDate);
        if (currentGnMode === 'daily') {
            nextDate.setDate(nextDate.getDate() + 1);
        } else {
            nextDate.setDate(nextDate.getDate() + 7);
        }
        const projectedBase = parseFloat(lastRecord.final_base) || 0;

        const injectionRow = document.createElement('tr');
        injectionRow.style.backgroundColor = '#d4edda'; // Verde claro
        injectionRow.innerHTML = `
            <td>${lastRecord.user_name} <strong>(Inyección)</strong></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
                <input type="number" id="injection-input-${lastRecord.id}" value="${projectedBase}" style="width: 100px; padding: 2px;">
                <button class="btn save-injection-btn" data-id="${lastRecord.id}" style="width: 25px; height: 25px; padding: 0; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; margin-left: 5px; background-color: #2ecc71;" title="Guardar">💾</button>
            </td>
            <td>-</td>
            <td>${nextDate.toLocaleDateString('es-ES', { weekday: 'long' })}</td>
            <td>${nextDate.toLocaleDateString()}</td>
        `;
        gnTableBody.appendChild(injectionRow);
    });
}

// Listeners de la tabla GN
gnTableBody.addEventListener('click', async (e) => {
    const target = e.target;

    // 3. Persistencia de la Inyección
    if (target.classList.contains('save-injection-btn')) {
        const id = target.dataset.id; // ID del registro ANTERIOR
        const inputVal = document.getElementById(`injection-input-${id}`).value;
        const baseVal = parseFloat(inputVal);
        
        if (confirm(`¿Confirmar inyección de base $${baseVal.toLocaleString()} para el siguiente periodo?`)) {
            const collection = currentGnMode === 'daily' ? 'reports' : 'wreports';
            
            const { data: { session } } = await sbClient.auth.getSession();
            const { error } = await sbClient.functions.invoke('update-report-base', {
                body: { 
                    report_id: id, 
                    collection: collection, 
                    type: 'final', 
                    new_value: baseVal 
                },
                headers: { Authorization: `Bearer ${session?.access_token}` }
            });
            
            if (error) alert('Error al guardar inyección: ' + error.message);
            else {
                alert('Proyección guardada (Cierre actualizado).');
                generateGnReport();
            }
        }
    }

    // 4. Edición de Bases (Inline)
    if (target.classList.contains('btn-edit-base')) {
        const type = target.dataset.type; // 'initial' or 'final'
        const id = target.dataset.id;
        const currentVal = target.dataset.val;
        const collection = currentGnMode === 'daily' ? 'reports' : 'wreports';
        
        const cell = target.closest('td');
        
        // Replace content with input and save button
        cell.innerHTML = `
            <div style="display: flex; align-items: center; gap: 2px;">
                <input type="number" id="input-base-${type}-${id}" value="${currentVal}" style="width: 70px; padding: 2px;">
                <button class="btn btn-save-base btn-action-small" data-id="${id}" data-type="${type}" data-collection="${collection}" style="background-color: #2ecc71; width: 30px; height: 30px; padding: 0; display: inline-flex; justify-content: center; align-items: center;"><i class="fas fa-save"></i></button>
                <button class="btn btn-cancel-base btn-action-small" onclick="generateGnReport()" style="background-color: #e74c3c; width: 30px; height: 30px; padding: 0; display: inline-flex; justify-content: center; align-items: center;"><i class="fas fa-times"></i></button>
            </div>
        `;
    }

    // Save Base Listener
    if (target.classList.contains('btn-save-base') || target.closest('.btn-save-base')) {
        const btn = target.classList.contains('btn-save-base') ? target : target.closest('.btn-save-base');
        const id = btn.dataset.id;
        const type = btn.dataset.type;
        const collection = btn.dataset.collection;
        const input = document.getElementById(`input-base-${type}-${id}`);
        const newVal = parseFloat(input.value);

        if (isNaN(newVal)) return alert('Valor inválido');

        btn.innerHTML = '<div class="small-spinner"></div>';
        btn.disabled = true;
        
        const { data: { session } } = await sbClient.auth.getSession();
        const { error } = await sbClient.functions.invoke('update-report-base', {
            body: { report_id: id, collection: collection, type: type, new_value: newVal },
            headers: { Authorization: `Bearer ${session?.access_token}` }
        });

        if (error) alert('Error: ' + error.message);
        else generateGnReport();
    }

    // 5. Edición de Gastos (Abre Modal)
    if (target.classList.contains('btn-edit-gn-expenses')) {
        const id = target.dataset.id; // ID del reporte padre
        const userName = target.dataset.user;
        const dateStr = target.dataset.date;
        
        // Buscar detalle en expenses/wexpenses
        const detailCollection = currentGnMode === 'daily' ? 'expenses' : 'wexpenses';
        // La relación suele ser por userName y fecha aproximada o exacta.
        // Asumiremos que created_at coincide o buscamos por rango pequeño.
        
        // Intentar búsqueda exacta primero
        let { data: expData } = await sbClient.from(detailCollection)
            .select('*')
            .eq('user_name', userName)
            .eq('created_at', dateStr) // Asumiendo match exacto de timestamp
            .maybeSingle();
        
        // Si no encuentra, buscar por rango del día (Fix 406 y timestamps inexactos)
        if (!expData) {
            const d = new Date(dateStr);
            const start = new Date(d); start.setHours(0,0,0,0);
            const end = new Date(d); end.setHours(23,59,59,999);
            const { data: rangeData } = await sbClient.from(detailCollection).select('*').eq('user_name', userName).gte('created_at', start.toISOString()).lte('created_at', end.toISOString()).maybeSingle();
            expData = rangeData;
        }
            
        if (expData) {
            currentExpEditData = { ...expData, parentId: id, collection: detailCollection };
            
            editExpGas.value = expData.fuel || 0;
            editExpLunch.value = expData.lunch || 0;
            // others es array [val, desc]
            const others = expData.others || [0, ''];
            editExpOtherVal.value = others[0] || 0;
            editExpOtherDesc.value = others[1] || '';
            
            // Calcular total inicial al abrir
            const initialTotal = (parseFloat(editExpGas.value) || 0) + (parseFloat(editExpLunch.value) || 0) + (parseFloat(editExpOtherVal.value) || 0);
            document.getElementById('edit-exp-total-display').innerText = '$ ' + initialTotal.toLocaleString();
            editExpensesModal.style.display = 'block';
        } else {
            alert('No se encontraron detalles de gastos para este registro.');
        }
    }

    // 5. Ver Detalles Gastos (Solo Lectura)
    if (target.classList.contains('btn-view-gn-expenses')) {
        const userName = target.dataset.user;
        const dateStr = target.dataset.date;
        
        const detailCollection = currentGnMode === 'daily' ? 'expenses' : 'wexpenses';
        
        // Intentar búsqueda exacta
        let { data: expData } = await sbClient.from(detailCollection)
            .select('*')
            .eq('user_name', userName)
            .eq('created_at', dateStr)
            .maybeSingle();

        // Si no encuentra, buscar por rango (Fix 406)
        if (!expData) {
            const d = new Date(dateStr);
            const start = new Date(d); start.setHours(0,0,0,0);
            const end = new Date(d); end.setHours(23,59,59,999);
            const { data: rangeData } = await sbClient.from(detailCollection).select('*').eq('user_name', userName).gte('created_at', start.toISOString()).lte('created_at', end.toISOString()).maybeSingle();
            expData = rangeData;
        }
            
        if (expData) {
            viewExpGas.innerText = '$ ' + (expData.fuel || 0).toLocaleString();
            viewExpLunch.innerText = '$ ' + (expData.lunch || 0).toLocaleString();
            const others = expData.others || [0, ''];
            viewExpOtherVal.innerText = '$ ' + (others[0] || 0).toLocaleString();
            viewExpOtherDesc.innerText = others[1] || 'N/A';
            viewExpTotal.innerText = '$ ' + (expData.total_expenses || 0).toLocaleString();
            
            viewExpensesModal.style.display = 'block';
        } else {
            alert('No hay detalles de gastos.');
        }
    }

    // 6. Ver Detalles Créditos (Drill-down)
    if (target.classList.contains('btn-view-gn-credits')) {
        const userName = target.dataset.user;
        const dateStr = target.dataset.date;
        loadReportCreditsDetails(userName, dateStr);
        document.getElementById('view-report-credits-modal').style.display = 'block';
    }

    // 6. Ver Detalles Cobros (Drill-down)
    if (target.classList.contains('btn-view-gn-payments')) {
        const userName = target.dataset.user;
        const dateStr = target.dataset.date;
        loadReportPaymentsDetails(userName, dateStr);
        document.getElementById('view-report-payments-modal').style.display = 'block';
    }
});

// Listeners para recalcular total en tiempo real en el modal de edición
function updateEditExpTotal() {
    const gas = parseFloat(editExpGas.value) || 0;
    const lunch = parseFloat(editExpLunch.value) || 0;
    const other = parseFloat(editExpOtherVal.value) || 0;
    document.getElementById('edit-exp-total-display').innerText = '$ ' + (gas + lunch + other).toLocaleString();
}
editExpGas.addEventListener('input', updateEditExpTotal);
editExpLunch.addEventListener('input', updateEditExpTotal);
editExpOtherVal.addEventListener('input', updateEditExpTotal);

// --- Lógica Guardar Edición Gastos ---
btnSaveExpChanges.addEventListener('click', async () => {
    if (!currentExpEditData) return;

    const newGas = parseFloat(editExpGas.value) || 0;
    const newLunch = parseFloat(editExpLunch.value) || 0;
    const newOtherVal = parseFloat(editExpOtherVal.value) || 0;
    const newOtherDesc = editExpOtherDesc.value;
    
    const newTotal = newGas + newLunch + newOtherVal;

    const updates = {
        fuel: newGas,
        lunch: newLunch,
        others: [newOtherVal, newOtherDesc],
        total_expenses: newTotal
    };

    const { data: { session } } = await sbClient.auth.getSession();
    const { error } = await sbClient.functions.invoke('update-expense', {
        body: { 
            expense_id: currentExpEditData.id, 
            collection: currentExpEditData.collection, 
            updates: updates, 
            parent_id: currentExpEditData.parentId, 
            parent_collection: currentGnMode === 'daily' ? 'reports' : 'wreports'
        },
        headers: { Authorization: `Bearer ${session?.access_token}` }
    });

    if (error) alert('Error actualizando gastos: ' + error.message);
    else {
        alert('Gastos actualizados y reporte balanceado.');
        editExpensesModal.style.display = 'none';
        generateGnReport();
    }
});

// --- Funciones de Detalle (Drill-down) ---

function getReportDateRange(dateStr) {
    const dateObj = new Date(dateStr);
    let start = new Date(dateObj);
    let end = new Date(dateObj);
    
    if (currentGnMode === 'daily') {
        start.setHours(0,0,0,0);
        end.setHours(23,59,59,999);
    } else {
        // Modo semanal: Calcular semana completa (Lunes a Domingo)
        const day = start.getDay(); // 0 (Dom) - 6 (Sab)
        const diff = start.getDate() - day + (day === 0 ? -6 : 1); // Ajustar al lunes
        start.setDate(diff);
        start.setHours(0,0,0,0);
        
        end = new Date(start);
        end.setDate(start.getDate() + 6); // Domingo
        end.setHours(23,59,59,999);
    }
    return { start, end };
}

// Helper para ajustar fecha a mediodía local para exportación
function adjustDateForExport(dateInput) {
     if (!dateInput) return null;
   if (!dateInput) return null;
    
    // Si es string YYYY-MM-DD, parsear manualmente para evitar desfase UTC
    if (typeof dateInput === 'string') {
        if (/^\d{4}-\d{2}-\d{2}$/.test(dateInput)) {
            const [y, m, d] = dateInput.split('-').map(Number);
            return new Date(y, m - 1, d, 12, 0, 0);
        }
        // Si es string DD-MM-YYYY
        if (/^\d{2}-\d{2}-\d{4}$/.test(dateInput)) {
            const [d, m, y] = dateInput.split('-').map(Number);
            return new Date(y, m - 1, d, 12, 0, 0);
        }
        // ISO String (YYYY-MM-DDTHH:mm:ss...) - Extraer partes para evitar desfase UTC
        if (/^\d{4}-\d{2}-\d{2}T/.test(dateInput)) {
            const [y, m, d] = dateInput.split('T')[0].split('-').map(Number);
            return new Date(y, m - 1, d, 12, 0, 0);
        }
    }

    const d = new Date(dateInput);
    if (isNaN(d.getTime())) return null;
    return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 12, 0, 0);
}

async function loadReportCreditsDetails(userName, dateStr) {
    reportCreditsDetailBody.innerHTML = '<tr><td colspan="3">Cargando...</td></tr>';
    reportCreditsTotal.innerText = '$ 0';
    
    // Guardar contexto para descarga
    currentDownloadUser = userName;
    currentDownloadDate = dateStr;
    
    const { start, end } = getReportDateRange(dateStr);

    const { data: credits } = await sbClient
        .from('debtors')
        .select('*')
        .eq('asesor_name', userName)
        .gte('created_at', start.toISOString())
        .lte('created_at', end.toISOString());

    reportCreditsDetailBody.innerHTML = '';

    // Filtrar por modo (Diario/Semanal)
    const targetTerm = currentGnMode === 'daily' ? 'DIARIO' : 'SEMANAL';
    const filteredCredits = (credits || []).filter(c => {
        let term = c.payment_term;
        if (Array.isArray(term)) return term.some(t => t.toUpperCase() === targetTerm);
        if (typeof term === 'string') return term.toUpperCase() === targetTerm;
        return false;
    });

    if (!filteredCredits || filteredCredits.length === 0) {
        reportCreditsDetailBody.innerHTML = '<tr><td colspan="12">No hay créditos.</td></tr>';
        return;
    }

    let total = 0;
    filteredCredits.forEach(c => {
        const val = parseFloat(c.sale_value) || 0;
        total += val;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="c-date">${new Date(c.created_at).toLocaleDateString()}</td>
            <td>${c.name || ''}</td>
            <td>${c.cedula || ''}</td>
            <td>${c.phone || ''}</td>
            <td class="credit-val-cell" data-val="${val}">$ ${val.toLocaleString()}</td>
            <td class="c-int">$ ${(Number(c.interests) || 0).toLocaleString()}</td>
            <td class="c-cuotas">${c.number_of_payments || ''}</td>
            <td class="c-vcuota">$ ${(Number(c.valor_cuota) || 0).toLocaleString()}</td>
            <td>${c.credit_type || ''}</td>
            <td>${c.payment_term || ''}</td>
            <td>${c.municipality || ''}</td>
            <td>
                <button class="btn-edit-detail-credit btn-action-small" data-id="${c.id}" data-val="${val}" style="background-color: #f39c12;">✏️</button>
            </td>
        `;
        // Guardar datos completos en el row para edición
        row.dataset.fullData = JSON.stringify(c);
        reportCreditsDetailBody.appendChild(row);
    });
    reportCreditsTotal.innerText = '$ ' + total.toLocaleString();
}

// Listener Edición Crédito en Detalle
reportCreditsDetailBody.addEventListener('click', async (e) => {
    const target = e.target;
    if (target.classList.contains('btn-edit-detail-credit')) {
        const row = target.closest('tr');
        const data = JSON.parse(row.dataset.fullData);
        
        // Convertir fecha para input
        let dateVal = '';
        if (data.sale_date) {
             // Intentar parsear dd-MM-yyyy
             if (/^\d{2}-\d{2}-\d{4}$/.test(data.sale_date)) {
                const parts = data.sale_date.split('-');
                dateVal = `${parts[2]}-${parts[1]}-${parts[0]}`;
            } else {
                const d = new Date(data.sale_date);
                if (!isNaN(d)) dateVal = getLocalDateKey(d);
            }
        } else {
            const d = new Date(data.created_at);
            if (!isNaN(d)) dateVal = getLocalDateKey(d);
        }

        row.innerHTML = `
            <td><input type="date" class="edit-c-date" value="${dateVal}" style="width:110px"></td>
            <td>${data.name}</td>
            <td>${data.cedula}</td>
            <td>${data.phone}</td>
            <td><input type="number" class="edit-c-val" value="${data.sale_value}" style="width:80px"></td>
            <td><input type="number" class="edit-c-int" value="${data.interests}" style="width:60px"></td>
            <td><input type="number" class="edit-c-ncuotas" value="${data.number_of_payments}" style="width:50px"></td>
            <td><input type="number" class="edit-c-vcuota" value="${data.valor_cuota}" style="width:80px"></td>
            <td>
                <select class="edit-c-type">
                    <option value="Nuevo" ${data.credit_type === 'Nuevo' ? 'selected' : ''}>Nuevo</option>
                    <option value="Represte" ${data.credit_type === 'Represte' ? 'selected' : ''}>Represte</option>
                </select>
            </td>
            <td>
                <select class="edit-c-term">
                    <option value="Diario" ${data.payment_term === 'Diario' ? 'selected' : ''}>Diario</option>
                    <option value="Semanal" ${data.payment_term === 'Semanal' ? 'selected' : ''}>Semanal</option>
                </select>
            </td>
            <td><input type="text" class="edit-c-muni" value="${data.municipality}" style="width:100px"></td>
            <td>
                <button class="btn-save-detail-credit-confirm btn-action-small" data-id="${data.id}" style="background-color: #2ecc71;">💾</button>
                <button class="btn-cancel-detail btn-action-small" onclick="loadReportCreditsDetails('${currentDownloadUser}', '${currentDownloadDate}')" style="background-color: #e74c3c;">❌</button>
            </td>
        `;
    }

    if (target.classList.contains('btn-save-detail-credit-confirm')) {
        const id = target.dataset.id;
        const row = target.closest('tr');
        
        // Recolectar datos
        const updates = {
            sale_date: row.querySelector('.edit-c-date').value, // Guardar como YYYY-MM-DD o convertir si se prefiere
            sale_value: parseFloat(row.querySelector('.edit-c-val').value) || 0,
            interests: parseFloat(row.querySelector('.edit-c-int').value) || 0,
            number_of_payments: parseInt(row.querySelector('.edit-c-ncuotas').value) || 0,
            valor_cuota: parseFloat(row.querySelector('.edit-c-vcuota').value) || 0,
            credit_type: row.querySelector('.edit-c-type').value,
            payment_term: [row.querySelector('.edit-c-term').value],
            municipality: row.querySelector('.edit-c-muni').value
        };

        const { data: { session } } = await sbClient.auth.getSession();
        const { error } = await sbClient.functions.invoke('update-credit', {
            body: { credit_id: id, updates: updates },
            headers: { Authorization: `Bearer ${session?.access_token}` }
        });

        if (error) return alert('Error: ' + error.message);

        await recalculateParentReport(currentDownloadUser, currentDownloadDate);
        loadReportCreditsDetails(currentDownloadUser, currentDownloadDate);
        generateGnReport();
    }
});

async function loadReportPaymentsDetails(userName, dateStr) {
    reportPaymentsDetailBody.innerHTML = '<tr><td colspan="3">Cargando...</td></tr>';
    reportPaymentsTotal.innerText = '$ 0';

    reportPaymentsCash.innerText = '$ 0';
    reportPaymentsTransfer.innerText = '$ 0';
    
    currentDownloadUser = userName;
    currentDownloadDate = dateStr;
    
    const { start, end } = getReportDateRange(dateStr);

    // Estrategia: Buscar pagos en rango -> Enriquecer con municipio (join manual)
    // Nota: Payments no tiene asesor_name directo. Asumimos que el filtro de GN ya validó que estos pagos pertenecen al asesor.
    // Pero para ser precisos, deberíamos filtrar los pagos cuyos deudores tengan este asesor.
    // Simplificación: Traemos pagos del rango y filtramos en memoria o asumimos consistencia si el reporte GN ya los sumó.
    // Para edición segura, mejor verificar.
    
    const { data: payments } = await sbClient
        .from('payments')
        .select('id, payment_amount, created_at, payment_date, debtor_name, payment_method, debtor_id')
        .gte('created_at', start.toISOString())
        .lte('created_at', end.toISOString());

    reportPaymentsDetailBody.innerHTML = '';
    if (!payments || payments.length === 0) {
        reportPaymentsDetailBody.innerHTML = '<tr><td colspan="6">No hay cobros.</td></tr>';
        return;
    }

    // Obtener municipios de los deudores para mostrar
    const debtorIds = [...new Set(payments.map(p => p.debtor_id))];
    const { data: debtors } = await sbClient.from('debtors').select('id, municipality, asesor_name, payment_term').in('id', debtorIds);
    const debtorMap = new Map(debtors.map(d => [d.id, d]));

    let total = 0;
    let cash = 0;
    let transfer = 0;

    const targetTerm = currentGnMode === 'daily' ? 'DIARIO' : 'SEMANAL';

    payments.forEach(p => {
        const debtor = debtorMap.get(p.debtor_id);
        // Filtrar por asesor si es necesario (doble check)
        if (debtor && debtor.asesor_name !== userName) return;

        // Filtrar por modo (Diario/Semanal)
        // ELIMINADO: Se comenta el filtro para mostrar todos los pagos reales en el detalle
        /*
        if (debtor) {
            let term = debtor.payment_term;
            let isTermValid = false;
            if (Array.isArray(term)) isTermValid = term.some(t => t.toUpperCase() === targetTerm);
            else if (typeof term === 'string') isTermValid = term.toUpperCase() === targetTerm;
            if (!isTermValid) return;
        }
        */

        const val = parseFloat(p.payment_amount) || 0;
        const method = (p.payment_method || 'Efectivo').toLowerCase();
        const paymentDate = p.payment_date || getLocalDateKey(new Date(p.created_at));

        
        total += val;
        if (method.includes('efectivo')) cash += val;
        if (method.includes('transferencia')) transfer += val;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${p.payment_date || new Date(p.created_at).toLocaleDateString()}</td>
           <td>${paymentDate}</td>
            <td>${p.debtor_name || 'Cliente'} <small>(${debtor ? debtor.municipality : ''})</small></td>
            <td class="pay-val-cell" data-id="${p.id}" data-val="${val}">$ ${val.toLocaleString()}</td>
            <td>${p.payment_method || 'Efectivo'}</td>
            <td>${debtor ? debtor.municipality : ''}</td>
            <td>
                <button class="btn-edit-detail-payment btn-action-small" data-id="${p.id}" data-val="${val}" style="background-color: #f39c12;">✏️</button>
            </td>
        `;
        // Guardar datos para edición
        row.dataset.fullData = JSON.stringify({ ...p, municipality: debtor ? debtor.municipality : '', debtor_id: p.debtor_id });
        reportPaymentsDetailBody.appendChild(row);
    });

    reportPaymentsTotal.innerText = '$ ' + total.toLocaleString();
    reportPaymentsCash.innerText = '$ ' + cash.toLocaleString();
    reportPaymentsTransfer.innerText = '$ ' + transfer.toLocaleString();
}

// Listener Edición Cobro en Detalle
reportPaymentsDetailBody.addEventListener('click', async (e) => {
    const target = e.target;
    if (target.classList.contains('btn-edit-detail-payment')) {
        const row = target.closest('tr');
        const data = JSON.parse(row.dataset.fullData);
        
        // Obtener municipios asignados al usuario (asesor)
        const { data: user } = await sbClient.from('users').select('assigned_municipality').eq('name', currentDownloadUser).single();
        let assignedMunis = [];
        if (user && user.assigned_municipality) {
            assignedMunis = Array.isArray(user.assigned_municipality) ? user.assigned_municipality : user.assigned_municipality.split(',');
        }

        let muniOptions = '';
        assignedMunis.forEach(m => {
            const mTrim = m.trim();
            muniOptions += `<option value="${mTrim}" ${data.municipality === mTrim ? 'selected' : ''}>${mTrim}</option>`;
        });

        // Fecha input
        let dateVal = data.payment_date || getLocalDateKey(new Date(data.created_at));
        // Si es dd-MM-yyyy convertir
        if (/^\d{2}-\d{2}-\d{4}$/.test(dateVal)) {
             const parts = dateVal.split('-');
             dateVal = `${parts[2]}-${parts[1]}-${parts[0]}`;
        }

        row.innerHTML = `
            <td><input type="date" class="edit-p-date" value="${dateVal}" style="width:110px"></td>
            <td>${data.debtor_name}</td>
            <td><input type="number" class="edit-p-val" value="${data.payment_amount}" style="width:80px"></td>
            <td>
                <select class="edit-p-method">
                    <option value="Efectivo" ${data.payment_method === 'Efectivo' ? 'selected' : ''}>Efectivo</option>
                    <option value="Transferencia" ${data.payment_method === 'Transferencia' ? 'selected' : ''}>Transferencia</option>
                </select>
            </td>
            <td>
                <select class="edit-p-muni">${muniOptions}</select>
            </td>
            <td>
                <button class="btn-save-detail-payment-confirm btn-action-small" data-id="${data.id}" data-debtor-id="${data.debtor_id}" style="background-color: #2ecc71;">💾</button>
                <button class="btn-cancel-detail btn-action-small" onclick="loadReportPaymentsDetails('${currentDownloadUser}', '${currentDownloadDate}')" style="background-color: #e74c3c;">❌</button>
            </td>
        `;
    }

    if (target.classList.contains('btn-save-detail-payment-confirm')) {
        const id = target.dataset.id;
        const debtorId = target.dataset.debtorId;
        const row = target.closest('tr');

        const updatesPayment = {
            payment_date: row.querySelector('.edit-p-date').value,
            payment_amount: parseFloat(row.querySelector('.edit-p-val').value) || 0,
            payment_method: row.querySelector('.edit-p-method').value
        };
        const newMuni = row.querySelector('.edit-p-muni').value;
        
        // Obtener datos originales para old_amount
        const originalData = JSON.parse(row.dataset.fullData || '{}');
        const oldAmount = parseFloat(originalData.payment_amount) || 0;

        const { data: { session } } = await sbClient.auth.getSession();

        // 1. Actualizar Pago (Edge Function)
        const { error: payError } = await sbClient.functions.invoke('update-payment', {
            body: { payment_id: id, updates: updatesPayment, old_amount: oldAmount, debtor_id: debtorId },
            headers: { Authorization: `Bearer ${session?.access_token}` }
        });
        if (payError) return alert('Error actualizando pago: ' + payError.message);

        // 2. Actualizar Municipio Deudor (Edge Function)
        if (originalData.municipality !== newMuni) {
            await sbClient.functions.invoke('update-credit', {
                body: { credit_id: debtorId, updates: { municipality: newMuni } },
                headers: { Authorization: `Bearer ${session?.access_token}` }
            });
        }

        await recalculateParentReport(currentDownloadUser, currentDownloadDate);
        loadReportPaymentsDetails(currentDownloadUser, currentDownloadDate);
        generateGnReport();
    }
});

// Función Genérica de Recálculo en Cascada
async function recalculateParentReport(userName, dateStr) {
    const { start, end } = getReportDateRange(dateStr);
    const targetTerm = currentGnMode === 'daily' ? 'DIARIO' : 'SEMANAL';
    
    // 1. Calcular nuevos totales reales
    // Créditos
    const { data: credits } = await sbClient.from('debtors')
        .select('sale_value, payment_term').eq('asesor_name', userName)
        .gte('created_at', start.toISOString()).lte('created_at', end.toISOString());
    
    const filteredCredits = (credits || []).filter(c => {
        let term = c.payment_term;
        if (Array.isArray(term)) return term.some(t => t.toUpperCase() === targetTerm);
        if (typeof term === 'string') return term.toUpperCase() === targetTerm;
        return false;
    });
    const totalCredits = filteredCredits.reduce((sum, c) => sum + (parseFloat(c.sale_value) || 0), 0);

    // Cobros (requiere cruce o filtro aproximado)
    // Para precisión, sumamos pagos cuyos deudores son de este asesor
    // Simplificación: Usamos la misma lógica que loadReportPaymentsDetails
    const { data: payments } = await sbClient.from('payments')
        .select('payment_amount, debtor_id').gte('created_at', start.toISOString()).lte('created_at', end.toISOString());
    
    // Filtrar pagos del asesor
    const debtorIds = [...new Set(payments.map(p => p.debtor_id))];
    const { data: debtors } = await sbClient.from('debtors').select('id, asesor_name, payment_term').in('id', debtorIds);
    
    const validDebtorIds = new Set(debtors.filter(d => {
        if (d.asesor_name !== userName) return false;
        
        // ELIMINADO: Incluir todos los deudores que hayan pagado, sin importar su término
        /*
        let term = d.payment_term;
        let isTermValid = false;
        if (Array.isArray(term)) isTermValid = term.some(t => t.toUpperCase() === targetTerm);
        else if (typeof term === 'string') isTermValid = term.toUpperCase() === targetTerm;
        return isTermValid;
        */
       return true;
    }).map(d => d.id));
    
    const totalPayments = (payments || []).filter(p => validDebtorIds.has(p.debtor_id))
        .reduce((sum, p) => sum + (parseFloat(p.payment_amount) || 0), 0);

    // Gastos (ya están en la colección hija, sumarlos)
    const detailCollection = currentGnMode === 'daily' ? 'expenses' : 'wexpenses';
    const { data: exp } = await sbClient.from(detailCollection)
        .select('total_expenses').eq('user_name', userName).eq('created_at', dateStr).single();
    const totalExpenses = exp ? (parseFloat(exp.total_expenses) || 0) : 0;

    // 2. Buscar y Actualizar Reporte Padre
    const parentCollection = currentGnMode === 'daily' ? 'reports' : 'wreports';
    const { data: parent } = await sbClient.from(parentCollection)
        .select('*').eq('user_name', userName).eq('created_at', dateStr).single();

    if (parent) {
        const initial = parseFloat(parent.initial_base) || 0;
        const newFinal = (initial + totalPayments) - (totalCredits + totalExpenses);
        
        await sbClient.from(parentCollection).update({
            credits_report: totalCredits,
            payments_report: totalPayments,
            expense_report: totalExpenses, // o expenses_report
            final_base: newFinal,
            og_final_base: newFinal
        }).eq('id', parent.id);
    }
}

// --- Descarga de Detalles ---

btnDownloadReportCreditsDetails.addEventListener('click', async () => {
    // Reutilizar lógica de carga para obtener datos limpios
    const { start, end } = getReportDateRange(currentDownloadDate);
    const { data: credits } = await sbClient.from('debtors')
        .select('*').eq('asesor_name', currentDownloadUser)
        .gte('created_at', start.toISOString()).lte('created_at', end.toISOString());

    if (!credits || credits.length === 0) return alert('No hay datos');

    const exportData = credits.map(c => ({
        "FECHA": adjustDateForExport(c.created_at),
        "CLIENTE": c.name,
        "CEDULA": c.cedula,
        "TELEFONO": c.phone,
        "CREDITO": parseFloat(c.sale_value) || 0,
        "INTERESES": parseFloat(c.interests) || 0,
        "NRO CUOTAS": c.number_of_payments,
        "CUOTA": parseFloat(c.valor_cuota) || 0,
        "TIPO": c.credit_type,
        "FRECUENCIA": c.payment_term,
        "MUNICIPIO": c.municipality
    }));

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(exportData);
    XLSX.utils.book_append_sheet(wb, ws, "Detalle Creditos");
    XLSX.writeFile(wb, `Detalle_Creditos_${currentDownloadUser}.xlsx`);
});

btnDownloadReportPaymentsDetails.addEventListener('click', async () => {
    const { start, end } = getReportDateRange(currentDownloadDate);
    const { data: payments, error } = await sbClient.from('payments')
        .select('*')
        .gte('created_at', start.toISOString()).lte('created_at', end.toISOString());

    if (error) return alert('Error al obtener datos: ' + error.message);
    if (!payments || payments.length === 0) return alert('No hay datos para descargar');

    // Filtrado manual y mapeo (si el join no funciona directo en JS client simple)
    // Asumimos que payments tiene debtor_id. Hacemos fetch de deudores para filtrar por asesor.
    const debtorIds = [...new Set(payments.map(p => p.debtor_id))];
    const { data: debtors } = await sbClient.from('debtors').select('id, municipality, asesor_name').in('id', debtorIds);
    const debtorMap = new Map((debtors || []).map(d => [d.id, d]));

    const filteredPayments = payments.filter(p => {
        const d = debtorMap.get(p.debtor_id);
        return d && d.asesor_name === currentDownloadUser;
    });

    if (filteredPayments.length === 0) return alert('No hay datos');

    const exportData = filteredPayments.map(p => {
        const d = debtorMap.get(p.debtor_id);
        return {
            "FECHA": adjustDateForExport(p.payment_date || p.created_at),
            "CLIENTE": p.debtor_name,
            "ABONO": parseFloat(p.payment_amount) || 0,
            "METODO": p.payment_method,
            "MUNICIPIO": d ? d.municipality : ''
        };
    });

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(exportData);
    XLSX.utils.book_append_sheet(wb, ws, "Detalle Cobros");
    XLSX.writeFile(wb, `Detalle_Cobros_${currentDownloadUser}.xlsx`);
});

// 7. Descarga Excel GN
btnDownloadGn.addEventListener('click', () => {
    if (!currentGnReportData.length) return alert('No hay datos para descargar');

    const exportData = currentGnReportData.map(r => ({
        "ASESOR": r.user_name,
        "CREDITO": parseFloat(r.credits_report) || 0,
        "COBRO": parseFloat(r.payments_report) || 0,
        "GASTOS": parseFloat(r.expense_report) || parseFloat(r.expenses_report) || 0,
        "BASE INICIAL": parseFloat(r.initial_base) || 0,
        "BASE FINAL": parseFloat(r.final_base) || 0,
        "DIA": new Date(r.created_at).toLocaleDateString('es-ES', { weekday: 'long' }),
        "FECHA": adjustDateForExport(r.created_at)
    }));

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(exportData);
    XLSX.utils.book_append_sheet(wb, ws, "Reporte General");
    XLSX.writeFile(wb, `Reporte_General_${Date.now()}.xlsx`);
});

// ==========================================
// MÓDULO DE EXPORTACIÓN AVANZADA
// ==========================================

// 1. Arquitectura UI (Modales y Selectores)

btnOpenExportModal.addEventListener('click', async () => {
    // Cargar Departamentos
    const { data: deptsData } = await sbClient.from('municipalities').select('id, municipalities');
    exportDepartment.innerHTML = '<option value="">Seleccione Departamento</option>';
    if (deptsData) {
        deptsData.forEach(d => {
            exportDepartment.innerHTML += `<option value="${d.id}">${d.id}</option>`;
        });
    }
    exportMunicipality.innerHTML = '<option value="all">Todos los Municipios</option>';

    // Cargar Usuarios
    const { data: users } = await sbClient.from('users').select('name')
        .neq('role', 'Administrador').neq('role', 'Administrador maestro').neq('role', 'Desarrollador');
    exportUser.innerHTML = '<option value="all">Todos los usuarios</option>';
    if (users) {
        users.forEach(u => exportUser.innerHTML += `<option value="${u.name}">${u.name}</option>`);
    }

    // Resetear filtros de fecha
    exportFilters = { day: 'all', month: 'all', year: 'all' };
    updateExportPeriodText();

    exportReportModal.style.display = 'block';
});

// Cascada Dept -> Muni
exportDepartment.addEventListener('change', async () => {
    exportMunicipality.innerHTML = '<option value="all">Todos los Municipios</option>';
    if (!exportDepartment.value) return;

    const { data } = await sbClient.from('municipalities').select('municipalities').eq('id', exportDepartment.value).single();
    if (data && data.municipalities) {
        data.municipalities.forEach(m => {
            exportMunicipality.innerHTML += `<option value="${m}">${m}</option>`;
        });
    }
});

// Modal de Fechas (Auxiliar)
btnOpenExportDateModal.addEventListener('click', () => {
    // Poblar selectores dinámicamente
    populateDateSelectors();
    exportDateFilterModal.style.display = 'block';
});

function populateDateSelectors() {
    // Día
    exportDay.innerHTML = '<option value="all">Todos</option>';
    for (let i = 1; i <= 31; i++) exportDay.innerHTML += `<option value="${i}">${i}</option>`;
    
    // Mes
    exportMonth.innerHTML = '<option value="all">Todos</option>';
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    months.forEach((m, i) => exportMonth.innerHTML += `<option value="${i + 1}">${m}</option>`);

    // Año
    exportYear.innerHTML = '<option value="all">Todos</option>';
    const currentYear = new Date().getFullYear();
    for (let i = 2024; i <= currentYear; i++) exportYear.innerHTML += `<option value="${i}">${i}</option>`;

    // Setear valores actuales
    exportDay.value = exportFilters.day;
    exportMonth.value = exportFilters.month;
    exportYear.value = exportFilters.year;
}

btnApplyExportDate.addEventListener('click', () => {
    exportFilters.day = exportDay.value;
    exportFilters.month = exportMonth.value;
    exportFilters.year = exportYear.value;
    
    updateExportPeriodText();
    exportDateFilterModal.style.display = 'none';
});

function updateExportPeriodText() {
    const d = exportFilters.day === 'all' ? 'Todos los días' : `Día ${exportFilters.day}`;
    const m = exportFilters.month === 'all' ? 'todos los meses' : `Mes ${exportFilters.month}`;
    const y = exportFilters.year === 'all' ? 'todos los años' : `Año ${exportFilters.year}`;
    
    if (exportFilters.day === 'all' && exportFilters.month === 'all' && exportFilters.year === 'all') {
        exportPeriodText.innerText = "Todos los tiempos";
    } else {
        exportPeriodText.innerText = `${d} de ${m}, ${y}`;
    }
}

// 2. Estrategia de Consulta y Filtrado (btnExportAction)

btnExportAction.addEventListener('click', async () => {
    btnExportAction.disabled = true;
    btnExportAction.innerText = 'Generando...';

    try {
        // Filtros Nativos (Firestore/Supabase)
        let query = sbClient.from('debtors').select('*');

        if (exportUser.value !== 'all') {
            query = query.eq('asesor_name', exportUser.value);
        }
        
        // Si se selecciona un municipio específico
        if (exportMunicipality.value !== 'all') {
            query = query.eq('municipality', exportMunicipality.value);
        }

        const { data: rawDebtors, error } = await query;
        if (error) throw error;

        // Regla de Negocio Crítica: Exclusión de Saldos en Cero
        let debtors = rawDebtors.filter(d => (Number(d.balance) || 0) !== 0);

        // Filtros en Memoria (Post-Procesamiento)
        
        // Lógica de Departamento (Si se eligió Dept pero "Todos los Municipios")
        if (exportDepartment.value && exportMunicipality.value === 'all') {
            const { data: deptData } = await sbClient.from('municipalities').select('municipalities').eq('id', exportDepartment.value).single();
            if (deptData && deptData.municipalities) {
                const validMunis = new Set(deptData.municipalities);
                debtors = debtors.filter(d => validMunis.has(d.municipality));
            }
        }

        // Lógica de Fechas
        debtors = debtors.filter(d => {
            // Prioridad: sale_date > created_at
            let dateObj = null;
            if (d.sale_date) {
                if (/^\d{2}-\d{2}-\d{4}$/.test(d.sale_date)) {
                    const parts = d.sale_date.split('-');
                    dateObj = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
                } else {
                    dateObj = new Date(d.sale_date);
                }
            } else {
                dateObj = new Date(d.created_at);
            }

            if (!dateObj || isNaN(dateObj.getTime())) return false;

            // Comodines
            const dayMatch = exportFilters.day === 'all' || dateObj.getDate() == exportFilters.day;
            const monthMatch = exportFilters.month === 'all' || (dateObj.getMonth() + 1) == exportFilters.month;
            const yearMatch = exportFilters.year === 'all' || dateObj.getFullYear() == exportFilters.year;

            return dayMatch && monthMatch && yearMatch;
        });

        if (debtors.length === 0) {
            alert('No se encontraron registros con los filtros seleccionados.');
            btnExportAction.disabled = false;
            btnExportAction.innerText = 'Exportar Excel';
            return;
        }

        // 3. Lógica de Enriquecimiento de Datos (Process Debtor)
        const processedData = await Promise.all(debtors.map(processDebtorForExport));

        // 4. Generación y Estilizado del Excel
        generateStyledExcel(processedData);

    } catch (e) {
        console.error(e);
        alert('Error en exportación: ' + e.message);
    } finally {
        btnExportAction.disabled = false;
        btnExportAction.innerText = 'Exportar Excel';
    }
});

async function processDebtorForExport(d) {
    // Agregación de Pagos (Cálculos Financieros)
    
    // Abono del Crédito (Específico)
    const { data: creditPayments } = await sbClient.from('payments').select('payment_amount').eq('debtor_id', d.id);
    const abonoCredito = (creditPayments || []).reduce((sum, p) => sum + (parseFloat(p.payment_amount) || 0), 0);

    // Recaudo Total (Histórico por Cédula)
    const { data: allPayments } = await sbClient.from('payments').select('payment_amount').eq('cedula', d.cedula);
    let recaudoTotal = (allPayments || []).reduce((sum, p) => sum + (parseFloat(p.payment_amount) || 0), 0);

    // Importados: Sumar histórico de 'clients'
    if (d.imported) {
        const { data: client } = await sbClient.from('clients').select('total_recaudo').eq('cedula', d.cedula).single();
        if (client) {
            recaudoTotal += (parseFloat(client.total_recaudo) || 0);
        }
    }

    // Algoritmo de Estado (Semáforo)
    let estado = 'GRIS';
    
    // Cálculo de Vencimiento
    let dateObj = null;
    if (d.sale_date || d.saleDate) {
        const sDate = d.sale_date || d.saleDate;
        if (/^\d{2}-\d{2}-\d{4}$/.test(sDate)) {
            const [d, m, y] = sDate.split('-').map(Number);
            dateObj = new Date(y, m - 1, d);
        } else if (/^\d{4}-\d{2}-\d{2}$/.test(sDate)) {
            const [y, m, d] = sDate.split('-').map(Number);
            dateObj = new Date(y, m - 1, d);
        } else {
            dateObj = new Date(sDate);
        }
    } else {
        dateObj = new Date(d.created_at);
    }

    if (dateObj && !isNaN(dateObj.getTime())) {
        const numCuotas = parseInt(d.number_of_payments) || 0;
        const term = Array.isArray(d.payment_term) ? d.payment_term[0] : d.payment_term;
        const isWeekly = (term || '').toLowerCase().includes('semanal');
        const daysToAdd = numCuotas * (isWeekly ? 7 : 1);
        
        const dueDate = new Date(dateObj);
        dueDate.setDate(dueDate.getDate() + daysToAdd);
        
        const today = new Date();
        today.setHours(0,0,0,0);
        dueDate.setHours(0,0,0,0);

        const remaining = parseInt(d.remaining_payments) || 0;
        const balance = parseFloat(d.balance) || 0;

        // Lógica de Precedencia
        if (dueDate < today) {
            estado = 'ROJO'; // Vencido
        } else if ((!isWeekly && remaining === 1) || (isWeekly && remaining === 5)) {
            estado = 'VERDE'; // A punto de terminar
        } else if ((!isWeekly && balance === 20000) || (isWeekly && balance === 40000)) {
            estado = 'AMARILLO'; // Saldo bajo específico
        }
    }

    // Mapeo de Columnas
    return {
        "CLIENTE": d.name,
        "CEDULA": d.cedula,
        "MUNICIPIO": d.municipality,
        "ASESOR": d.asesor_name,
        "DIRECCION": d.address || '',
        "TELEFONO": d.phone || '',
        "FECHA DE PRESTAMO": adjustDateForExport(d.sale_date || d.saleDate || d.created_at), // Usar dato crudo para evitar desfase
        "CREDITO NUEVO": (d.credit_type === 'Nuevo') ? (parseFloat(d.sale_value) || 0) : 0,
        "REPRESTE": (d.credit_type === 'Represte') ? (parseFloat(d.sale_value) || 0) : 0,
        "CUOTA": parseInt(d.remaining_payments) || 0,
        "VALOR-CUOTA": parseFloat(d.valor_cuota) || 0,
        "ABONO": abonoCredito,
        "SALDO": parseFloat(d.balance) || 0,
        "RECAUDO TOTAL": recaudoTotal,
        "TIPO DE PAGO": Array.isArray(d.payment_term) ? d.payment_term.join(', ') : d.payment_term,
        "ESTADO": estado
    };
}

function generateStyledExcel(data) {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);

    // Formato de Fechas y Estilos
    // Nota: SheetJS Community (CDN) no soporta estilos visuales (colores) al escribir archivo.
    // Sin embargo, implementamos la lógica solicitada para el objeto cell.s por si se usa una versión Pro o fork.
    // El formato de fecha (z) sí funciona en Community.

    const range = XLSX.utils.decode_range(ws['!ref']);
    
    // Buscar índice de columna ESTADO y FECHA
    const headers = data.length > 0 ? Object.keys(data[0]) : [];
    const statusColIdx = headers.indexOf("ESTADO");
    const dateColIdx = headers.indexOf("FECHA DE PRESTAMO");

    for (let R = range.s.r + 1; R <= range.e.r; ++R) { // Saltar cabecera
        // Formato Fecha
        if (dateColIdx !== -1) {
            const cellRef = XLSX.utils.encode_cell({r: R, c: dateColIdx});
            if (ws[cellRef]) {
                // Ajuste horario mediodía
                if (ws[cellRef].v instanceof Date) {
                    ws[cellRef].v.setHours(12,0,0,0);
                }
                ws[cellRef].z = 'dd/mm/yyyy';
            }
        }

        // Estilos Condicionales (Lógica)
        if (statusColIdx !== -1) {
            const cellRef = XLSX.utils.encode_cell({r: R, c: statusColIdx});
            const cell = ws[cellRef];
            
            if (cell && cell.v) {
                let color = "BFBFBF"; // Gris default
                if (cell.v === 'VERDE') color = "92D050";
                if (cell.v === 'AMARILLO') color = "FFFF00";
                if (cell.v === 'ROJO') color = "FF0000";

                // Inyección de estilo (Funciona en SheetJS Pro / Forks)
                cell.s = {
                    fill: {
                        patternType: "solid",
                        fgColor: { rgb: color }
                    },
                    font: { bold: true }
                };
            }
        }
    }

    // Ajuste de ancho de columnas
    const wscols = headers.map(h => ({wch: h.length + 5}));
    ws['!cols'] = wscols;

    XLSX.utils.book_append_sheet(wb, ws, "Cartera Exportada");
    XLSX.writeFile(wb, `Cartera_Avanzada_${Date.now()}.xlsx`);
    
    // Cerrar modal
    exportReportModal.style.display = 'none';
}