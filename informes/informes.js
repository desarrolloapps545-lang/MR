// Credenciales de Supabase proporcionadas
const SUPABASE_PROJECT_ID = 'fiahwrkuouceyncxoukj';
const SUPABASE_KEY = 'sb_publishable_9lTA1sPLY9iSTASjrCgE6g_Cr1qQ_Re';
const SUPABASE_URL = `https://${SUPABASE_PROJECT_ID}.supabase.co`;

// Inicializar el cliente de Supabase
const sbClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

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
// Referencias Modal Fechas P&G
const pgDateSelectionModal = document.getElementById('pg-date-selection-modal');
const pgModalDateType = document.getElementById('pg-modal-date-type');
const pgModalDateInputsContainer = document.getElementById('pg-modal-date-inputs-container');
const pgDatePreview = document.getElementById('pg-date-preview');
const btnPgDateAccept = document.getElementById('btn-pg-date-accept');
const btnPgDateCancel = document.getElementById('btn-pg-date-cancel');

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
let currentDownloadUser = null;
let currentDownloadDate = null;
let currentExpEditData = null; // Datos temporales para edición de gastos
let pendingReportUpdate = false; // Bandera para cambios pendientes
let currentReportContext = null; // Contexto unificado

// Contexto global para detalles de créditos
let currentCreditsContext = {
    reportId: null,
    userName: null,
    dateStr: null,
    mode: null,
    collection: null
};

// Estado de fechas
let pgDateState = {
    type: 'specific',
    start: null,
    end: null,
    label: ''
};

// Helper para fechas locales (Soluciona el desfase de -1/+1 día por zona horaria)
function getLocalDateKey(dateObj) {
    if (!dateObj || isNaN(dateObj.getTime())) return '';
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Helper para parsear fechas (Soporta ISO, YYYY-MM-DD, y DD-MM-YYYY)
function parseDateValue(value) {
    if (!value) return null;

    if (value instanceof Date) {
        return isNaN(value.getTime()) ? null : value;
    }

    if (typeof value !== 'string') return null;

    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        const [y, m, d] = value.split('-').map(Number);
        return new Date(y, m - 1, d);
    }

    if (/^\d{2}-\d{2}-\d{4}$/.test(value)) {
        const [d, m, y] = value.split('-').map(Number);
        return new Date(y, m - 1, d);
    }

    const d = new Date(value);
    return isNaN(d.getTime()) ? null : d;
}

document.addEventListener('DOMContentLoaded', () => {
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

        // FIX: Asegurar que el encabezado de la tabla de cierres sea correcto al entrar
        const table = gnTableBody.closest('table');
        if (table && table.tHead && table.tHead.rows.length > 0) {
            table.tHead.rows[0].innerHTML = `
                <th>Asesor</th>
                <th>Créditos</th>
                <th>Cobros</th>
                <th>Gastos</th>
                <th>Base Inicial</th>
                <th>Base Final</th>
                <th>Inyección</th>
                <th>Fecha</th>
            `;
        }
    });

    async function loadPgFilters() {
        // 1. Cargar Asesores
        const { data: users } = await sbClient.from('users').select('name')
            .neq('role', 'Administrador')
            .neq('role', 'Administrador maestro')
            .neq('role', 'Desarrollador');
        pgFilterUser.innerHTML = '<option value="">Todos los Asesores</option>';
        if (users) {
            users.forEach(u => pgFilterUser.innerHTML += `<option value="${u.name}">${u.name}</option>`);
        }

        // 2. Cargar Departamentos
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

        if (deptsData.length === 1) {
            pgFilterDept.value = deptsData[0].id;
            pgFilterDept.disabled = true;
            pgFilterDept.dispatchEvent(new Event('change'));
        } else {
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

        select.innerHTML = '<option value="">Cargando...</option>';
        select.disabled = true;

        if (!userName) {
            select.innerHTML = '<option value="">Todos los Municipios</option>';
            select.disabled = false;
            
            if (pgFilterDept.value) {
                pgFilterDept.dispatchEvent(new Event('change'));
            }
            return;
        }

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

        const assigned = user.assigned_municipality || [];
        let list = [];
        if (Array.isArray(assigned)) list = assigned;
        else if (typeof assigned === 'string') list = assigned.split(',').map(s => s.trim());

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
        currentReportDateTarget = 'pg';
        const mode = currentPgMode || 'daily';
        pgModalDateType.innerHTML = '';
        
        if (mode === 'daily') {
            pgModalDateType.innerHTML += '<option value="specific">Día Específico</option>';
            pgModalDateType.innerHTML += '<option value="range">Rango de Fechas</option>';
            pgModalDateType.innerHTML += '<option value="all">Mostrar Todo</option>';
        } else {
            pgModalDateType.innerHTML += '<option value="month">Mes Completo</option>';
            pgModalDateType.innerHTML += '<option value="range">Rango Personalizado</option>';
            pgModalDateType.innerHTML += '<option value="all">Mostrar Todo</option>';
        }

        pgModalDateType.value = pgDateState.type;
        if (!pgModalDateType.value) pgModalDateType.selectedIndex = 0;

        updatePgModalView();
        pgDateSelectionModal.style.display = 'block';
    });

    btnPbFilterDate.addEventListener('click', () => {
        currentReportDateTarget = 'pb';
        const mode = currentPbMode || 'daily';
        pgModalDateType.innerHTML = '';
        
        if (mode === 'daily') {
            pgModalDateType.innerHTML += '<option value="specific">Día Específico</option>';
            pgModalDateType.innerHTML += '<option value="range">Rango de Fechas</option>';
            pgModalDateType.innerHTML += '<option value="all">Mostrar Todo</option>';
        } else {
            pgModalDateType.innerHTML += '<option value="month">Mes Completo</option>';
            pgModalDateType.innerHTML += '<option value="range">Rango Personalizado</option>';
        }
        pgModalDateType.selectedIndex = 0;
        updatePgModalView();
        pgDateSelectionModal.style.display = 'block';
    });

    btnCrFilterDate.addEventListener('click', () => {
        currentReportDateTarget = 'cr';
        const mode = currentCrMode || 'daily';
        pgModalDateType.innerHTML = '';
        
        if (mode === 'daily') {
            pgModalDateType.innerHTML += '<option value="specific">Día Específico</option>';
            pgModalDateType.innerHTML += '<option value="range">Rango de Fechas</option>';
            pgModalDateType.innerHTML += '<option value="all">Mostrar Todo</option>';
        } else {
            pgModalDateType.innerHTML += '<option value="month">Mes Completo</option>';
            pgModalDateType.innerHTML += '<option value="range">Rango Personalizado</option>';
        }
        pgModalDateType.selectedIndex = 0;
        updatePgModalView();
        pgDateSelectionModal.style.display = 'block';
    });

    btnPmFilterDate.addEventListener('click', () => {
        currentReportDateTarget = 'pm';
        const mode = currentPmMode || 'daily';
        pgModalDateType.innerHTML = '';
        
        if (mode === 'daily') {
            pgModalDateType.innerHTML += '<option value="specific">Día Específico</option>';
            pgModalDateType.innerHTML += '<option value="range">Rango de Fechas</option>';
            pgModalDateType.innerHTML += '<option value="all">Mostrar Todo</option>';
        } else {
            pgModalDateType.innerHTML += '<option value="month">Mes Completo</option>';
            pgModalDateType.innerHTML += '<option value="range">Rango Personalizado</option>';
        }
        pgModalDateType.selectedIndex = 0;
        updatePgModalView();
        pgDateSelectionModal.style.display = 'block';
    });

    btnExFilterDate.addEventListener('click', () => {
        currentReportDateTarget = 'ex';
        const mode = currentExMode || 'daily';
        pgModalDateType.innerHTML = '';
        
        if (mode === 'daily') {
            pgModalDateType.innerHTML += '<option value="specific">Día Específico</option>';
            pgModalDateType.innerHTML += '<option value="range">Rango de Fechas</option>';
            pgModalDateType.innerHTML += '<option value="all">Mostrar Todo</option>';
        } else {
            pgModalDateType.innerHTML += '<option value="month">Mes Completo</option>';
            pgModalDateType.innerHTML += '<option value="range">Rango Personalizado</option>';
        }
        pgModalDateType.selectedIndex = 0;
        updatePgModalView();
        pgDateSelectionModal.style.display = 'block';
    });

    btnGnFilterDate.addEventListener('click', () => {
        currentReportDateTarget = 'gn';
        const mode = currentGnMode || 'daily';
        pgModalDateType.innerHTML = '';
        
        if (mode === 'daily') {
            pgModalDateType.innerHTML += '<option value="specific">Día Específico</option>';
            pgModalDateType.innerHTML += '<option value="range">Rango de Fechas</option>';
            pgModalDateType.innerHTML += '<option value="all">Mostrar Todo</option>';
        } else {
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
        const currentMonthISO = now.toISOString().slice(0, 7);

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
            const val = document.getElementById('pg-input-month').value;
            if (!val) return alert('Seleccione un mes');
            const [year, month] = val.split('-');
            start = new Date(year, month - 1, 1);
            end = new Date(year, month, 0);
        } else if (type === 'week_of_month') {
            const val = document.getElementById('pg-input-month-week').value;
            const week = parseInt(document.getElementById('pg-input-week-num').value);
            if (!val) return alert('Seleccione un mes');
            const [year, month] = val.split('-');
            
            start = new Date(year, month - 1, 1);
            end = new Date(year, month - 1, 1);

            if (week === 1) { start.setDate(1); end.setDate(7); } 
            else if (week === 2) { start.setDate(8); end.setDate(14); } 
            else if (week === 3) { start.setDate(15); end.setDate(21); } 
            else { start.setDate(22); end = new Date(year, month, 0); }
        } else if (type === 'all') {
            start = new Date(2000, 0, 1);
            end = new Date(2100, 11, 31);
        }

        start.setHours(0,0,0,0);
        end.setHours(23,59,59,999);

        pgDateState = { type, start, end, label };
        
        if (currentReportDateTarget === 'pg') pgFilterDateText.innerText = label;
        else if (currentReportDateTarget === 'pb') pbFilterDateText.innerText = label;
        else if (currentReportDateTarget === 'cr') crFilterDateText.innerText = label;
        else if (currentReportDateTarget === 'pm') pmFilterDateText.innerText = label;
        else if (currentReportDateTarget === 'ex') exFilterDateText.innerText = label;
        else if (currentReportDateTarget === 'gn') gnFilterDateText.innerText = label;
        
        pgDateSelectionModal.style.display = 'none';
    });

    btnPgDateCancel.addEventListener('click', () => {
        pgDateSelectionModal.style.display = 'none';
    });

    // 2. Generación del Reporte
    btnGeneratePg.addEventListener('click', generatePgReport);

    async function generatePgReport() {
        console.log('Generación de reporte P&G pendiente de reconstrucción.');
        pgTableBody.innerHTML = '<tr><td colspan="8">Funcionalidad en reconstrucción...</td></tr>';
    }

    function showInputModal(title, label, initialValue, onConfirm) {
        const modalId = 'generic-input-modal';
        let modal = document.getElementById(modalId);

        if (modal) {
            modal.remove(); // Remove previous instance to avoid event listener issues
        }

        modal = document.createElement('div');
        modal.id = modalId;
        modal.className = 'modal'; // Use existing modal styles
        modal.style.cssText = 'display:flex; justify-content:center; align-items:center; z-index: 10001;';

        modal.innerHTML = `
            <div class="modal-content" style="max-width: 400px;">
                <span class="close-btn">&times;</span>
                <h3 style="margin-top:0; color:#16233c;">${title}</h3>
                <label for="generic-input-value" style="margin-top:15px;">${label}</label>
                <input type="number" id="generic-input-value" value="${initialValue}" step="any" style="margin-top:5px;">
                <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px;">
                    <button id="btn-cancel-generic-input" class="btn btn-secondary">Cancelar</button>
                    <button id="btn-save-generic-input" class="btn btn-primary">Guardar</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        const close = () => {
            const m = document.getElementById(modalId);
            if (m) m.style.display = 'none';
        };

        modal.querySelector('.close-btn').onclick = close;
        modal.querySelector('#btn-cancel-generic-input').onclick = close;
        
        modal.querySelector('#btn-save-generic-input').onclick = () => {
            const inputVal = document.getElementById('generic-input-value').value;
            const val = parseFloat(inputVal);
            if (isNaN(val)) {
                alert("Valor inválido. Por favor, ingrese un número.");
                return;
            }
            onConfirm(val);
            close();
        };
    }

    // Funciones globales para acciones P&G
    window.openPgInjection = async (reportId, userName, currentFinalBase, mode) => {
        const collection = mode === 'daily' ? 'reports' : 'wreports';

        // Leer el reporte para verificar si ya existe una base original guardada.
        const { data: report, error: reportError } = await sbClient.from(collection).select('og_final_base, final_base').eq('report_number', reportId).single();
        if (reportError) {
            return alert("Error al leer el reporte para inyección: " + reportError.message);
        }

        showInputModal('Inyectar / Editar Base Final', 'Nuevo valor para la Base Final:', currentFinalBase, (val) => {
            const updatePayload = {
                final_base: val
            };

            // Si no hay una base original guardada (es la primera inyección),
            // se guarda la base final calculada actual como la original.
            if (report.og_final_base === null) {
                updatePayload.og_final_base = parseFloat(report.final_base); // Usar el valor de la BD, no el del botón
            }
            
            // Establecer contexto para el modal
            currentReportContext = { reportId, collection, userName, mode };

            // Llamar al modal de confirmación
            showMandatoryUpdateModal('Inyección (Nueva Base Final)', val, val, async () => {
                const { error } = await sbClient.from(collection).update(updatePayload).eq('report_number', reportId);

                if (error) {
                    alert("Error al actualizar: " + error.message);
                } else {
                    // Refrescar tablas sin alerta
                    if (document.getElementById('pg-report-box').style.display === 'block') generatePgReport();
                    if (document.getElementById('gn-report-box').style.display === 'block') generateGnReport();
                }
            });
        });
    };

    window.editFinalBaseDirectly = async (reportId, userName, currentFinalBase, mode) => {
        showInputModal('Editar Base Final Directamente', 'Nuevo valor para la Base Final:', currentFinalBase, (val) => {
            const collection = mode === 'daily' ? 'reports' : 'wreports';
            
            // Establecer contexto para el modal
            currentReportContext = { reportId, collection, userName, mode };

            // Llamar al modal de confirmación
            showMandatoryUpdateModal('Edición Base Final', val, val, async () => {
                const { error } = await sbClient.from(collection).update({
                    final_base: val
                }).eq('report_number', reportId);

                if (error) {
                    alert("Error al actualizar: " + error.message);
                } else {
                    // Refrescar tablas sin alerta
                    if (document.getElementById('gn-report-box').style.display === 'block') generateGnReport();
                }
            });
        });
    };

    window.editInitialBase = async (reportId, currentVal, mode) => {
        showInputModal('Editar Base Inicial', 'Nuevo valor para la Base Inicial:', currentVal, async (val) => {
            const collection = mode === 'daily' ? 'reports' : 'wreports';

            try {
                // Obtener reporte para recalcular final_base y obtener contexto
                const { data: report, error: reportError } = await sbClient.from(collection).select('*').eq('report_number', reportId).single();
                if (reportError || !report) throw new Error(reportError?.message || "Reporte no encontrado");

                // Establecer contexto para el modal
                currentReportContext = { reportId, collection, userName: report.user_name, mode };

                const payments = parseFloat(report.payments_report) || 0;
                const credits = parseFloat(report.credits_report) || 0;
                const expenses = parseFloat(report.expense_report) || 0;
                const newFinalBase = (payments + val) - (credits + expenses);

                // Llamar al modal de confirmación
                showMandatoryUpdateModal('Base Inicial', val, newFinalBase, async () => {
                    const { error } = await sbClient.from(collection).update({
                        initial_base: val,
                        final_base: newFinalBase
                    }).eq('report_number', reportId);

                    if (error) {
                        alert("Error al actualizar: " + error.message);
                    } else {
                        // Refrescar tablas sin alerta
                        if (document.getElementById('pg-report-box').style.display === 'block') generatePgReport();
                        if (document.getElementById('gn-report-box').style.display === 'block') generateGnReport();
                    }
                });

            } catch (e) {
                alert("Error preparando la actualización: " + e.message);
            }
        });
    };

    window.openPgExpenses = async (reportId, userName, dateStr, mode) => {
        const collection = mode === 'daily' ? 'expenses' : 'wexpenses';
        const datePart = dateStr.split('T')[0]; // YYYY-MM-DD
        
        // Buscar gastos que coincidan con usuario y fecha
        const { data: expenses, error } = await sbClient.from(collection)
            .select('*')
            .eq('user_name', userName)
            .gte('created_at', datePart + 'T00:00:00')
            .lte('created_at', datePart + 'T23:59:59');
            
        if (error) return alert("Error cargando gastos: " + error.message);
        
        if (!expenses || expenses.length === 0) return alert("No se encontraron registros de gastos para este reporte.");
        
        const exp = expenses[0];
        
        currentExpEditData = { ...exp, reportId, collection, parentCollection: mode === 'daily' ? 'reports' : 'wreports' };
        
        editExpGas.value = exp.fuel || 0;
        editExpLunch.value = exp.lunch || 0;
        
        if (exp.others && Array.isArray(exp.others) && exp.others.length > 0) {
            editExpOtherVal.value = exp.others[0] || 0;
            editExpOtherDesc.value = exp.others[1] || '';
        } else {
            editExpOtherVal.value = 0;
            editExpOtherDesc.value = '';
        }
        
        const total = (parseFloat(exp.fuel)||0) + (parseFloat(exp.lunch)||0) + (parseFloat(exp.others?.[0])||0);
        const display = document.getElementById('edit-exp-total-display');
        if(display) display.innerText = '$ ' + total.toLocaleString();
        
        // Configurar contexto global para el modal de gastos
        currentReportContext = {
            reportId,
            collection,
            userName,
            dateStr,
            mode
        };

        // Resetear bandera y configurar interceptor
        pendingReportUpdate = false;
        setupModalCloseInterceptor(editExpensesModal, 'expenses');

        editExpensesModal.style.display = 'block';
    };

    // 3. Descarga Excel
    btnDownloadPg.addEventListener('click', () => {
        alert('Descarga en reconstrucción.');
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
        const { data: users } = await sbClient.from('users').select('name')
            .neq('role', 'Administrador').neq('role', 'Administrador maestro').neq('role', 'Desarrollador');
        pbFilterUser.innerHTML = '<option value="">Todos los Asesores</option>';
        if (users) users.forEach(u => pbFilterUser.innerHTML += `<option value="${u.name}">${u.name}</option>`);

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

    pbFilterDept.addEventListener('change', async () => {
        pbFilterMuni.innerHTML = '<option value="">Todos los Municipios</option>';
        if (!pbFilterDept.value) return;
        const { data } = await sbClient.from('municipalities').select('municipalities').eq('id', pbFilterDept.value).single();
        if (data) data.municipalities.forEach(m => pbFilterMuni.innerHTML += `<option value="${m}">${m}</option>`);
    });

    pbFilterUser.addEventListener('change', () => {
        updateUserMunicipalities(pbFilterUser.value, 'pb-filter-muni');
    });

    btnGeneratePb.addEventListener('click', generatePaymentBehaviorReport);

    async function generatePaymentBehaviorReport() {
        console.log('Generación de reporte PB pendiente de reconstrucción.');
        pbTableBody.innerHTML = '<tr><td colspan="9">Funcionalidad en reconstrucción...</td></tr>';
    }

    pbTableBody.addEventListener('click', (e) => {
        // Sin lógica
    });

    btnDownloadPb.addEventListener('click', () => {
        alert('Descarga en reconstrucción.');
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
        const { data: users } = await sbClient.from('users').select('name')
            .neq('role', 'Administrador').neq('role', 'Administrador maestro').neq('role', 'Desarrollador');
        crFilterUser.innerHTML = '<option value="">Todos los Asesores</option>';
        if (users) users.forEach(u => crFilterUser.innerHTML += `<option value="${u.name}">${u.name}</option>`);

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

    crFilterDept.addEventListener('change', async () => {
        crFilterMuni.innerHTML = '<option value="">Todos los Municipios</option>';
        if (!crFilterDept.value) return;
        const { data } = await sbClient.from('municipalities').select('municipalities').eq('id', crFilterDept.value).single();
        if (data) data.municipalities.forEach(m => crFilterMuni.innerHTML += `<option value="${m}">${m}</option>`);
    });

    crFilterUser.addEventListener('change', () => {
        updateUserMunicipalities(crFilterUser.value, 'cr-filter-muni');
    });

    btnGenerateCr.addEventListener('click', generateCreditsReport);

    async function generateCreditsReport() {
        crTableBody.innerHTML = '<tr><td colspan="6">Cargando...</td></tr>';
        crTotalDisplay.innerText = '$0';

        let query = sbClient.from('debtors').select('*');

        if (pgDateState.start && pgDateState.end) {
            query = query.gte('created_at', pgDateState.start.toISOString())
                         .lte('created_at', pgDateState.end.toISOString());
        }

        if (crFilterUser.value) query = query.eq('asesor_name', crFilterUser.value);
        
        if (crFilterMuni.value) {
            query = query.eq('municipality', crFilterMuni.value);
        } else if (crFilterDept.value) {
             const { data: deptData } = await sbClient.from('municipalities').select('municipalities').eq('id', crFilterDept.value).single();
             if (deptData && deptData.municipalities) {
                 query = query.in('municipality', deptData.municipalities);
             }
        }

        const { data: credits, error } = await query;

        if (error) {
            crTableBody.innerHTML = `<tr><td colspan="6">Error: ${error.message}</td></tr>`;
            return;
        }

        // Filtrar por modo (Diario/Semanal)
        const isWeekly = currentCrMode === 'weekly';
        const targetTerm = isWeekly ? 'SEMANAL' : 'DIARIO';

        const filteredCredits = (credits || []).filter(c => {
            const term = c.payment_term;
            if (!term) return false;
            if (Array.isArray(term)) {
                return term.some(t => String(t).toUpperCase() === targetTerm);
            }
            return String(term).toUpperCase() === targetTerm;
        });

        currentCrReportData = filteredCredits;
        renderCrTable(filteredCredits);
    }

    function renderCrTable(data) {
        crTableBody.innerHTML = '';
        let total = 0;
        if (!data || data.length === 0) {
            crTableBody.innerHTML = '<tr><td colspan="6">No se encontraron registros.</td></tr>';
            return;
        }

        data.forEach(c => {
            const val = parseFloat(c.sale_value) || 0;
            total += val;
            const isNew = (c.credit_type || '').toLowerCase().includes('nuevo');
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${c.name || ''}</td>
                <td>${new Date(c.created_at).toLocaleDateString()}</td>
                <td>${c.asesor_name || ''}</td>
                <td>${c.municipality || ''}</td>
                <td>${isNew ? '$' + val.toLocaleString() : '-'}</td>
                <td>${!isNew ? '$' + val.toLocaleString() : '-'}</td>
            `;
            crTableBody.appendChild(row);
        });
        crTotalDisplay.innerText = '$' + total.toLocaleString();
    }

    btnDownloadCr.addEventListener('click', () => {
        alert('Descarga en reconstrucción.');
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
        const { data: users } = await sbClient.from('users').select('name')
            .neq('role', 'Administrador').neq('role', 'Administrador maestro').neq('role', 'Desarrollador');
        pmFilterUser.innerHTML = '<option value="">Todos los Asesores</option>';
        if (users) users.forEach(u => pmFilterUser.innerHTML += `<option value="${u.name}">${u.name}</option>`);

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

    pmFilterDept.addEventListener('change', async () => {
        pmFilterMuni.innerHTML = '<option value="">Todos los Municipios</option>';
        if (!pmFilterDept.value) return;
        const { data } = await sbClient.from('municipalities').select('municipalities').eq('id', pmFilterDept.value).single();
        if (data) data.municipalities.forEach(m => pmFilterMuni.innerHTML += `<option value="${m}">${m}</option>`);
    });

    pmFilterUser.addEventListener('change', () => {
        updateUserMunicipalities(pmFilterUser.value, 'pm-filter-muni');
    });

    btnGeneratePm.addEventListener('click', generatePmReport);

    async function generatePmReport() {
        pmTableBody.innerHTML = '<tr><td colspan="6">Cargando...</td></tr>';
        pmTotalCobroDisplay.innerText = '$0';
        pmTotalRecaudoDisplay.innerText = '$0';

        let query = sbClient.from('payments').select('*');

        if (pgDateState.start && pgDateState.end) {
            query = query.gte('created_at', pgDateState.start.toISOString())
                         .lte('created_at', pgDateState.end.toISOString());
        }

        if (pmFilterUser.value) query = query.eq('user_name', pmFilterUser.value);
        
        if (pmFilterMuni.value) {
            query = query.eq('municipality', pmFilterMuni.value);
        } else if (pmFilterDept.value) {
             const { data: deptData } = await sbClient.from('municipalities').select('municipalities').eq('id', pmFilterDept.value).single();
             if (deptData && deptData.municipalities) {
                 query = query.in('municipality', deptData.municipalities);
             }
        }

        const { data: payments, error } = await query;

        if (error) {
            pmTableBody.innerHTML = `<tr><td colspan="6">Error: ${error.message}</td></tr>`;
            return;
        }

        if (!payments || payments.length === 0) {
            pmTableBody.innerHTML = '<tr><td colspan="6">No se encontraron registros.</td></tr>';
            return;
        }

        // Obtener valor cuota y tipo de pago de los deudores asociados
        const debtorNumbers = [...new Set(payments.map(p => p.debtor_number).filter(n => n))];
        let debtorsMap = new Map();
        if (debtorNumbers.length > 0) {
            const { data: debtors } = await sbClient.from('debtors').select('debtor_number, valor_cuota, payment_term').in('debtor_number', debtorNumbers);
            if (debtors) {
                debtors.forEach(d => debtorsMap.set(d.debtor_number, {
                    valor_cuota: d.valor_cuota,
                    payment_term: d.payment_term
                }));
            }
        }

        // Filtrar pagos según el modo (Diario/Semanal)
        const isWeekly = currentPmMode === 'weekly';
        const targetTerm = isWeekly ? 'SEMANAL' : 'DIARIO';

        const filteredPayments = payments.filter(p => {
            const debtorInfo = debtorsMap.get(p.debtor_number);
            if (!debtorInfo || !debtorInfo.payment_term) return false;

            const term = debtorInfo.payment_term;
            if (Array.isArray(term)) {
                return term.some(t => String(t).toUpperCase() === targetTerm);
            }
            return String(term).toUpperCase() === targetTerm;
        });

        currentPmReportData = filteredPayments;
        pmTableBody.innerHTML = '';
        
        let totalCobro = 0; 
        let totalRecaudo = 0;

        filteredPayments.forEach(p => {
            const abono = parseFloat(p.payment_amount) || 0;
            const debtorInfo = debtorsMap.get(p.debtor_number);
            const cuota = debtorInfo ? (parseFloat(debtorInfo.valor_cuota) || 0) : 0;
            
            totalRecaudo += abono;
            totalCobro += cuota;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${p.debtor_name || ''}</td>
                <td>${new Date(p.created_at).toLocaleDateString()}</td>
                <td>${p.user_name || ''}</td>
                <td>${p.municipality || ''}</td>
                <td>$${cuota.toLocaleString()}</td>
                <td>$${abono.toLocaleString()}</td>
            `;
            pmTableBody.appendChild(row);
        });

        pmTotalCobroDisplay.innerText = '$' + totalCobro.toLocaleString();
        pmTotalRecaudoDisplay.innerText = '$' + totalRecaudo.toLocaleString();
    }

    btnDownloadPm.addEventListener('click', () => {
        alert('Descarga en reconstrucción.');
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
        const { data: users } = await sbClient.from('users').select('name')
            .neq('role', 'Administrador').neq('role', 'Administrador maestro').neq('role', 'Desarrollador');
        exFilterUser.innerHTML = '<option value="">Todos los Asesores</option>';
        if (users) users.forEach(u => exFilterUser.innerHTML += `<option value="${u.name}">${u.name}</option>`);
    }

    btnGenerateEx.addEventListener('click', generateExReport);

    async function generateExReport() {
        exTableBody.innerHTML = '<tr><td colspan="4">Cargando...</td></tr>';

        const user = exFilterUser.value;
        const isWeekly = currentExMode === 'weekly';
        
        // Get Date Range from pgDateState
        const startDate = pgDateState.start;
        const endDate = pgDateState.end;

        if (!startDate || !endDate) {
             exTableBody.innerHTML = '<tr><td colspan="4">Seleccione un rango de fechas.</td></tr>';
             return;
        }

        try {
            const collectionName = isWeekly ? 'wexpenses' : 'expenses';
            let query = sbClient.from(collectionName)
                .select('*')
                .gte('created_at', startDate.toISOString())
                .lte('created_at', endDate.toISOString());
            
            if (user) {
                query = query.eq('user_name', user);
            }

            const { data: records, error } = await query;
            if (error) throw error;

            // Sort by date desc
            records.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

            currentExReportData = records; // Guardar para descarga

            let html = '';
            records.forEach(r => {
                const othersVal = (r.others && r.others.length > 0) ? (parseFloat(r.others[0]) || 0) : 0;
                if (othersVal <= 0) return;

                const othersDesc = (r.others && r.others.length > 1) ? r.others[1] : 'N/A';
                
                let dateStr = 'N/A';
                if (r.created_at) dateStr = new Date(r.created_at).toLocaleDateString();

                html += `<tr>
                    <td>${r.user_name || 'N/A'}</td>
                    <td>${dateStr}</td>
                    <td>$${othersVal.toLocaleString('es-CO')}</td>
                    <td>${othersDesc}</td>
                </tr>`;
            });

            exTableBody.innerHTML = html || '<tr><td colspan="4" style="text-align:center;">No se encontraron registros.</td></tr>';
        } catch (error) {
            console.error("Error generating EX report:", error);
            exTableBody.innerHTML = `<tr><td colspan="4" style="text-align:center; color:red;">Error: ${error.message}</td></tr>`;
        }
    }

    btnDownloadEx.addEventListener('click', () => {
        alert('Descarga en reconstrucción.');
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
        const { data: users } = await sbClient.from('users').select('name')
            .neq('role', 'Administrador').neq('role', 'Administrador maestro').neq('role', 'Desarrollador');
        gnFilterUser.innerHTML = '<option value="">Todos los Asesores</option>';
        if (users) users.forEach(u => gnFilterUser.innerHTML += `<option value="${u.name}">${u.name}</option>`);
    }

    btnGenerateGn.addEventListener('click', generateGnReport);

    async function generateGnReport() {
        gnTableBody.innerHTML = '<tr><td colspan="8">Cargando...</td></tr>';

        const mode = currentGnMode || 'daily';
        const tableName = mode === 'daily' ? 'reports' : 'wreports';
        
        let query = sbClient.from(tableName).select('*');

        // Filtro de Fechas
        if (pgDateState.start && pgDateState.end) {
            query = query.gte('created_at', pgDateState.start.toISOString())
                         .lte('created_at', pgDateState.end.toISOString());
        }

        // Filtro de Usuario
        if (gnFilterUser.value) {
            query = query.eq('user_name', gnFilterUser.value);
        }

        const { data: reports, error } = await query;

        // Actualizar encabezados de tabla GN para eliminar columna DIA
        const table = gnTableBody.closest('table');
        if (table && table.tHead && table.tHead.rows.length > 0) {
            table.tHead.rows[0].innerHTML = `
                <th>Asesor</th>
                <th>Créditos</th>
                <th>Cobros</th>
                <th>Gastos</th>
                <th>Base Inicial</th>
                <th>Base Final</th>
                <th>Inyección</th>
                <th>Fecha</th>
            `;
        }

        if (error) {
            gnTableBody.innerHTML = `<tr><td colspan="8">Error: ${error.message}</td></tr>`;
            return;
        }

        currentGnReportData = reports;
        gnTableBody.innerHTML = '';

        if (!reports || reports.length === 0) {
            gnTableBody.innerHTML = '<tr><td colspan="8">No se encontraron registros.</td></tr>';
            return;
        }

        // Ordenar por fecha descendente
        reports.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        const fmt = (val) => '$ ' + (parseFloat(val) || 0).toLocaleString('es-CO');
        const fmtDate = (dateStr) => {
            if (!dateStr) return '';
            return new Date(dateStr).toLocaleDateString();
        };

        reports.forEach(r => {
            const hasInjection = r.og_final_base !== null && r.og_final_base !== undefined;
            const baseFinalDisplayValue = hasInjection ? r.og_final_base : r.final_base;
            const injectionDisplayValue = hasInjection ? r.final_base : null;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${r.user_name || ''}</td>
                <td>
                    ${fmt(r.credits_report)}
                    <button class="btn-action-small btn-primary" onclick="openReportCreditsDetails('${r.report_number}', '${r.user_name}', '${r.created_at}', '${currentGnMode || 'daily'}')"><i class="fas fa-eye"></i></button>
                </td>
                <td>
                    ${fmt(r.payments_report)}
                    <button class="btn-action-small btn-primary" onclick="openReportPaymentsDetails('${r.report_number}', '${r.user_name}', '${r.created_at}', '${currentGnMode || 'daily'}')"><i class="fas fa-eye"></i></button>
                </td>
                <td>
                    ${fmt(r.expense_report)}
                    <button class="btn-action-small btn-primary" onclick="openPgExpenses('${r.report_number}', '${r.user_name}', '${r.created_at}', '${currentGnMode || 'daily'}')"><i class="fas fa-pencil-alt"></i></button>
                </td>
                <td>
                    ${fmt(r.initial_base)}
                    <button class="btn-action-small btn-secondary" onclick="editInitialBase('${r.report_number}', '${r.initial_base}', '${currentGnMode || 'daily'}')"><i class="fas fa-pencil-alt"></i></button>
                </td>
                <td>
                    ${fmt(baseFinalDisplayValue)}
                    <button class="btn-action-small btn-info" onclick="editFinalBaseDirectly('${r.report_number}', '${r.user_name}', '${r.final_base}', '${currentGnMode || 'daily'}')" title="Editar Base Final Directamente"><i class="fas fa-edit"></i></button>
                </td>
                <td>
                    ${injectionDisplayValue !== null ? fmt(injectionDisplayValue) : '-'}
                    <button class="btn-action-small btn-warning" onclick="openPgInjection('${r.report_number}', '${r.user_name}', '${r.final_base}', '${currentGnMode || 'daily'}')" title="Inyección/Guardar Original"><i class="fas fa-syringe"></i></button>
                </td>
                <td>${fmtDate(r.created_at)}</td>
            `;
            gnTableBody.appendChild(row);
        });
    }

    gnTableBody.addEventListener('click', async (e) => {
        // Lógica vacía por ahora
    });

    function updateEditExpTotal() {
        const gas = parseFloat(editExpGas.value) || 0;
        const lunch = parseFloat(editExpLunch.value) || 0;
        const other = parseFloat(editExpOtherVal.value) || 0;
        document.getElementById('edit-exp-total-display').innerText = '$ ' + (gas + lunch + other).toLocaleString();
    }
    editExpGas.addEventListener('input', updateEditExpTotal);
    editExpLunch.addEventListener('input', updateEditExpTotal);
    editExpOtherVal.addEventListener('input', updateEditExpTotal);

    btnSaveExpChanges.addEventListener('click', async () => {
        if (!currentExpEditData) return;
        
        const newFuel = parseFloat(editExpGas.value) || 0;
        const newLunch = parseFloat(editExpLunch.value) || 0;
        const newOtherVal = parseFloat(editExpOtherVal.value) || 0;
        const newOtherDesc = editExpOtherDesc.value || '';
        
        const newTotal = newFuel + newLunch + newOtherVal;
        
        const updates = {
            fuel: newFuel,
            lunch: newLunch,
            others: [newOtherVal, newOtherDesc],
            total_expenses: newTotal
        };
        
        try {
            // 1. Actualizar tabla de gastos
            const { error: expError } = await sbClient
                .from(currentExpEditData.collection)
                .update(updates)
                .eq('user_name', currentExpEditData.user_name)
                .eq('created_at', currentExpEditData.created_at);
            
            if (expError) throw expError;

            // 2. Marcar cambio pendiente (No actualizar reporte aún)
            pendingReportUpdate = true;

        } catch (e) {
            alert("Error: " + e.message);
        }
    });

    // Lógica para abrir detalles de créditos
    window.openReportCreditsDetails = async (reportId, userName, dateStr, mode) => {
        const modal = document.getElementById('view-report-credits-modal');
        const tbody = document.getElementById('report-credits-detail-body');
        const totalSpan = document.getElementById('report-credits-total');
        
        // Verificar si es una recarga (modal ya abierto)
        const isRefresh = modal.style.display === 'block';

        tbody.innerHTML = '<tr><td colspan="12" style="text-align:center;">Cargando...</td></tr>';
        totalSpan.innerText = '$0';
        modal.style.display = 'block';

        // Solo resetear bandera y configurar interceptor si es apertura inicial
        if (!isRefresh) {
            pendingReportUpdate = false;
            setupModalCloseInterceptor(modal, 'credits');
        }

        const collection = mode === 'daily' ? 'reports' : 'wreports';
        currentCreditsContext = { reportId, userName, dateStr, mode, collection };
        currentReportContext = currentCreditsContext; // Sync global context

        try {
            // Calcular Rango de Fechas
            const reportDate = new Date(dateStr);
            let startDate, endDate;

            if (mode === 'weekly') {
                // Si es semanal, dateStr suele ser la fecha de creación del reporte (fin de semana o momento de cierre)
                // Calculamos la semana hacia atrás
                const end = new Date(reportDate);
                end.setHours(23, 59, 59, 999);
                const start = new Date(reportDate);
                start.setDate(start.getDate() - 6); // Retroceder 6 días
                start.setHours(0, 0, 0, 0);
                startDate = start.toISOString();
                endDate = end.toISOString();
            } else {
                // Diario
                const start = new Date(reportDate);
                start.setHours(0, 0, 0, 0);
                const end = new Date(reportDate);
                end.setHours(23, 59, 59, 999);
                startDate = start.toISOString();
                endDate = end.toISOString();
            }

            // Consultar Créditos
            const { data: credits, error } = await sbClient
                .from('debtors')
                .select('*')
                .eq('asesor_name', userName)
                .gte('created_at', startDate)
                .lte('created_at', endDate);

            if (error) throw error;

            // Filtrar por Payment Term
            const targetTerm = mode === 'weekly' ? 'SEMANAL' : 'DIARIO';
            const filteredCredits = credits.filter(c => {
                const term = c.payment_term;
                if (Array.isArray(term)) {
                    return term.some(t => String(t).toUpperCase() === targetTerm);
                }
                return String(term) && String(term).toUpperCase() === targetTerm;
            });

            currentCreditsContext.data = filteredCredits; // Guardar para descarga

            // Renderizar Tabla
            tbody.innerHTML = '';
            let total = 0;
            
            if (filteredCredits.length === 0) {
                tbody.innerHTML = '<tr><td colspan="12" style="text-align:center;">No se encontraron créditos.</td></tr>';
            } else {
                filteredCredits.forEach(c => {
                    total += (parseFloat(c.sale_value) || 0);
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${c.name || ''}</td>
                        <td>${c.cedula || ''}</td>
                        <td>
                            <span class="view-mode">$ ${(parseFloat(c.sale_value)||0).toLocaleString()}</span>
                            <input type="number" class="edit-mode edit-credit-val" value="${c.sale_value}" style="display:none; width: 80px;">
                        </td>
                        <td>
                            <span class="view-mode">$ ${(parseFloat(c.interests)||0).toLocaleString()}</span>
                            <input type="number" class="edit-mode edit-credit-int" value="${c.interests}" style="display:none; width: 80px;">
                        </td>
                        <td>$ ${(parseFloat(c.total_credit_value)||0).toLocaleString()}</td>
                        <td>${c.number_of_payments || ''}</td>
                        <td>$ ${(parseFloat(c.valor_cuota)||0).toLocaleString()}</td>
                        <td>${c.credit_type || ''}</td>
                        <td>${c.payment_term || ''}</td>
                        <td>${c.municipality || ''}</td>
                        <td>
                            <button class="btn-action-small btn-primary view-mode" onclick="toggleEditCreditDetail(this)"><i class="fas fa-pencil-alt"></i></button>
                            <div class="edit-mode" style="display:none; gap:5px;">
                                <button class="btn-action-small btn-success" onclick="saveCreditDetail('${c.debtor_number}', this)"><i class="fas fa-save"></i></button>
                                <button class="btn-action-small btn-secondary" onclick="toggleEditCreditDetail(this)"><i class="fas fa-times"></i></button>
                            </div>
                        </td>
                    `;
                    tbody.appendChild(row);
                });
            }
            totalSpan.innerText = '$ ' + total.toLocaleString('es-CO');

        } catch (e) {
            console.error(e);
            tbody.innerHTML = `<tr><td colspan="12" style="color:red;">Error: ${e.message}</td></tr>`;
        }
    };

    // Alternar modo edición
    window.toggleEditCreditDetail = (btn) => {
        const row = btn.closest('tr');
        const viewElements = row.querySelectorAll('.view-mode');
        const editElements = row.querySelectorAll('.edit-mode');
        
        if (editElements[0].style.display === 'none') {
            viewElements.forEach(el => el.style.display = 'none');
            editElements.forEach(el => el.style.display = '');
        } else {
            viewElements.forEach(el => el.style.display = '');
            editElements.forEach(el => el.style.display = 'none');
        }
    };

    // Guardar cambios en detalle de crédito
    window.saveCreditDetail = async (debtorNumber, btn) => {
        const row = btn.closest('tr');
        const newVal = parseFloat(row.querySelector('.edit-credit-val').value) || 0;
        const newInt = parseFloat(row.querySelector('.edit-credit-int').value) || 0;
        const newTotalCreditValue = newVal + newInt;
        
        try {
            // 1. Actualizar Deudor en Base de Datos
            const { error: updateError } = await sbClient
                .from('debtors')
                .update({ sale_value: newVal, interests: newInt, total_credit_value: newTotalCreditValue })
                .eq('debtor_number', debtorNumber);

            if (updateError) throw updateError;

            // 2. Marcar cambio pendiente y refrescar lista
            pendingReportUpdate = true;
            
            const { reportId, collection, userName, dateStr, mode } = currentCreditsContext;
            openReportCreditsDetails(reportId, userName, dateStr, mode);

        } catch (e) {
            alert('Error: ' + e.message);
        }
    };

    // Descarga Excel de Detalles de Créditos
    btnDownloadReportCreditsDetails.addEventListener('click', () => {
        if (!currentCreditsContext || !currentCreditsContext.data) return alert("No hay datos para descargar.");
        
        const data = currentCreditsContext.data.map(c => ({
            CLIENTE: c.name,
            CEDULA: c.cedula,
            CREDITO: parseFloat(c.sale_value) || 0,
            INTERESES: parseFloat(c.interests) || 0,
            "VALOR TOTAL": parseFloat(c.total_credit_value) || 0,
            CUOTAS: c.number_of_payments,
            VALOR_CUOTA: parseFloat(c.valor_cuota) || 0,
            "TIPO DE CREDITO": c.credit_type,
            "TIPO DE PAGO": c.payment_term,
            MUNICIPIO: c.municipality
        }));

        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Creditos");
        XLSX.writeFile(wb, `Detalle_Creditos_${currentCreditsContext.userName}_${currentCreditsContext.dateStr}.xlsx`);
    });

    // Lógica para abrir detalles de cobros
    window.openReportPaymentsDetails = async (reportId, userName, dateStr, mode) => {
        const modal = document.getElementById('view-report-payments-modal');
        const tbody = document.getElementById('report-payments-detail-body');
        const totalSpan = document.getElementById('report-payments-total');
        const cashSpan = document.getElementById('report-payments-cash');
        const transferSpan = document.getElementById('report-payments-transfer');
        
        // Corrección de Encabezados
        const table = tbody.closest('table');
        if (table) {
            let thead = table.querySelector('thead');
            if (!thead) {
                thead = document.createElement('thead');
                table.insertBefore(thead, table.firstChild);
            }
            thead.style.cssText = "position: sticky; top: 0; background: white; z-index: 1;";
            thead.innerHTML = `
                <tr>
                    <th>Fecha</th>
                    <th>Cliente</th>
                    <th>Cédula</th>
                    <th>Abono</th>
                    <th>Método</th>
                    <th>Municipio</th>
                    <th>Acciones</th>
                </tr>
            `;
        }

        // Verificar si es una recarga
        const isRefresh = modal.style.display === 'block';

        tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;">Cargando...</td></tr>';
        totalSpan.innerText = '$0';
        if (cashSpan) cashSpan.innerText = '$0';
        if (transferSpan) transferSpan.innerText = '$0';
        modal.style.display = 'block';

        // Solo resetear bandera y configurar interceptor si es apertura inicial
        if (!isRefresh) {
            pendingReportUpdate = false;
            setupModalCloseInterceptor(modal, 'payments');
        }

        const collection = mode === 'daily' ? 'reports' : 'wreports';
        currentCreditsContext = { reportId, userName, dateStr, mode, collection };
        currentReportContext = currentCreditsContext; // Sync global context

        try {
            // Calcular Rango de Fechas
            const reportDate = new Date(dateStr);
            let startDate, endDate;

            if (mode === 'weekly') {
                const end = new Date(reportDate);
                end.setHours(23, 59, 59, 999);
                const start = new Date(reportDate);
                start.setDate(start.getDate() - 6);
                start.setHours(0, 0, 0, 0);
                startDate = start.toISOString();
                endDate = end.toISOString();
            } else {
                const start = new Date(reportDate);
                start.setHours(0, 0, 0, 0);
                const end = new Date(reportDate);
                end.setHours(23, 59, 59, 999);
                startDate = start.toISOString();
                endDate = end.toISOString();
            }

            // Consultar Pagos
            const { data: payments, error } = await sbClient
                .from('payments')
                .select('*')
                .eq('user_name', userName)
                .gte('created_at', startDate)
                .lte('created_at', endDate);

            if (error) throw error;
            
            const debtorNumbers = [...new Set(payments.map(p => p.debtor_number).filter(Boolean))];
            let debtorsMap = new Map();
            if (debtorNumbers.length > 0) {
                const { data: debtors } = await sbClient
                    .from('debtors')
                    .select('debtor_number, payment_term')
                    .in('debtor_number', debtorNumbers);
                
                if (debtors) {
                    debtors.forEach(d => debtorsMap.set(d.debtor_number, d.payment_term));
                }
            }

            // Filtrar por Payment Term
            const targetTerm = mode === 'weekly' ? 'SEMANAL' : 'DIARIO';
            const filteredPayments = payments.filter(p => {
                const term = debtorsMap.get(p.debtor_number);
                if (!term) return false;
                if (Array.isArray(term)) {
                    return term.some(t => String(t).toUpperCase() === targetTerm);
                }
                return String(term).toUpperCase() === targetTerm;
            });

            // Renderizar Tabla
            tbody.innerHTML = '';
            let total = 0;
            let totalCash = 0;
            let totalTransfer = 0;
            
            if (filteredPayments.length === 0) {
                tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;">No se encontraron cobros.</td></tr>';
            } else {
                filteredPayments.forEach(p => {
                    const amount = parseFloat(p.payment_amount) || 0;
                    total += amount;
                    if (p.payment_method === 'Transferencia') {
                        totalTransfer += amount;
                    } else {
                        totalCash += amount;
                    }

                    // Corrección de orden de columnas: Fecha primero
                    const dateDisplay = p.payment_date || new Date(p.created_at).toLocaleDateString();

                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${dateDisplay}</td>
                        <td>${p.debtor_name || ''}</td>
                        <td>${p.cedula || ''}</td>
                        <td>
                            <span class="view-mode">$ ${amount.toLocaleString()}</span>
                            <input type="number" class="edit-mode edit-payment-val" value="${amount}" style="display:none; width: 100px;">
                        </td>
                        <td>
                            <span class="view-mode">${p.payment_method || 'Efectivo'}</span>
                            <select class="edit-mode edit-payment-method" style="display:none;">
                                <option value="Efectivo" ${p.payment_method !== 'Transferencia' ? 'selected' : ''}>Efectivo</option>
                                <option value="Transferencia" ${p.payment_method === 'Transferencia' ? 'selected' : ''}>Transferencia</option>
                            </select>
                        </td>
                        <td>${p.municipality || ''}</td>
                        <td>
                            <button class="btn-action-small btn-primary view-mode" onclick="toggleEditPaymentDetail(this)"><i class="fas fa-pencil-alt"></i></button>
                            <div class="edit-mode" style="display:none; gap:5px;">
                                <button class="btn-action-small btn-success" onclick="savePaymentDetail('${p.created_at}', this)"><i class="fas fa-save"></i></button>
                                <button class="btn-action-small btn-secondary" onclick="toggleEditPaymentDetail(this)"><i class="fas fa-times"></i></button>
                            </div>
                        </td>
                    `;
                    tbody.appendChild(row);
                });
            }
            totalSpan.innerText = '$ ' + total.toLocaleString('es-CO');
            if (cashSpan) cashSpan.innerText = '$ ' + totalCash.toLocaleString('es-CO');
            if (transferSpan) transferSpan.innerText = '$ ' + totalTransfer.toLocaleString('es-CO');

        } catch (e) {
            console.error(e);
            tbody.innerHTML = `<tr><td colspan="7" style="color:red;">Error: ${e.message}</td></tr>`;
        }
    };

    // Alternar modo edición en detalle de cobros
    window.toggleEditPaymentDetail = (btn) => {
        const row = btn.closest('tr');
        const viewElements = row.querySelectorAll('.view-mode');
        const editElements = row.querySelectorAll('.edit-mode');
        
        if (editElements[0].style.display === 'none') {
            viewElements.forEach(el => el.style.display = 'none');
            editElements.forEach(el => el.style.display = '');
        } else {
            viewElements.forEach(el => el.style.display = '');
            editElements.forEach(el => el.style.display = 'none');
        }
    };

    // Guardar cambios en detalle de cobro
    window.savePaymentDetail = async (paymentCreatedAt, btn) => {
        const row = btn.closest('tr');
        const newAmount = parseFloat(row.querySelector('.edit-payment-val').value) || 0;
        const newMethod = row.querySelector('.edit-payment-method').value;
        
        try {
            // 1. Actualizar el pago en Base de Datos
            // Usamos created_at como identificador ya que id no existe
            const { error: updateError } = await sbClient
                .from('payments')
                .update({ payment_amount: newAmount, payment_method: newMethod })
                .eq('created_at', paymentCreatedAt);

            if (updateError) throw updateError;

            // 2. Marcar cambio pendiente y refrescar lista
            pendingReportUpdate = true;
            
            const { reportId, collection, userName, dateStr, mode } = currentCreditsContext;
            openReportPaymentsDetails(reportId, userName, dateStr, mode);

        } catch (e) {
            alert('Error: ' + e.message);
        }
    };

    // --- Lógica de Intercepción de Cierre y Modal Obligatorio ---

    function setupModalCloseInterceptor(modal, type) {
        // Buscar TODOS los botones en el modal
        const buttons = modal.querySelectorAll('button');
        
        buttons.forEach(btn => {
            const text = btn.innerText.trim().toLowerCase();
            const onclick = btn.getAttribute('onclick') || '';
            // Identificar botones de cierre (por texto o por acción de ocultar)
            // Excluir botones de acción (guardar, descargar, editar, etc.)
            const isActionBtn = text.includes('guardar') || text.includes('descargar') || btn.classList.contains('btn-success') || btn.classList.contains('btn-action-small') || btn.querySelector('i');
            
            if (!isActionBtn && (text === 'cerrar' || text === 'cancelar' || onclick.includes("display='none'") || onclick.includes('display = \'none\''))) {
                
                btn.innerText = "Cerrar"; // Renombrar a Cerrar
                
                // Reemplazar nodo para eliminar eventos inline
                const newBtn = btn.cloneNode(true);
                newBtn.removeAttribute('onclick'); 
                btn.parentNode.replaceChild(newBtn, btn);
                
                // Asignar nuevo evento de cierre controlado
                newBtn.onclick = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleDetailModalClose(modal, type);
                };
            }
        });

        // Interceptar clic en el fondo (backdrop)
        modal.onclick = (e) => {
            if (e.target === modal) {
                handleDetailModalClose(modal, type);
            }
        };
    }

    async function handleDetailModalClose(modal, type) {
        // Si no hay cambios pendientes, simplemente cerrar el modal.
        if (!pendingReportUpdate) {
            modal.style.display = 'none';
            return;
        }

        // Calcular y mostrar modal obligatorio siempre al cerrar
        try {
            const { reportId, collection, userName, dateStr, mode } = currentReportContext;
            const reportCollection = mode === 'daily' ? 'reports' : 'wreports';
            
            // 1. Calcular nuevos totales según el tipo
            let newTotal = 0;
            
            if (type === 'credits') {
                // Calcular Créditos (Misma lógica de rango)
                const reportDate = new Date(dateStr);
                let startDate, endDate;
                if (mode === 'weekly') {
                    const end = new Date(reportDate); end.setHours(23, 59, 59, 999);
                    const start = new Date(reportDate); start.setDate(start.getDate() - 6); start.setHours(0, 0, 0, 0);
                    startDate = start.toISOString(); endDate = end.toISOString();
                } else {
                    const start = new Date(reportDate); start.setHours(0, 0, 0, 0);
                    const end = new Date(reportDate); end.setHours(23, 59, 59, 999);
                    startDate = start.toISOString(); endDate = end.toISOString();
                }

                const { data: allCredits } = await sbClient.from('debtors').select('sale_value, payment_term').eq('asesor_name', userName).gte('created_at', startDate).lte('created_at', endDate);
                const targetTerm = mode === 'weekly' ? 'SEMANAL' : 'DIARIO';
                newTotal = (allCredits || []).reduce((sum, c) => {
                    const term = c.payment_term;
                    let match = false;
                    if (Array.isArray(term)) match = term.some(t => String(t).toUpperCase() === targetTerm);
                    else match = String(term) && String(term).toUpperCase() === targetTerm;
                    return match ? sum + (parseFloat(c.sale_value) || 0) : sum;
                }, 0);

            } else if (type === 'payments') {
                // Calcular Cobros
                const { data: allPayments } = await getAllPaymentsForReport(userName, dateStr, mode);
                newTotal = (allPayments || []).reduce((sum, p) => sum + (parseFloat(p.payment_amount) || 0), 0);
            } else if (type === 'expenses') {
                // Calcular Gastos
                const expCollection = mode === 'daily' ? 'expenses' : 'wexpenses';
                const datePart = dateStr.split('T')[0];
                
                const { data: expenses } = await sbClient.from(expCollection)
                    .select('total_expenses')
                    .eq('user_name', userName)
                    .gte('created_at', datePart + 'T00:00:00')
                    .lte('created_at', datePart + 'T23:59:59');
                    
                newTotal = (expenses || []).reduce((sum, e) => sum + (parseFloat(e.total_expenses)||0), 0);
            }

            // 2. Calcular Base Final
            const { data: report } = await sbClient.from(reportCollection).select('*').eq('report_number', reportId).single();
            if (!report) throw new Error("Reporte no encontrado");

            const initialBase = parseFloat(report.initial_base) || 0;
            let payments = parseFloat(report.payments_report) || 0;
            let credits = parseFloat(report.credits_report) || 0;
            let expenses = parseFloat(report.expense_report) || 0;

            if (type === 'credits') credits = newTotal;
            if (type === 'payments') payments = newTotal;
            if (type === 'expenses') expenses = newTotal;

            const finalBase = (payments + initialBase) - (credits + expenses);

            // 3. Mostrar Modal Obligatorio
            const typeLabel = type === 'credits' ? 'Créditos' : (type === 'payments' ? 'Cobros' : 'Gastos');
            showMandatoryUpdateModal(typeLabel, newTotal, finalBase, async () => {
                const updatePayload = { final_base: finalBase };
                if (type === 'credits') updatePayload.credits_report = newTotal;
                if (type === 'payments') updatePayload.payments_report = newTotal;
                if (type === 'expenses') updatePayload.expense_report = newTotal;
                
                if (report.og_final_base !== undefined && report.og_final_base !== null) {
                    updatePayload.og_final_base = finalBase;
                }

                await sbClient.from(reportCollection).update(updatePayload).eq('report_number', reportId);
                
                alert('Reporte actualizado correctamente.');
                pendingReportUpdate = false;
                modal.style.display = 'none'; // Cerrar detalle
                
                if (document.getElementById('pg-report-box').style.display === 'block') generatePgReport();
                if (document.getElementById('gn-report-box').style.display === 'block') generateGnReport();
            });

        } catch (e) {
            alert("Error calculando actualización: " + e.message);
            modal.style.display = 'none'; // Fallback close
        }
    }

    function showMandatoryUpdateModal(type, newValue, finalBaseValue, onConfirm) {
        const modalId = 'mandatory-update-modal';
        let modal = document.getElementById(modalId);
        
        if (!modal) {
            modal = document.createElement('div');
            modal.id = modalId;
            modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:10000;display:flex;justify-content:center;align-items:center;backdrop-filter:blur(5px);';
            document.body.appendChild(modal);
        }
        
        const userName = currentReportContext ? currentReportContext.userName : 'USUARIO';
        const mode = currentReportContext ? currentReportContext.mode : 'daily';
        const nextPeriod = mode === 'daily' ? 'dia' : 'semana';

        let title = `ACTUALIZAR DATOS DE CIERRE DE ${userName}`;
        let bodyHtml = '';

        const isInjection = type.toLowerCase().includes('inyección');
        const isFinalBaseEdit = type.toLowerCase().includes('edición base final');

        if (isInjection) {
            title = `PROXIMA INYECCION A ${userName.toUpperCase()}`;
            bodyHtml = `
                <div style="margin:20px 0;font-size:1.1em;background:#f4f7f9;padding:15px;border-radius:5px;text-align:left;">
                    <div style="margin-bottom:10px;display:flex;justify-content:space-between;">
                        <strong>Nueva base final:</strong> 
                        <span style="color:#28a745;font-weight:bold;">$ ${newValue.toLocaleString('es-CO')}</span>
                    </div>
                </div>
                <p style="font-size:0.9em; color:#6c757d; margin-top:15px; text-align: left;">Recuerde que la inyeccion se le mostrara a el como base inicial el proximo ${nextPeriod}.</p>
            `;
        } else if (isFinalBaseEdit) {
            bodyHtml = `
                <div style="margin:20px 0;font-size:1.1em;background:#f4f7f9;padding:15px;border-radius:5px;text-align:left;">
                    <div style="margin-bottom:10px;display:flex;justify-content:space-between;">
                        <strong>Nueva base final:</strong> 
                        <span style="color:#28a745;font-weight:bold;">$ ${newValue.toLocaleString('es-CO')}</span>
                    </div>
                </div>
            `;
        } else {
            bodyHtml = `
                <p style="font-size:1.1em; text-align:left; margin-bottom: 5px;">Cambios a realizar en el cierre:</p>
                <div style="margin:20px 0;font-size:1.1em;background:#f4f7f9;padding:15px;border-radius:5px;text-align:left;">
                    <div style="margin-bottom:10px;display:flex;justify-content:space-between;">
                        <strong>${type}:</strong> 
                        <span style="color:#28a745;font-weight:bold;">$ ${newValue.toLocaleString('es-CO')}</span>
                    </div>
                    <div style="display:flex;justify-content:space-between;">
                        <strong>Base final nueva calculada:</strong> 
                        <span style="color:#16233c;font-weight:bold;">$ ${finalBaseValue.toLocaleString('es-CO')}</span>
                    </div>
                </div>
            `;
        }

        modal.innerHTML = `
            <div style="background:white;padding:30px;border-radius:8px;text-align:center;max-width:500px;box-shadow:0 0 20px rgba(0,0,0,0.5);border: 2px solid #16233c;">
                <h3 style="color:#16233c;margin-top:0;text-transform:uppercase;">${title}</h3>
                ${bodyHtml}
                <button id="btn-confirm-mandatory-update" class="btn btn-primary" style="width:100%;font-size:1.1em;padding:12px;">Aceptar</button>
            </div>
        `;
        
        const btn = document.getElementById('btn-confirm-mandatory-update');
        btn.onclick = async () => {
            btn.innerText = "Procesando...";
            btn.disabled = true;
            await onConfirm();
            modal.style.display = 'none';
        };
        
        modal.style.display = 'flex';
    }

    async function getAllPaymentsForReport(userName, dateStr, mode) {
        const reportDate = new Date(dateStr);
        let startDate, endDate;

        if (mode === 'weekly') {
            const end = new Date(reportDate); end.setHours(23, 59, 59, 999);
            const start = new Date(reportDate); start.setDate(start.getDate() - 6); start.setHours(0, 0, 0, 0);
            startDate = start.toISOString(); endDate = end.toISOString();
        } else {
            const start = new Date(reportDate); start.setHours(0, 0, 0, 0);
            const end = new Date(reportDate); end.setHours(23, 59, 59, 999);
            startDate = start.toISOString(); endDate = end.toISOString();
        }

        const { data: payments, error } = await sbClient.from('payments').select('payment_amount, debtor_number').eq('user_name', userName).gte('created_at', startDate).lte('created_at', endDate);
        if (error) return { data: [], error };

        const debtorNumbers = [...new Set(payments.map(p => p.debtor_number).filter(Boolean))];
        let debtorsMap = new Map();
        if (debtorNumbers.length > 0) {
            const { data: debtors } = await sbClient.from('debtors').select('debtor_number, payment_term').in('debtor_number', debtorNumbers);
            if (debtors) debtors.forEach(d => debtorsMap.set(d.debtor_number, d.payment_term));
        }

        const targetTerm = mode === 'weekly' ? 'SEMANAL' : 'DIARIO';
        const filteredPayments = payments.filter(p => {
            const term = debtorsMap.get(p.debtor_number);
            if (!term) return false;
            if (Array.isArray(term)) return term.some(t => String(t).toUpperCase() === targetTerm);
            return String(term).toUpperCase() === targetTerm;
        });

        return { data: filteredPayments, error: null };
    }

    btnDownloadReportPaymentsDetails.addEventListener('click', async () => {
        alert('Descarga en reconstrucción.');
    });

    btnDownloadGn.addEventListener('click', () => {
        alert('Descarga en reconstrucción.');
    });

    // Inicializar la primera vista de reporte
    btnReportPg.click();
});