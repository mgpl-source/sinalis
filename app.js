"use strict";
const STORAGE_KEY = 'sinalis-demo-v1';
const PATHS = {
    surdo: [
        { id: 'surdo-inicio', title: 'Início', subtitle: 'Sua jornada de aprendizagem', icon: '🏠' },
        { id: 'trilhas', title: 'Trilhas de aprendizagem', subtitle: 'Notícias, técnicas e experiências', icon: '📚' },
        { id: 'modulos', title: 'Módulos e aulas', subtitle: 'Lições e exercícios em Libras', icon: '🎬' },
        { id: 'desafios', title: 'Desafios', subtitle: 'Pratique e conquiste pontos', icon: '🏆' },
        { id: 'comunicacao', title: 'Comunicação', subtitle: 'Reaja, responda e converse', icon: '💬' },
        { id: 'carreira', title: 'Trabalho e carreira', subtitle: 'Prepare-se para novas oportunidades', icon: '💼' },
        { id: 'qualificacao', title: 'Trilhas de qualificação profissional', subtitle: 'Amplie seus conhecimentos', icon: '🎓' },
        { id: 'leitura', title: 'Leitura e cultura', subtitle: 'Atividades e eventos acessíveis', icon: '📖' },
        { id: 'bilingue', title: 'Apoio bilíngue', subtitle: 'Libras e outras línguas', icon: '🌐' },
        { id: 'progresso', title: 'Meu progresso', subtitle: 'Seus resultados e conquistas', icon: '⭐' },
        { id: 'perfil', title: 'Meu perfil', subtitle: 'Suas preferências', icon: '👤' }
    ],
    ouvinte: [
        { id: 'ouvinte-inicio', title: 'Início', subtitle: 'Olá! Vamos aprender?', icon: '🏠' },
        { id: 'aprender', title: 'Aprenda Libras', subtitle: 'Sinais e expressões', icon: '🤟' },
        { id: 'modulos', title: 'Módulos e aulas', subtitle: 'Lições, técnicas e exercícios', icon: '🎬' },
        { id: 'desafios', title: 'Desafios', subtitle: 'Quiz diário', icon: '🏆' },
        { id: 'comunique', title: 'Comunique-se', subtitle: 'Texto, voz e sinais', icon: '💬' },
        { id: 'inclusao', title: 'Apoie a inclusão', subtitle: 'Boas práticas e acessibilidade', icon: '🌱' },
        { id: 'idiomas', title: 'Libras + Idiomas', subtitle: 'Apoio bilíngue', icon: '🌎' },
        { id: 'comunidade', title: 'Comunidade', subtitle: 'Eventos e conexões', icon: '👥' },
        { id: 'progresso', title: 'Meu progresso', subtitle: 'Favoritos e histórico', icon: '⭐' },
        { id: 'perfil', title: 'Meu perfil', subtitle: 'Programa e configurações', icon: '👤' }
    ],
    professor: [
        { id: 'professor-inicio', title: 'Área do professor', subtitle: 'Turmas e visão geral', icon: '🏫' },
        { id: 'criar-atividade', title: 'Criar atividade', subtitle: 'Conteúdo acessível', icon: '📝' },
        { id: 'acompanhar', title: 'Acompanhar alunos', subtitle: 'Progresso e feedback', icon: '👥' },
        { id: 'biblioteca', title: 'Biblioteca pedagógica', subtitle: 'Planos e materiais', icon: '📁' },
        { id: 'docentes', title: 'Comunidade docente', subtitle: 'Troca de experiências', icon: '💬' },
        { id: 'configuracoes', title: 'Configurações', subtitle: 'Preferências da conta', icon: '⚙️' }
    ]
};
const COMMON_SCREENS = [
    { id: 'suporte', title: 'Suporte', subtitle: 'Fale conosco', icon: '🎧' },
    { id: 'notificacoes', title: 'Notificações', subtitle: 'Novidades e avisos', icon: '🔔' },
    { id: 'seguranca', title: 'Segurança', subtitle: 'Dados protegidos', icon: '🔐' },
    { id: 'termos', title: 'Termos e privacidade', subtitle: 'Transparência', icon: '📄' },
    { id: 'sair', title: 'Sair', subtitle: 'Até logo!', icon: '👋' }
];
const LESSONS = [
    { id: 'ola', name: 'Olá', icon: '👋', category: 'Cumprimentos', translation: 'Olá! Como vai você?' },
    { id: 'obrigado', name: 'Obrigado', icon: '🙏', category: 'Cumprimentos', translation: 'Obrigado pela ajuda.' },
    { id: 'familia', name: 'Família', icon: '👨‍👩‍👧', category: 'Família', translation: 'Esta é minha família.' },
    { id: 'agua', name: 'Água', icon: '💧', category: 'Dia a dia', translation: 'Eu gostaria de água.' },
    { id: 'amigo', name: 'Amigo', icon: '🤝', category: 'Família', translation: 'Você é meu amigo.' },
    { id: 'comida', name: 'Comida', icon: '🍞', category: 'Dia a dia', translation: 'A comida está pronta.' },
    { id: 'casa', name: 'Casa', icon: '🏠', category: 'Dia a dia', translation: 'Estou em casa.' },
    { id: 'carro', name: 'Carro', icon: '🚗', category: 'Dia a dia', translation: 'O carro chegou.' },
    { id: 'arvore', name: 'Árvore', icon: '🌳', category: 'Natureza', translation: 'Uma árvore verde.' },
    { id: 'maca', name: 'Maçã', icon: '🍎', category: 'Alimentos', translation: 'Eu gosto de maçã.' },
    { id: 'trabalho', name: 'Trabalho', icon: '💼', category: 'Profissional', translation: 'Bom trabalho!' },
    { id: 'reuniao', name: 'Reunião', icon: '🗓️', category: 'Profissional', translation: 'Vamos começar a reunião.' }
];
const MODULES = [
    { id: 'cumprimentos', name: 'Primeiros sinais', description: 'Cumprimentos', icon: '👋', count: 8, done: 3 },
    { id: 'numeros', name: 'Números e datas', description: 'Números e datas', icon: '🔢', count: 10, done: 4 },
    { id: 'familia', name: 'Família e amigos', description: 'Relações e pessoas', icon: '👨‍👩‍👧', count: 10, done: 1 },
    { id: 'trabalho', name: 'Trabalho e escola', description: 'Ambientes profissionais', icon: '💼', count: 12, done: 0 },
    { id: 'alimentos', name: 'Comidas e objetos', description: 'Vocabulário cotidiano', icon: '🍎', count: 9, done: 0 },
    { id: 'cultura', name: 'Cultura e comunidade surda', description: 'Contextos e histórias', icon: '📚', count: 7, done: 0 }
];
const STUDENTS = [
    { name: 'Ana Lima', progress: 85, status: 'Em dia' },
    { name: 'Bruno Reis', progress: 38, status: 'Atenção' },
    { name: 'Carla Souza', progress: 98, status: 'Concluído' },
    { name: 'Davi Melo', progress: 62, status: 'Em dia' },
    { name: 'Eva Costa', progress: 30, status: 'Atenção' },
    { name: 'Fábio Dias', progress: 72, status: 'Em dia' }
];
const CLASS_GROUPS = [
    { name: 'Turma 5º A', count: 14, progress: 82, status: 'Em dia' },
    { name: 'Turma 6º B', count: 16, progress: 42, status: '2 em atenção' },
    { name: 'Turma 7º C', count: 12, progress: 30, status: 'Novo' }
];
const QUIZ = [
    { question: 'O que significa este sinal?', emoji: '🙏', choices: ['Obrigado', 'Por favor', 'Desculpa', 'Bom dia'], answer: 0 },
    { question: 'Qual é o significado deste sinal?', emoji: '👋', choices: ['Amigo', 'Olá', 'Água', 'Trabalho'], answer: 1 },
    { question: 'Que palavra corresponde ao sinal?', emoji: '🍎', choices: ['Carro', 'Árvore', 'Maçã', 'Casa'], answer: 2 }
];
const START_ROUTE = { surdo: 'surdo-inicio', ouvinte: 'ouvinte-inicio', professor: 'professor-inicio' };
const FIRST_SCREEN = { trilhas: 'surdo-inicio', aprender: 'ouvinte-inicio', 'criar-atividade': 'professor-inicio' };
const initial = (() => {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    }
    catch {
        return {};
    }
})();
function Mascot(props) {
    return React.createElement("img", { className: 'mascot ' + (props.size || 'sm') + ' ' + (props.className || ''), src: "./assets/mascote-sinalis.png", alt: "Vers\u00E3o simplificada do mascote saguim do Sinalis" });
}
function FullMascot(props) {
    return React.createElement("img", { className: 'full-mascot ' + (props.size || 'md') + ' ' + (props.className || ''), src: "./assets/mascote-apresentacao.png", alt: "Mascote completo do Sinalis" });
}
function Bar(props) {
    return React.createElement("div", { className: 'bar ' + (props.className || ''), role: "progressbar", "aria-valuenow": props.value, "aria-valuemin": 0, "aria-valuemax": 100 },
        React.createElement("span", { style: { width: Math.max(0, Math.min(100, props.value)) + '%' } }));
}
function Logo(props) {
    return React.createElement("div", { className: "logo" },
        React.createElement(Mascot, { size: "tiny" }),
        React.createElement("span", null, "Sinalis"),
        !props.compact && React.createElement("small", null, "LIBRAS PARA TODO MUNDO"));
}
class SinalisApp extends React.Component {
    constructor(props) {
        super(props);
        this.syncHash = () => { this.setState({ route: decodeURIComponent(location.hash.replace(/^#\/?/, '')) || 'boas-vindas', search: '', tab: 'Todos', showSidebar: false }); };
        this.save = (patch) => {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...initial, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'), ...patch }));
            }
            catch { }
        };
        this.go = (route) => {
            this.setState({ route, search: '', tab: 'Todos', answer: -1, quizChecked: false, showSidebar: false });
            location.hash = '/' + route;
            const body = document.querySelector('.phone-body');
            if (body)
                body.scrollTop = 0;
        };
        this.toast = (message) => { this.setState({ message }); setTimeout(() => this.setState({ message: '' }), 3200); };
        this.choose = (role) => { this.setState({ role }); this.save({ role }); this.go(START_ROUTE[role]); };
        this.submitAuth = (mode) => {
            const { formName, formEmail, formPassword } = this.state;
            if (mode === 'cadastro' && !formName.trim()) {
                this.toast('Informe seu nome para continuar.');
                return;
            }
            if (!/^\S+@\S+\.\S+$/.test(formEmail)) {
                this.toast('Digite um e-mail válido.');
                return;
            }
            if (formPassword.length < 6) {
                this.toast('A senha precisa ter pelo menos 6 caracteres.');
                return;
            }
            if (mode === 'entrar' && initial.email && formEmail.toLowerCase() !== initial.email.toLowerCase()) {
                this.toast('E-mail diferente do cadastro deste navegador.');
                return;
            }
            const name = mode === 'cadastro' ? formName.trim() : (this.state.name || formEmail.split('@')[0]);
            this.setState({ name, email: formEmail, password: '' });
            this.save({ name, email: formEmail });
            this.go('escolher-perfil');
        };
        this.finishLesson = () => {
            const id = this.state.currentLesson || 'ola';
            const completed = this.state.completed.includes(id) ? this.state.completed : [...this.state.completed, id];
            const points = this.state.points + (this.state.completed.includes(id) ? 0 : 20);
            this.setState({ completed, points });
            this.save({ completed, points });
            this.toast('Lição concluída! +20 pontos 🎉');
            this.go('modulos');
        };
        this.toggleFavorite = (id) => {
            const favorites = this.state.favorites.includes(id) ? this.state.favorites.filter(x => x !== id) : [...this.state.favorites, id];
            this.setState({ favorites });
            this.save({ favorites });
        };
        this.togglePref = (id) => {
            const options = { ...this.state.options, [id]: !this.state.options[id] };
            this.setState({ options });
            this.save({ options });
        };
        this.navItems = () => this.state.role === 'professor'
            ? [PATHS.professor[0], PATHS.professor[1], PATHS.professor[2], PATHS.professor[3], PATHS.professor[4]]
            : [PATHS[this.state.role][0], PATHS[this.state.role][1], { id: 'comunidade', icon: '👥', title: 'Comunidade', subtitle: '' }, { id: 'progresso', icon: '⭐', title: 'Progresso', subtitle: '' }, { id: 'perfil', icon: '👤', title: 'Perfil', subtitle: '' }];
        this.isNavActive = (id) => this.state.route === id || (id === 'comunidade' && ['comunicacao', 'comunique', 'docentes'].includes(this.state.route));
        this.getScreen = () => [...PATHS.surdo, ...PATHS.ouvinte, ...PATHS.professor, ...COMMON_SCREENS].find(x => x.id === this.state.route);
        this.header = () => {
            const { route } = this.state;
            const special = ['boas-vindas', 'cadastro', 'entrar', 'escolher-perfil', 'licao', 'sair'];
            if (special.includes(route))
                return null;
            const s = this.getScreen() || { id: '', title: 'Sinalis', subtitle: 'Libras para todo mundo', icon: '🤟' };
            return React.createElement("header", { className: "screen-header" },
                React.createElement("div", { className: "header-left" },
                    React.createElement(Mascot, { size: "tiny" }),
                    React.createElement("div", null,
                        React.createElement("h1", null, s.title),
                        React.createElement("p", null, s.subtitle))),
                React.createElement("button", { className: "icon-button", title: "Notifica\u00E7\u00F5es", "aria-label": "Abrir notifica\u00E7\u00F5es", onClick: () => this.go('notificacoes') }, "\uD83D\uDD14"));
        };
        this.bottomNav = () => {
            if (['boas-vindas', 'cadastro', 'entrar', 'escolher-perfil', 'licao', 'sair'].includes(this.state.route))
                return null;
            return React.createElement("nav", { className: "bottom-nav", "aria-label": "Navega\u00E7\u00E3o principal" }, this.navItems().map(n => React.createElement("button", { key: n.id, className: 'nav-link ' + (this.isNavActive(n.id) ? 'active' : ''), onClick: () => this.go(n.id) },
                React.createElement("span", null, n.icon),
                React.createElement("small", null, n.id === 'surdo-inicio' || n.id === 'ouvinte-inicio' || n.id === 'professor-inicio' ? 'Início' : n.title.split(' ')[0]))));
        };
        this.btn = (title, fn, variant = 'primary', extra = '') => React.createElement("button", { className: 'btn ' + variant + ' ' + extra, onClick: fn }, title);
        this.pill = (title, selected, onClick) => React.createElement("button", { className: 'pill ' + (selected ? 'selected' : ''), key: title, onClick: onClick }, title);
        this.section = (title, detail) => React.createElement("div", { className: "section-row" },
            React.createElement("h2", null, title),
            detail && React.createElement("span", { className: "muted" }, detail));
        this.tile = (icon, title, subtitle, route, tone = '') => React.createElement("button", { key: title, className: 'tile ' + tone, onClick: () => this.go(route) },
            React.createElement("span", { className: "tile-icon" }, icon),
            React.createElement("strong", null, title),
            React.createElement("small", null, subtitle));
        this.listRow = (icon, title, desc, onClick, right) => React.createElement("button", { className: "list-row", onClick: onClick, key: title },
            React.createElement("span", { className: "row-icon" }, icon),
            React.createElement("span", { className: "row-text" },
                React.createElement("strong", null, title),
                desc && React.createElement("small", null, desc)),
            React.createElement("span", { className: "row-right" }, right || '›'));
        this.welcome = () => React.createElement("div", { className: "welcome page-pad" },
            React.createElement("div", { className: "welcome-top" },
                React.createElement(Logo, null)),
            React.createElement("div", { className: "welcome-center" },
                React.createElement("div", { className: "welcome-illustration" },
                    React.createElement("div", { className: "halo halo-a" }),
                    React.createElement("div", { className: "halo halo-b" }),
                    React.createElement(FullMascot, { size: "lg" }),
                    React.createElement("span", { className: "sparkle sp1" }, "\u2726"),
                    React.createElement("span", { className: "sparkle sp2" }, "\u2726")),
                React.createElement("span", { className: "eyebrow" }, "BEM-VINDO AO SINALIS"),
                React.createElement("h1", null,
                    "Libras \u00E9 para ",
                    React.createElement("em", null, "todo mundo.")),
                React.createElement("p", null, "Aprenda, ensine e se conecte. Um jeito acolhedor de construir uma comunica\u00E7\u00E3o mais inclusiva.")),
            React.createElement("div", { className: "welcome-actions" },
                this.btn('Criar minha conta  →', () => this.go('cadastro')),
                this.btn('Já tenho uma conta', () => this.go('entrar'), 'outline'),
                React.createElement("button", { className: "text-link", onClick: () => this.go('escolher-perfil') }, "Explorar o prot\u00F3tipo sem cadastro")));
        this.auth = (mode) => React.createElement("div", { className: "page-pad auth-page" },
            React.createElement("button", { className: "back", onClick: () => this.go('boas-vindas') }, "\u2190 Voltar"),
            React.createElement("div", { className: "auth-brand" },
                React.createElement(FullMascot, { size: "md" }),
                React.createElement("h1", null, mode === 'cadastro' ? 'Crie sua conta' : 'Que bom ter você de volta!'),
                React.createElement("p", null, mode === 'cadastro' ? 'Sua jornada com Libras começa aqui.' : 'Entre para continuar aprendendo.')),
            React.createElement("form", { className: "auth-form", onSubmit: e => { e.preventDefault(); this.submitAuth(mode); } },
                mode === 'cadastro' && React.createElement("label", null,
                    "Seu nome",
                    React.createElement("input", { placeholder: "Como podemos chamar voc\u00EA?", required: true, value: this.state.formName, onChange: e => this.setState({ formName: e.target.value }) })),
                React.createElement("label", null,
                    "E-mail",
                    React.createElement("input", { type: "email", autoComplete: "email", placeholder: "nome@exemplo.com", required: true, value: this.state.formEmail, onChange: e => this.setState({ formEmail: e.target.value }) })),
                React.createElement("label", null,
                    "Senha",
                    React.createElement("input", { type: "password", autoComplete: mode === 'cadastro' ? 'new-password' : 'current-password', minLength: 6, required: true, placeholder: "M\u00EDnimo de 6 caracteres", value: this.state.formPassword, onChange: e => this.setState({ formPassword: e.target.value }) })),
                React.createElement("button", { className: "btn primary", type: "submit" }, mode === 'cadastro' ? 'Criar conta' : 'Entrar')),
            React.createElement("p", { className: "switch-auth" },
                mode === 'cadastro' ? 'Já tem uma conta?' : 'Ainda não tem conta?',
                " ",
                React.createElement("button", { onClick: () => this.go(mode === 'cadastro' ? 'entrar' : 'cadastro') }, mode === 'cadastro' ? 'Entrar' : 'Criar conta')),
            React.createElement("p", { className: "micro-note" }, "Prot\u00F3tipo: seus dados s\u00E3o armazenados somente neste navegador. N\u00E3o use uma senha real."));
        this.chooseProfile = () => React.createElement("div", { className: "page-pad choose-page" },
            React.createElement("button", { className: "back", onClick: () => this.go('boas-vindas') }, "\u2190 In\u00EDcio"),
            React.createElement("div", { className: "profile-intro" },
                React.createElement(Logo, { compact: true }),
                React.createElement("div", { className: "profile-hero" },
                    React.createElement(FullMascot, { size: "sm" })),
                React.createElement("h1", null, "Como voc\u00EA quer come\u00E7ar?"),
                React.createElement("p", null, "Primeiro, conhe\u00E7a o mascote do Sinalis. Depois, escolha uma jornada para personalizar sua experi\u00EAncia.")),
            [{ role: 'surdo', name: 'Sou adulto surdo', sub: 'Aprenda, descubra oportunidades e compartilhe experiências.', image: './assets/card-surdo.png' },
                { role: 'ouvinte', name: 'Sou ouvinte', sub: 'Aprenda Libras e ajude a construir ambientes inclusivos.', image: './assets/card-ouvinte.png' },
                { role: 'professor', name: 'Sou professor', sub: 'Crie materiais acessíveis e acompanhe suas turmas.', image: './assets/card-professor.png' }].map(p => React.createElement("button", { className: "persona image-card", key: p.role, onClick: () => this.choose(p.role), "aria-label": p.name },
                React.createElement("img", { src: p.image, alt: p.name + ': ' + p.sub }),
                React.createElement("span", { className: "sr-only" },
                    React.createElement("strong", null, p.name),
                    React.createElement("small", null, p.sub)))),
            React.createElement("p", { className: "micro-note" }, "Todas as jornadas seguem o fluxo de telas do projeto Sinalis."));
        this.dashboardOuvinte = () => React.createElement("div", { className: "page-pad dashboard" },
            React.createElement("div", { className: "banner peach" },
                React.createElement("span", { className: "big-emoji" }, "\uD83E\uDD1F"),
                React.createElement("div", { className: "flex-1" },
                    React.createElement("span", { className: "label-mini" }, "Continue aprendendo"),
                    React.createElement("h2", null, "Cumprimentos"),
                    React.createElement("small", null, "Aula 3 de 5"),
                    React.createElement(Bar, { value: 60 })),
                React.createElement("button", { className: "round-arrow", onClick: () => this.openLesson('ola') }, "\u25B6")),
            this.section('Explore seu aprendizado'),
            React.createElement("div", { className: "tile-grid" },
                this.tile('🤟', 'Aprenda Libras', 'Sinais e expressões', 'aprender', 'pale'),
                this.tile('🎬', 'Módulos e aulas', '12 módulos', 'modulos', 'mint'),
                this.tile('🏆', 'Desafios', 'Quiz do dia', 'desafios', 'mint'),
                this.tile('💬', 'Comunique-se', 'Texto, voz e sinais', 'comunique', 'pale'),
                this.tile('🌱', 'Apoie a inclusão', 'Boas práticas', 'inclusao', 'pale'),
                this.tile('🌐', 'Libras + idiomas', 'Apoio bilíngue', 'idiomas', 'mint')),
            React.createElement("div", { className: "section-space" }),
            this.listRow('👥', 'Comunidade', 'Eventos, encontros e conexões', () => this.go('comunidade')));
        this.dashboardSurdo = () => React.createElement("div", { className: "page-pad dashboard" },
            React.createElement("div", { className: "banner mint" },
                React.createElement(Mascot, { size: "md" }),
                React.createElement("div", null,
                    React.createElement("span", { className: "label-mini" }, "Seu espa\u00E7o no Sinalis"),
                    React.createElement("h2", null,
                        "Ol\u00E1, ",
                        this.state.name || 'boas-vindas',
                        "!"),
                    React.createElement("p", null, "Aprender e crescer, no seu ritmo."))),
            React.createElement("div", { className: "quick-stats" },
                React.createElement("div", null,
                    React.createElement("strong", null, "\uD83D\uDD25 5"),
                    React.createElement("small", null, "dias seguidos")),
                React.createElement("div", null,
                    React.createElement("strong", null,
                        "\u2B50 ",
                        this.state.points),
                    React.createElement("small", null, "pontos")),
                React.createElement("div", null,
                    React.createElement("strong", null, "\uD83D\uDCDA 3"),
                    React.createElement("small", null, "m\u00F3dulos"))),
            this.section('Sua jornada'),
            React.createElement("div", { className: "tile-grid" },
                this.tile('📚', 'Trilhas de aprendizagem', 'Continue de onde parou', 'trilhas', 'mint'),
                this.tile('🎬', 'Módulos e aulas', 'Aprenda com vídeos', 'modulos', 'pale'),
                this.tile('🏆', 'Desafios', 'Pratique sinais', 'desafios', 'pale'),
                this.tile('💬', 'Comunicação', 'Converse e pratique', 'comunicacao', 'mint'),
                this.tile('💼', 'Trabalho e carreira', 'Novas oportunidades', 'carreira', 'mint'),
                this.tile('🎓', 'Qualificação', 'Cursos para você', 'qualificacao', 'pale'),
                this.tile('📖', 'Leitura e cultura', 'Vivências e eventos', 'leitura', 'pale'),
                this.tile('🌐', 'Apoio bilíngue', 'Libras + idiomas', 'bilingue', 'mint')));
        this.dashboardProfessor = () => React.createElement("div", { className: "page-pad dashboard" },
            React.createElement("div", { className: "teacher-stats" },
                React.createElement("div", null,
                    React.createElement("span", null, "\uD83C\uDFEB"),
                    React.createElement("strong", null, "3"),
                    React.createElement("small", null, "Turmas")),
                React.createElement("div", null,
                    React.createElement("span", null, "\uD83D\uDC65"),
                    React.createElement("strong", null, "42"),
                    React.createElement("small", null, "Alunos")),
                React.createElement("div", null,
                    React.createElement("span", null, "\uD83D\uDCDD"),
                    React.createElement("strong", null, 8 + this.state.activities.length),
                    React.createElement("small", null, "Tarefas"))),
            React.createElement("div", { className: "white-card weekly" },
                React.createElement("h2", null, "Participa\u00E7\u00E3o na semana"),
                React.createElement("div", { className: "week-chart" }, [38, 63, 44, 90, 70, 30, 17].map((v, i) => React.createElement("div", { key: i },
                    React.createElement("span", { style: { height: v + '%', background: i === 3 ? 'var(--brown)' : '' } }),
                    React.createElement("small", null, ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'][i]))))),
            this.section('Minhas turmas'),
            React.createElement("div", { className: "stack" }, CLASS_GROUPS.map((c, i) => React.createElement("button", { key: c.name, className: "class-card", onClick: () => { this.setState({ selectedClass: c.name }); this.go('acompanhar'); } },
                React.createElement("span", { className: 'stripe ' + (i === 1 ? 'orange' : '') }),
                React.createElement("div", { className: "flex-1" },
                    React.createElement("strong", null, c.name),
                    React.createElement("small", null,
                        c.count,
                        " alunos"),
                    React.createElement(Bar, { value: c.progress })),
                React.createElement("span", { className: "status-tag" }, c.status),
                React.createElement("b", null, "\u203A")))),
            React.createElement("div", { className: "section-space" }),
            this.btn('＋ Criar uma atividade', () => this.go('criar-atividade')));
        this.pathways = () => React.createElement("div", { className: "page-pad" },
            React.createElement("div", { className: "banner mint" },
                React.createElement("span", { className: "big-emoji" }, "\uD83D\uDDFA\uFE0F"),
                React.createElement("div", null,
                    React.createElement("span", { className: "label-mini" }, "Sua trilha personalizada"),
                    React.createElement("h2", null, "Cada sinal \u00E9 uma conquista!"),
                    React.createElement("p", null, "Siga os m\u00F3dulos na ordem ou explore livremente."))),
            this.section('Trilha 1 · Comece por aqui', '3 de 5 etapas'),
            React.createElement("div", { className: "journey" }, MODULES.slice(0, 5).map((m, i) => React.createElement("button", { className: 'journey-step ' + (i === 0 ? 'current' : ''), key: m.id, onClick: () => i === 0 ? this.go('modulos') : this.openLesson(i < 3 ? 'familia' : 'trabalho') },
                React.createElement("span", null, i === 0 ? '👋' : i >= 3 ? '🔒' : m.icon),
                React.createElement("strong", null, m.name),
                React.createElement("small", null, i === 0 ? 'Continue aprendendo' : i >= 3 ? 'Próxima etapa' : 'Toque para estudar')))),
            this.btn('Ver todos os módulos  →', () => this.go('modulos')));
        this.openLesson = (id) => { this.setState({ currentLesson: id }); this.go('licao'); };
        this.modulePage = () => React.createElement("div", { className: "page-pad" },
            React.createElement("div", { className: "segmented" }, ['Módulos', 'Exercícios'].map(t => this.pill(t, (this.state.tab === 'Todos' ? 'Módulos' : this.state.tab) === t, () => this.setState({ tab: t })))),
            this.state.tab === 'Exercícios' ? React.createElement("div", null,
                this.section('Pratique o que aprendeu'),
                this.listRow('🏆', 'Quiz de sinais', '3 perguntas para testar seus conhecimentos', () => this.go('desafios')),
                this.listRow('✍️', 'Revisão de vocabulário', 'Reveja sinais e expressões', () => this.go('aprender'))) : React.createElement("div", null,
                this.section('Seus módulos', 'Aprenda no seu ritmo'),
                React.createElement("div", { className: "stack" }, MODULES.map((m, i) => React.createElement("button", { className: "module-card", key: m.id, onClick: () => this.openLesson(i === 0 ? 'ola' : i === 1 ? 'agua' : i === 2 ? 'familia' : i === 3 ? 'trabalho' : 'maca') },
                    React.createElement("span", { className: "module-icon" }, m.icon),
                    React.createElement("div", { className: "flex-1" },
                        React.createElement("span", { className: "overline" },
                            "M\u00F3dulo ",
                            i + 1),
                        React.createElement("strong", null, m.name),
                        React.createElement("small", null,
                            m.description,
                            " \u00B7 ",
                            m.done,
                            "/",
                            m.count,
                            " aulas"),
                        React.createElement(Bar, { value: m.done / m.count * 100 })),
                    React.createElement("span", { className: "row-right" }, "\u25B6"))))));
        this.lessonPage = () => {
            const lesson = LESSONS.find(l => l.id === this.state.currentLesson) || LESSONS[0];
            return React.createElement("div", { className: "page-pad lesson-page" },
                React.createElement("button", { className: "back", onClick: () => this.go('modulos') }, "\u2190 M\u00F3dulos e aulas"),
                React.createElement("div", { className: "lesson-title" },
                    React.createElement("span", { className: "overline" }, "AULA DE LIBRAS"),
                    React.createElement("h1", null, lesson.name),
                    React.createElement("p", null, "Observe o sinal, conhe\u00E7a seu significado e pratique.")),
                React.createElement("div", { className: "video-placeholder" },
                    React.createElement("div", { className: "video-label" }, "\uD83E\uDD1F Espa\u00E7o reservado para v\u00EDdeo em Libras"),
                    React.createElement(Mascot, { size: "lg" }),
                    React.createElement("button", { "aria-label": "Reproduzir v\u00EDdeo demonstrativo", className: "play-button", onClick: () => this.toast('Insira o vídeo de Libras autorizado em src/data.ts ou conecte um player.') }, "\u25B6"),
                    React.createElement("small", null, "V\u00EDdeo demonstrativo ainda n\u00E3o integrado")),
                React.createElement("div", { className: "white-card" },
                    React.createElement("h2", null, "Significado"),
                    React.createElement("p", { className: "lesson-translation" },
                        lesson.icon,
                        " ",
                        lesson.translation),
                    React.createElement("p", { className: "muted" },
                        "Categoria: ",
                        lesson.category)),
                React.createElement("div", { className: "lesson-actions" },
                    this.btn(this.state.favorites.includes(lesson.id) ? '★ Remover favorito' : '☆ Salvar favorito', () => this.toggleFavorite(lesson.id), 'outline'),
                    this.btn(this.state.completed.includes(lesson.id) ? 'Concluída ✓' : 'Concluir lição +20 pontos', this.finishLesson)));
        };
        this.learnPage = () => React.createElement("div", { className: "page-pad" },
            React.createElement("div", { className: "search" },
                React.createElement("span", null, "\u2315"),
                React.createElement("input", { "aria-label": "Buscar sinal", placeholder: "Buscar sinal ou express\u00E3o", value: this.state.search, onChange: e => this.setState({ search: e.target.value }) })),
            React.createElement("div", { className: "chips" }, ['Todos', 'Cumprimentos', 'Família', 'Dia a dia', 'Profissional'].map(t => this.pill(t, this.state.tab === t, () => this.setState({ tab: t })))),
            React.createElement("div", { className: "lesson-grid" }, LESSONS.filter(l => (this.state.tab === 'Todos' || l.category === this.state.tab) && l.name.toLowerCase().includes(this.state.search.toLowerCase())).map(l => React.createElement("button", { className: "vocab-card", key: l.id, onClick: () => this.openLesson(l.id) },
                React.createElement("span", { className: "vocab-icon" }, l.icon),
                React.createElement("strong", null, l.name),
                React.createElement("span", { className: "vocab-play" }, "\u25B6 Ver sinal")))),
            LESSONS.filter(l => l.name.toLowerCase().includes(this.state.search.toLowerCase())).length === 0 && React.createElement("p", { className: "empty" }, "N\u00E3o encontramos esse sinal nesta demonstra\u00E7\u00E3o."));
        this.quizPage = () => {
            const q = QUIZ[this.state.quizIndex];
            return React.createElement("div", { className: "page-pad quiz-page" },
                React.createElement("div", { className: "quiz-meta" },
                    React.createElement("span", null, "\uD83D\uDD25 5 dias"),
                    React.createElement("span", null,
                        "\u2B50 ",
                        this.state.points,
                        " pontos")),
                React.createElement("div", { className: "quiz-progress" },
                    React.createElement("span", null,
                        "Pergunta ",
                        this.state.quizIndex + 1,
                        " de ",
                        QUIZ.length),
                    React.createElement(Bar, { value: (this.state.quizIndex + 1) / QUIZ.length * 100 })),
                React.createElement("div", { className: "quiz-media" },
                    React.createElement("div", { className: "media-tag" }, "\uD83E\uDD1F Libras"),
                    React.createElement("span", { className: "quiz-emoji" }, q.emoji),
                    React.createElement(Mascot, { size: "sm" }),
                    React.createElement("button", { className: "round-arrow", onClick: () => this.toast('Vídeo do sinal será integrado após a validação com instrutores de Libras.') }, "\u25B6")),
                React.createElement("h2", { className: "quiz-question" }, q.question),
                React.createElement("div", { className: "choices" }, q.choices.map((a, i) => React.createElement("button", { key: a, className: 'choice ' + (this.state.answer === i ? 'chosen ' : '') + (this.state.quizChecked && i === q.answer ? 'correct' : '') + (this.state.quizChecked && this.state.answer === i && i !== q.answer ? 'incorrect' : ''), onClick: () => !this.state.quizChecked && this.setState({ answer: i }) },
                    a,
                    this.state.quizChecked && i === q.answer ? React.createElement("span", null, "\u2705") : this.state.answer === i ? React.createElement("span", null, "\u25CF") : null))),
                this.state.quizChecked && React.createElement("p", { className: 'feedback ' + (this.state.answer === q.answer ? 'good' : 'bad') }, this.state.answer === q.answer ? 'Ótimo! Você acertou.' : 'Boa tentativa! Confira a resposta destacada.'),
                this.btn(this.state.quizChecked ? (this.state.quizIndex === QUIZ.length - 1 ? 'Finalizar desafio' : 'Próxima pergunta →') : 'Verificar', () => {
                    if (!this.state.quizChecked) {
                        if (this.state.answer < 0) {
                            this.toast('Escolha uma resposta primeiro.');
                            return;
                        }
                        const pts = this.state.answer === q.answer ? 10 : 0;
                        const points = this.state.points + pts;
                        this.setState({ quizChecked: true, points });
                        this.save({ points });
                    }
                    else if (this.state.quizIndex === QUIZ.length - 1) {
                        this.setState({ quizIndex: 0, answer: -1, quizChecked: false });
                        this.toast('Desafio finalizado!');
                        this.go('progresso');
                    }
                    else
                        this.setState({ quizIndex: this.state.quizIndex + 1, answer: -1, quizChecked: false });
                }));
        };
        this.communicatePage = (deaf = false) => React.createElement("div", { className: "page-pad" },
            React.createElement("div", { className: "segmented" }, ['Texto', 'Voz', 'Sinais'].map(t => this.pill(t, (this.state.tab === 'Todos' ? 'Texto' : this.state.tab) === t, () => this.setState({ tab: t })))),
            React.createElement("div", { className: "white-card chat-box" },
                React.createElement("label", null, "Escreva uma mensagem"),
                React.createElement("textarea", { placeholder: "Bom dia! Como vai voc\u00EA?", value: this.state.chatInput, onChange: e => this.setState({ chatInput: e.target.value }) }),
                React.createElement("div", { className: "chat-actions" },
                    React.createElement("button", { onClick: () => this.toast('Entrada de áudio: conecte Web Speech API após testar permissões e acessibilidade.'), "aria-label": "Usar voz" }, "\uD83C\uDF99\uFE0F"),
                    React.createElement("button", { className: "round-arrow", onClick: () => { if (!this.state.chatInput.trim()) {
                            this.toast('Digite uma mensagem para traduzir.');
                            return;
                        } this.setState({ chatHistory: [this.state.chatInput, ...this.state.chatHistory] }); } }, "\u279C"))),
            this.section('Tradução em Libras'),
            React.createElement("div", { className: "video-placeholder short" },
                React.createElement("span", { className: "media-tag" }, "\uD83E\uDD1F Libras"),
                React.createElement(Mascot, { size: "lg" }),
                React.createElement("button", { className: "play-button", onClick: () => this.toast('Tradução automática de português para Libras requer serviço especializado; vídeo ilustrativo.') }, "\u25B6")),
            React.createElement("p", { className: "caption-note" }, "Demonstra\u00E7\u00E3o visual. Ainda n\u00E3o h\u00E1 tradu\u00E7\u00E3o autom\u00E1tica de texto ou voz para Libras."),
            this.state.chatHistory.length > 0 && React.createElement("div", { className: "white-card" },
                React.createElement("strong", null, "Textos recentes"),
                this.state.chatHistory.slice(0, 3).map((x, i) => React.createElement("p", { className: "recent-text", key: i }, x))),
            this.section(deaf ? 'Pratique a comunicação' : 'Expressões recentes'),
            React.createElement("div", { className: "chips" }, ['Olá!', 'Obrigado', 'Até logo', 'Bom dia'].map(t => React.createElement("button", { className: "pill", onClick: () => this.setState({ chatInput: t }), key: t }, t))));
        this.includePage = () => React.createElement("div", { className: "page-pad" },
            React.createElement("div", { className: "chips" }, ['Dia a dia', 'Escola', 'Trabalho'].map(t => this.pill(t, (this.state.tab === 'Todos' ? 'Dia a dia' : this.state.tab) === t, () => this.setState({ tab: t })))),
            React.createElement("div", { className: "banner mint tips" },
                React.createElement("div", null,
                    React.createElement("span", null, "\uD83D\uDCA1 Dica do dia"),
                    React.createElement("h2", null, "Olhe de frente e fale com clareza. N\u00E3o cubra a boca."))),
            this.section('Boas práticas'),
            React.createElement("div", { className: "stack" }, [['👀', 'Contato visual', 'Mantenha o olhar durante a conversa.'], ['💬', 'Use legendas', 'Inclua legendas em todos os vídeos.'], ['👄', 'Fale sem pressa', 'Evite cobrir a boca ao falar.'], ['🤟', 'Aprenda sinais', 'Comece pelos cumprimentos.'], ['🧭', 'Acessibilidade no trabalho', 'Ofereça comunicação por escrito e Libras.']].map(x => this.listRow(x[0], x[1], x[2], () => this.toast(x[2])))));
        this.languagePage = () => React.createElement("div", { className: "page-pad" },
            React.createElement("div", { className: "chips" }, ['Libras', 'EN', 'ES'].map(t => this.pill(t, this.state.language === t, () => this.setState({ language: t })))),
            React.createElement("div", { className: "language-hero" },
                React.createElement("span", null, "\uD83C\uDF4E"),
                React.createElement("h2", null, "Ma\u00E7\u00E3"),
                React.createElement("p", null, this.state.language === 'EN' ? 'Apple' : this.state.language === 'ES' ? 'Manzana' : 'Sinal em Libras: maçã')),
            React.createElement("div", { className: "lang-tiles" }, [['🤟', 'Libras', 'Maçã'], ['🇬🇧', 'Inglês', 'Apple'], ['🇪🇸', 'Espanhol', 'Manzana']].map(a => React.createElement("button", { onClick: () => this.setState({ language: a[1] === 'Inglês' ? 'EN' : a[1] === 'Espanhol' ? 'ES' : 'Libras' }), key: a[1] },
                React.createElement("span", null, a[0]),
                React.createElement("small", null, a[1]),
                React.createElement("strong", null, a[2])))),
            this.listRow('🎥', 'Pratique o sinal', 'O espaço para vídeo será preenchido com material validado.', () => this.openLesson('maca')),
            this.section('Mais palavras'),
            React.createElement("div", { className: "tile-grid" }, ['🏠', '🚗', '🐶', '🌳'].map((icon, i) => this.tile(icon, ['Casa', 'Carro', 'Cachorro', 'Árvore'][i], 'Ver sinais', 'aprender', i % 2 ? 'pale' : 'mint'))));
        this.communityPage = () => React.createElement("div", { className: "page-pad" },
            React.createElement("div", { className: "segmented" }, ['Eventos', 'Conexões'].map(t => this.pill(t, (this.state.tab === 'Todos' ? 'Eventos' : this.state.tab) === t, () => this.setState({ tab: t })))),
            this.state.tab === 'Conexões' ? React.createElement("div", null,
                React.createElement("div", { className: "banner mint" },
                    React.createElement("h2", null, "Conex\u00F5es que incluem"),
                    React.createElement("p", null, "Conhe\u00E7a pessoas e compartilhe aprendizado.")),
                ['Ana', 'Léo', 'Bia', 'Tom'].map((n, i) => this.listRow(['🧑', '👨', '👩', '🧑‍💻'][i], n, 'Participante da comunidade', () => this.toast('Perfil público de ' + n + ' em desenvolvimento.')))) :
                React.createElement("div", null,
                    this.section('Próximos eventos'),
                    [['12', 'NOV', 'Roda de conversa em Libras', 'Online'], ['20', 'NOV', 'Oficina de sinais', 'Recife'], ['28', 'NOV', 'Encontro de acessibilidade', 'Online']].map(x => React.createElement("div", { className: "event-card", key: x[2] },
                        React.createElement("div", { className: "date-box" },
                            React.createElement("b", null, x[0]),
                            React.createElement("small", null, x[1])),
                        React.createElement("div", { className: "flex-1" },
                            React.createElement("strong", null, x[2]),
                            React.createElement("small", null,
                                "\uD83D\uDCCD ",
                                x[3]),
                            React.createElement("div", { className: "avatar-row" },
                                "\uD83D\uDC35 \uD83D\uDC35 \uD83D\uDC35 ",
                                React.createElement("span", null, "+24"))),
                        this.btn('Participar', () => this.toast('Inscrição demonstrativa registrada!'), 'small')))));
        this.progressPage = () => React.createElement("div", { className: "page-pad" },
            React.createElement("div", { className: "segmented" }, ['Progresso', 'Favoritos', 'Histórico'].map(t => this.pill(t, (this.state.tab === 'Todos' ? 'Progresso' : this.state.tab) === t, () => this.setState({ tab: t })))),
            this.state.tab === 'Favoritos' ? React.createElement("div", null,
                this.section('Sinais favoritos'),
                React.createElement("div", { className: "stack" },
                    LESSONS.filter(l => this.state.favorites.includes(l.id)).map(l => this.listRow(l.icon, l.name, l.category, () => this.openLesson(l.id), '▶')),
                    this.state.favorites.length === 0 && React.createElement("div", { className: "white-card" },
                        React.createElement("p", null, "Voc\u00EA ainda n\u00E3o salvou sinais favoritos. Adicione um na p\u00E1gina Aprenda Libras."),
                        this.btn('Explorar sinais', () => this.go('aprender'))))) :
                this.state.tab === 'Histórico' ? React.createElement("div", null,
                    this.section('Seu histórico de aulas'),
                    this.state.completed.map(id => { const l = LESSONS.find(x => x.id === id); return l ? this.listRow(l.icon, l.name, 'Aula concluída', () => this.openLesson(l.id), '✓') : null; }),
                    this.state.completed.length === 0 && React.createElement("p", { className: "empty" }, "Conclua uma aula para ver seu hist\u00F3rico aqui.")) :
                    React.createElement("div", null,
                        React.createElement("div", { className: "progress-hero mint" },
                            React.createElement("div", { className: "progress-circle" },
                                Math.min(99, 68 + this.state.completed.length * 2),
                                "%"),
                            React.createElement("div", null,
                                React.createElement("h2", null, "N\u00EDvel 2"),
                                React.createElement("small", null, "Continue assim! A cada sinal, um avan\u00E7o."),
                                React.createElement("div", null, "\u2B50\u2B50\u2B50\u2B50\u2B50"))),
                        React.createElement("div", { className: "quick-stats" },
                            React.createElement("div", null,
                                React.createElement("strong", null, this.state.points),
                                React.createElement("small", null, "Pontos")),
                            React.createElement("div", null,
                                React.createElement("strong", null, this.state.completed.length),
                                React.createElement("small", null, "Aulas conclu\u00EDdas")),
                            React.createElement("div", null,
                                React.createElement("strong", null, "5"),
                                React.createElement("small", null, "Dias seguidos"))),
                        this.section('Seu ritmo de aprendizado'),
                        React.createElement("div", { className: "white-card" },
                            React.createElement("div", { className: "week-chart tall" }, [36, 76, 50, 93, 40, 62, 25].map((v, i) => React.createElement("div", { key: i },
                                React.createElement("span", { style: { height: v + '%' } }),
                                React.createElement("small", null, ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'][i]))))),
                        this.section('Conquistas'),
                        React.createElement("div", { className: "badges-row" }, ['🥇', '🏅', '🏆', '⭐'].map(e => React.createElement("div", { key: e }, e)))));
        this.careerPage = () => React.createElement("div", { className: "page-pad" },
            React.createElement("div", { className: "banner mint" },
                React.createElement("span", { className: "big-emoji" }, "\uD83D\uDCBC"),
                React.createElement("div", null,
                    React.createElement("h2", null, "Seu talento abre portas"),
                    React.createElement("p", null, "Aprenda sinais e compet\u00EAncias \u00FAteis para seu desenvolvimento profissional."))),
            this.section('Prepare-se para o mercado'),
            React.createElement("div", { className: "stack" }, [['🗣️', 'Comunicação no trabalho', 'Termos e sinais em reuniões'], ['📄', 'Currículo acessível', 'Como apresentar sua experiência'], ['🤝', 'Entrevistas inclusivas', 'Dicas para processos seletivos'], ['💻', 'Tecnologia e autonomia', 'Ferramentas digitais acessíveis']].map(x => this.listRow(x[0], x[1], x[2], () => this.go('qualificacao')))),
            this.btn('Ver trilhas de qualificação →', () => this.go('qualificacao')));
        this.qualificationPage = () => React.createElement("div", { className: "page-pad" },
            React.createElement("div", { className: "banner peach" },
                React.createElement("span", { className: "big-emoji" }, "\uD83C\uDF93"),
                React.createElement("div", null,
                    React.createElement("h2", null, "Qualifica\u00E7\u00E3o profissional"),
                    React.createElement("p", null, "Desenvolva habilidades em seu ritmo."))),
            this.section('Trilhas disponíveis'),
            React.createElement("div", { className: "stack" }, [['💼', 'Libras no ambiente de trabalho', 70], ['🧑‍💻', 'Comunicação digital', 35], ['📋', 'Atendimento e organização', 15], ['🎤', 'Apresentações profissionais', 0]].map((x, i) => React.createElement("button", { className: "module-card", key: i, onClick: () => this.openLesson('trabalho') },
                React.createElement("span", { className: "module-icon" }, x[0]),
                React.createElement("div", { className: "flex-1" },
                    React.createElement("strong", null, x[1]),
                    React.createElement("small", null,
                        i + 4,
                        " aulas \u00B7 n\u00EDvel introdut\u00F3rio"),
                    React.createElement(Bar, { value: Number(x[2]) })),
                React.createElement("span", { className: "row-right" }, "\u25B6")))));
        this.culturePage = () => React.createElement("div", { className: "page-pad" },
            React.createElement("div", { className: "banner mint" },
                React.createElement("span", { className: "big-emoji" }, "\uD83D\uDCD6"),
                React.createElement("div", null,
                    React.createElement("h2", null, "Cultura que conecta"),
                    React.createElement("p", null, "Conhe\u00E7a hist\u00F3rias, viv\u00EAncias e a comunidade surda."))),
            this.section('Descubra e aprenda'),
            this.listRow('🎭', 'Cultura surda', 'Identidade, expressão e comunidade', () => this.toast('Conteúdo editorial de exemplo.')),
            this.listRow('📚', 'Leitura acessível', 'Textos com apoio visual e Libras', () => this.go('bilingue')),
            this.listRow('📅', 'Eventos e encontros', 'Converse e compartilhe histórias', () => this.go('comunidade')),
            this.listRow('🎬', 'Vídeos educativos', 'Espaço para vídeos validados por instrutores', () => this.go('modulos')));
        this.profilePage = (teacher = false) => React.createElement("div", { className: "page-pad profile-page" },
            React.createElement("div", { className: "profile-card" },
                React.createElement(Mascot, { size: "lg" }),
                React.createElement("h2", null, this.state.name || 'Seu nome'),
                React.createElement("span", { className: "status-tag" }, teacher ? 'Professor(a)' : this.state.role === 'surdo' ? 'Adulto surdo' : 'Ouvinte')),
            ['Notificações', 'Vídeos em Libras', 'Meta diária', ...(teacher ? ['Libras nos materiais'] : [])].map(title => React.createElement("div", { className: "setting-row", key: title },
                React.createElement("span", { className: "row-icon" }, title === 'Notificações' ? '🔔' : title === 'Meta diária' ? '🎯' : '🤟'),
                React.createElement("strong", null, title),
                React.createElement("button", { className: 'switch ' + (this.state.options[title] ? 'on' : ''), onClick: () => this.togglePref(title), "aria-label": (this.state.options[title] ? 'Desativar ' : 'Ativar ') + title, "aria-pressed": !!this.state.options[title] },
                    React.createElement("span", null)))),
            this.listRow('🔐', 'Segurança', 'Senha e proteção da conta', () => this.go('seguranca')),
            this.listRow('🌎', 'Idioma do aplicativo', 'Português (Brasil)', () => this.toast('Idioma do app: português.')),
            this.listRow('🎧', 'Suporte', 'Ajuda e contato', () => this.go('suporte')),
            this.listRow('📄', 'Privacidade', 'Termos e dados', () => this.go('termos')),
            React.createElement("div", { className: "section-space" }),
            this.btn('Mudar de perfil', () => this.go('escolher-perfil'), 'outline'),
            this.btn('Sair', () => this.go('sair'), 'ghost'));
        this.createActivityPage = () => React.createElement("div", { className: "page-pad teacher-create" },
            React.createElement("div", { className: "steps" },
                React.createElement("span", { className: "active" },
                    "1 ",
                    React.createElement("small", null, "Tipo")),
                React.createElement("div", null),
                React.createElement("span", { className: "active" },
                    "2 ",
                    React.createElement("small", null, "Conte\u00FAdo")),
                React.createElement("div", null),
                React.createElement("span", null,
                    "3 ",
                    React.createElement("small", null, "Revisar"))),
            this.section('Monte sua atividade'),
            React.createElement("label", { className: "field-label" },
                "T\u00EDtulo",
                React.createElement("input", { value: this.state.newActivityTitle, onChange: e => this.setState({ newActivityTitle: e.target.value }), placeholder: "Ex.: Cumprimentos formais" })),
            React.createElement("label", { className: "field-label" },
                "Descri\u00E7\u00E3o",
                React.createElement("textarea", { value: this.state.newActivityDescription, onChange: e => this.setState({ newActivityDescription: e.target.value }), placeholder: "O que os alunos v\u00E3o aprender?" })),
            React.createElement("h2", null, "Adicionar bloco"),
            React.createElement("div", { className: "block-picker" }, [['📝', 'Texto'], ['🎬', 'Vídeo'], ['❓', 'Pergunta'], ['🎙️', 'Áudio']].map(x => React.createElement("button", { className: this.state.activityKind === x[1] ? 'active' : '', key: x[1], onClick: () => this.setState({ activityKind: x[1] }) },
                React.createElement("span", null, x[0]),
                x[1]))),
            React.createElement("div", { className: "selected-block" },
                React.createElement("span", null, "\u22EE\u22EE"),
                React.createElement("span", { className: "row-icon" }, this.state.activityKind === 'Vídeo' ? '🎬' : this.state.activityKind === 'Áudio' ? '🎙️' : this.state.activityKind === 'Pergunta' ? '❓' : '📝'),
                React.createElement("strong", null,
                    this.state.activityKind,
                    " ",
                    this.state.newActivityTitle ? '· ' + this.state.newActivityTitle : ''),
                React.createElement("span", null, "\u2022\u2022\u2022")),
            React.createElement("div", { className: "banner mint accessibility" },
                React.createElement("h3", null, "Acessibilidade"),
                React.createElement("p", null, "\u2705 Legendas inclu\u00EDdas"),
                React.createElement("p", null, "\u2705 V\u00EDdeo em Libras (a integrar)"),
                React.createElement("p", null, "\u26A0\uFE0F Descri\u00E7\u00E3o de imagens pendente")),
            React.createElement("div", { className: "split-buttons" },
                this.btn('Pré-visualizar', () => this.toast('Prévia: ' + (this.state.newActivityTitle || 'Atividade sem título')), 'outline'),
                this.btn('Publicar', () => {
                    if (this.state.newActivityTitle.trim().length < 3) {
                        this.toast('Digite um título com pelo menos 3 caracteres.');
                        return;
                    }
                    const activities = [...this.state.activities, { title: this.state.newActivityTitle.trim(), description: this.state.newActivityDescription, kind: this.state.activityKind }];
                    this.setState({ activities, newActivityTitle: '', newActivityDescription: '' });
                    this.save({ activities });
                    this.toast('Atividade salva localmente.');
                    this.go('biblioteca');
                })),
            React.createElement("p", { className: "caption-note" }, "Publica\u00E7\u00E3o demonstrativa: atividades ficam apenas neste dispositivo, sem envio a alunos."));
        this.studentsPage = () => React.createElement("div", { className: "page-pad" },
            React.createElement("div", { className: "chips" }, ['Todos', 'Atenção', 'Concluídos'].map(t => this.pill(t, this.state.tab === t, () => this.setState({ tab: t })))),
            this.state.selectedClass && React.createElement("div", { className: "mini-banner" },
                "\uD83C\uDFEB ",
                this.state.selectedClass,
                " ",
                React.createElement("button", { onClick: () => this.setState({ selectedClass: '' }) }, "\u00D7")),
            this.section('Acompanhamento', 'Exemplo de dados'),
            React.createElement("div", { className: "stack" }, STUDENTS.filter(s => this.state.tab === 'Todos' || (this.state.tab === 'Atenção' ? s.status === 'Atenção' : s.status === 'Concluído')).map((s, i) => React.createElement("button", { key: s.name, className: "student-card", onClick: () => this.setState({ activeStudent: this.state.activeStudent === s.name ? '' : s.name }) },
                React.createElement("div", { className: "initial-avatar" }, s.name.charAt(0)),
                React.createElement("div", { className: "flex-1" },
                    React.createElement("strong", null, s.name),
                    React.createElement(Bar, { value: s.progress }),
                    React.createElement("span", { className: "status-tag" }, s.status),
                    this.state.activeStudent === s.name && React.createElement("p", { className: "student-detail" },
                        s.progress,
                        "% do percurso conclu\u00EDdo. Sugest\u00E3o: ",
                        s.progress < 50 ? 'revisar os primeiros sinais' : 'seguir com os próximos módulos',
                        ".")),
                React.createElement("span", { className: "row-icon small" }, "\uD83D\uDCAC")))),
            React.createElement("p", { className: "caption-note" }, "Dados de alunos s\u00E3o fict\u00EDcios, para demonstra\u00E7\u00E3o de interface."));
        this.libraryPage = () => React.createElement("div", { className: "page-pad" },
            React.createElement("div", { className: "chips" }, ['Planos', 'Materiais', 'Vídeos', 'Minhas atividades'].map(t => this.pill(t, (this.state.tab === 'Todos' ? 'Planos' : this.state.tab) === t, () => this.setState({ tab: t })))),
            this.section(this.state.tab === 'Minhas atividades' ? 'Atividades criadas' : 'Conteúdos pedagógicos'),
            this.state.tab === 'Minhas atividades' ? React.createElement("div", { className: "stack" }, this.state.activities.length === 0 ? React.createElement("div", { className: "white-card" },
                React.createElement("p", null, "Voc\u00EA ainda n\u00E3o criou atividades."),
                this.btn('Criar uma atividade', () => this.go('criar-atividade'))) : this.state.activities.map((a, i) => this.listRow(a.kind === 'Vídeo' ? '🎬' : '📝', a.title, a.description || a.kind, () => this.toast('Atividade salva neste navegador.')))) :
                React.createElement("div", { className: "resource-grid" }, [['📘', 'Plano: Cores', 'Aula · 45 min'], ['🎬', 'Vídeos: Alfabeto', 'Libras · 12 vídeos'], ['📝', 'Atividade: Frutas', 'Ficha · 20 min'], ['🌄', 'Cartazes de sinais', 'Material · PDF'], ['🎭', 'Jogo: mímica', 'Dinâmica · 30 min'], ['📗', 'Plano: Família', 'Aula · 50 min']].filter(x => this.state.tab === 'Planos' || (this.state.tab === 'Vídeos' ? x[0] === '🎬' : true)).map((x, i) => React.createElement("div", { className: "resource-card", key: x[1] },
                    React.createElement("div", { className: 'resource-image ' + (i % 2 ? 'mint' : 'peach') }, x[0]),
                    React.createElement("strong", null, x[1]),
                    React.createElement("small", null, x[2]),
                    this.btn('Usar', () => this.toast('Material selecionado: ' + x[1]), 'small')))),
            this.state.activities.length > 0 && this.state.tab !== 'Minhas atividades' && React.createElement("div", null,
                React.createElement("div", { className: "section-space" }),
                this.section('Minhas atividades'),
                this.state.activities.map(a => this.listRow('📝', a.title, a.description || a.kind, () => this.toast('Atividade disponível neste navegador.')))),
            React.createElement("div", { className: "section-space" }),
            this.btn('＋ Nova atividade', () => this.go('criar-atividade'), 'outline'));
        this.teachersPage = () => React.createElement("div", { className: "page-pad" },
            React.createElement("div", { className: "community-composer" },
                React.createElement(Mascot, { size: "tiny" }),
                React.createElement("input", { "aria-label": "Compartilhar experi\u00EAncia", placeholder: "Compartilhe uma experi\u00EAncia...", value: this.state.teacherPost, onChange: e => this.setState({ teacherPost: e.target.value }) }),
                React.createElement("button", { onClick: () => { if (!this.state.teacherPost.trim())
                        return; const teacherPosts = [this.state.teacherPost, ...this.state.teacherPosts]; this.setState({ teacherPosts, teacherPost: '' }); this.save({ teacherPosts }); } }, "\uFF0B")),
            [...this.state.teacherPosts.map(x => ({ author: this.state.name || 'Você', text: x, type: 'Minha publicação' })), { author: 'Marina · Prof. de Libras', text: 'Usei jogos de mímica para ensinar verbos. A turma amou e participou muito!', type: 'Dica' }, { author: 'Paulo · Prof. 6º ano', text: 'Alguém tem sugestões de vídeos em Libras sobre ciências?', type: 'Pergunta' }].map((x, i) => React.createElement("div", { className: "post-card", key: i },
                React.createElement("div", { className: "post-author" },
                    React.createElement(Mascot, { size: "tiny" }),
                    React.createElement("div", null,
                        React.createElement("strong", null, x.author),
                        React.createElement("small", null, x.type))),
                React.createElement("p", null, x.text),
                React.createElement("div", { className: "post-actions" },
                    React.createElement("button", { onClick: () => this.toast('Você curtiu a publicação.') }, "\uD83D\uDC97 12"),
                    React.createElement("button", { onClick: () => this.toast('Comentários disponíveis após integração com backend.') }, "\uD83D\uDCAC 4"),
                    React.createElement("button", { onClick: () => this.toast('Compartilhamento disponível após integração.') }, "\u2197")))));
        this.supportPage = () => React.createElement("div", { className: "page-pad" },
            React.createElement("div", { className: "banner mint" },
                React.createElement(Mascot, { size: "md" }),
                React.createElement("div", null,
                    React.createElement("h2", null, "Como podemos ajudar?"),
                    React.createElement("p", null, "Escolha um canal ou deixe sua mensagem."))),
            React.createElement("div", { className: "tile-grid" },
                this.tile('💬', 'Chat', 'Contato de suporte', 'suporte', 'white'),
                this.tile('🤟', 'Vídeo em Libras', 'Canal acessível', 'suporte', 'pale'),
                this.tile('📧', 'E-mail', 'Mensagem escrita', 'suporte', 'white'),
                this.tile('📝', 'Formulário', 'Envie sua dúvida', 'suporte', 'pale')),
            this.section('Perguntas frequentes'),
            React.createElement("div", { className: "stack" }, [['Como mudar meu perfil?', 'Na tela Meu perfil, selecione Mudar de perfil.'], ['Como ver vídeos em Libras?', 'Abra uma aula e utilize o reprodutor quando houver vídeos integrados.'], ['Esqueci minha senha', 'Nesta demonstração a senha é local. Não há recuperação por e-mail.']].map(x => React.createElement("details", { className: "faq", key: x[0] },
                React.createElement("summary", null, x[0]),
                React.createElement("p", null, x[1])))),
            React.createElement("label", { className: "field-label" },
                "Sua mensagem",
                React.createElement("textarea", { placeholder: "Descreva sua d\u00FAvida...", value: this.state.supportText, onChange: e => this.setState({ supportText: e.target.value }) })),
            this.btn('Enviar mensagem', () => { if (!this.state.supportText.trim()) {
                this.toast('Escreva sua dúvida primeiro.');
                return;
            } this.setState({ supportSent: true, supportText: '' }); this.toast('Mensagem registrada nesta demonstração. Não foi enviada a um servidor.'); }),
            this.state.supportSent && React.createElement("p", { className: "feedback good" }, "Mensagem salva nesta sess\u00E3o. Para envio real, integre um servi\u00E7o de suporte."));
        this.notificationsPage = () => React.createElement("div", { className: "page-pad" },
            React.createElement("div", { className: "segmented" }, ['Novidades', 'Avisos'].map(t => this.pill(t, (this.state.tab === 'Todos' ? 'Novidades' : this.state.tab) === t, () => this.setState({ tab: t })))),
            React.createElement("div", { className: "stack" }, (this.state.tab === 'Avisos' ? [['🔐', 'Novo acesso à conta', 'Confira seus dispositivos'], ['📅', 'Atividade amanhã', 'Veja seus eventos']] : [['🎓', 'Novo curso disponível', 'Qualificação profissional'], ['🏆', 'Você ganhou uma medalha!', '5 dias seguidos'], ['📆', 'Evento amanhã', 'Roda de conversa em Libras'], ['🔔', 'Aula nova liberada', 'Módulo 2'], ['🔐', 'Novo acesso à conta', 'Confira seus aparelhos']]).map((x, i) => React.createElement("button", { key: i, className: 'notice-card ' + (this.state.options['notificacoes-lidas'] ? '' : 'unread'), onClick: () => this.toast('Notificação: ' + x[1]) },
                React.createElement("span", { className: "row-icon" }, x[0]),
                React.createElement("div", null,
                    React.createElement("strong", null, x[1]),
                    React.createElement("small", null, x[2])),
                !this.state.options['notificacoes-lidas'] && React.createElement("span", { className: "notification-dot" })))),
            React.createElement("div", { className: "section-space" }),
            this.btn('Marcar tudo como lido', () => { const options = { ...this.state.options, 'notificacoes-lidas': true }; this.setState({ options }); this.save({ options }); this.toast('Notificações marcadas como lidas.'); }, 'outline'));
        this.securityPage = () => React.createElement("div", { className: "page-pad" },
            React.createElement("div", { className: "banner mint security-banner" },
                React.createElement("span", { className: "security-emoji" }, "\uD83D\uDD10"),
                React.createElement("h2", null, "Seus dados est\u00E3o protegidos"),
                React.createElement("p", null, "Prefer\u00EAncias demonstrativas salvas no dispositivo.")),
            ['Biometria', 'Verificação em 2 etapas', 'Alertas de acesso'].map(t => React.createElement("div", { className: "setting-row", key: t },
                React.createElement("span", { className: "row-icon" }, t === 'Biometria' ? '👆' : t === 'Alertas de acesso' ? '🔔' : '🔐'),
                React.createElement("strong", null, t),
                React.createElement("button", { className: 'switch ' + (this.state.options[t] ? 'on' : ''), onClick: () => { this.togglePref(t); this.toast('A opção é ilustrativa e não ativa proteção real.'); }, "aria-label": t, "aria-pressed": !!this.state.options[t] },
                    React.createElement("span", null)))),
            this.section('Aparelhos conectados'),
            React.createElement("div", { className: "stack" },
                this.listRow('📱', 'Este dispositivo', 'Navegador atual', () => this.toast('Sessão demonstrativa local.')),
                this.listRow('💻', 'Notebook', 'Exemplo de outro aparelho', () => this.toast('Dispositivo fictício.'))),
            React.createElement("div", { className: "section-space" }),
            this.btn('Alterar senha', () => this.toast('Para uma conta real, integre autenticação em backend.')),
            React.createElement("p", { className: "caption-note" }, "Aten\u00E7\u00E3o: biometria e autentica\u00E7\u00E3o em dois fatores n\u00E3o s\u00E3o implementadas neste prot\u00F3tipo."));
        this.termsPage = () => React.createElement("div", { className: "page-pad" },
            React.createElement("div", { className: "banner peach" },
                React.createElement("span", { className: "big-emoji" }, "\uD83D\uDCC4"),
                React.createElement("div", null,
                    React.createElement("h2", null, "Entenda como cuidamos de voc\u00EA"),
                    React.createElement("p", null, "Transpar\u00EAncia e acessibilidade s\u00E3o essenciais."))),
            this.btn('🤟 Ver em Libras', () => this.toast('Vídeo dos termos em Libras será integrado após validação.'), 'primary'),
            React.createElement("div", { className: "section-space" }),
            ['Termos de uso', 'Política de privacidade', 'Dados que coletamos', 'Seus direitos'].map(t => React.createElement("details", { className: "faq", key: t },
                React.createElement("summary", null, t),
                React.createElement("p", null, "Este \u00E9 um prot\u00F3tipo educacional do Sinalis. As informa\u00E7\u00F5es adicionadas no aplicativo s\u00E3o mantidas localmente neste navegador. N\u00E3o h\u00E1 banco de dados remoto, cookies de publicidade ou cadastro real de usu\u00E1rios. Antes de um lan\u00E7amento p\u00FAblico, documentos legais definitivos dever\u00E3o ser elaborados."))),
            this.section('Suas escolhas'),
            ['Dados de uso', 'Novidades por e-mail'].map(t => React.createElement("div", { className: "setting-row", key: t },
                React.createElement("span", { className: "row-icon" }, t === 'Dados de uso' ? '📊' : '📧'),
                React.createElement("strong", null, t),
                React.createElement("button", { className: 'switch ' + (this.state.options[t] ? 'on' : ''), onClick: () => this.togglePref(t), "aria-pressed": !!this.state.options[t] },
                    React.createElement("span", null)))));
        this.exitPage = () => React.createElement("div", { className: "page-pad exit-page" },
            React.createElement(Logo, { compact: true }),
            React.createElement("div", { className: "exit-center" },
                React.createElement("div", { className: "exit-mascot" },
                    React.createElement(Mascot, { size: "lg" }),
                    "\uD83D\uDC4B"),
                React.createElement("h1", null, "At\u00E9 logo!"),
                React.createElement("p", null,
                    "Seu progresso est\u00E1 salvo neste navegador.",
                    React.createElement("br", null),
                    "Volte quando quiser.")),
            React.createElement("div", { className: "exit-actions" },
                this.btn('Sair', () => { this.save({ role: null }); this.setState({ role: 'ouvinte' }); this.go('boas-vindas'); }),
                this.btn('Voltar', () => this.go(START_ROUTE[this.state.role]), 'outline')));
        this.renderScreen = () => {
            switch (this.state.route) {
                case 'boas-vindas': return this.welcome();
                case 'cadastro': return this.auth('cadastro');
                case 'entrar': return this.auth('entrar');
                case 'escolher-perfil': return this.chooseProfile();
                case 'ouvinte-inicio': return this.dashboardOuvinte();
                case 'surdo-inicio': return this.dashboardSurdo();
                case 'professor-inicio': return this.dashboardProfessor();
                case 'trilhas': return this.pathways();
                case 'aprender': return this.learnPage();
                case 'modulos': return this.modulePage();
                case 'licao': return this.lessonPage();
                case 'desafios': return this.quizPage();
                case 'comunique': return this.communicatePage();
                case 'comunicacao': return this.communicatePage(true);
                case 'inclusao': return this.includePage();
                case 'idiomas':
                case 'bilingue': return this.languagePage();
                case 'comunidade': return this.communityPage();
                case 'progresso': return this.progressPage();
                case 'carreira': return this.careerPage();
                case 'qualificacao': return this.qualificationPage();
                case 'leitura': return this.culturePage();
                case 'perfil': return this.profilePage();
                case 'criar-atividade': return this.createActivityPage();
                case 'acompanhar': return this.studentsPage();
                case 'biblioteca': return this.libraryPage();
                case 'docentes': return this.teachersPage();
                case 'configuracoes': return this.profilePage(true);
                case 'suporte': return this.supportPage();
                case 'notificacoes': return this.notificationsPage();
                case 'seguranca': return this.securityPage();
                case 'termos': return this.termsPage();
                case 'sair': return this.exitPage();
                default: return React.createElement("div", { className: "page-pad" },
                    React.createElement("h2", null, "P\u00E1gina n\u00E3o encontrada"),
                    this.btn('Voltar ao início', () => this.go(START_ROUTE[this.state.role])));
            }
        };
        this.sidebar = () => React.createElement("aside", { className: 'desktop-sidebar ' + (this.state.showSidebar ? 'open' : '') },
            React.createElement("div", { className: "sidebar-logo" },
                React.createElement(Logo, null)),
            React.createElement("h2", null, "Prot\u00F3tipo naveg\u00E1vel"),
            React.createElement("p", null, "Experimente o aplicativo e troque entre os tr\u00EAs perfis. As telas seguem o fluxograma enviado."),
            React.createElement("div", { className: "sidebar-group" },
                React.createElement("span", { className: "sidebar-label" }, "ONBOARDING"),
                [['boas-vindas', 'Bem-vindo'], ['cadastro', 'Criar conta'], ['entrar', 'Entrar'], ['escolher-perfil', 'Escolher perfil']].map(x => React.createElement("button", { className: this.state.route === x[0] ? 'active' : '', key: x[0], onClick: () => this.go(x[0]) }, x[1]))),
            ['surdo', 'ouvinte', 'professor'].map(role => React.createElement("div", { className: "sidebar-group", key: role },
                React.createElement("button", { className: "sidebar-label role-title", onClick: () => this.choose(role) },
                    role === 'surdo' ? '🤟 ADULTO SURDO' : role === 'ouvinte' ? '👂 OUVINTE' : '🎓 PROFESSOR',
                    " ",
                    React.createElement("span", null, "\u203A")),
                PATHS[role].map(s => React.createElement("button", { className: this.state.route === s.id && this.state.role === role ? 'active' : '', key: s.id, onClick: () => { this.setState({ role }); this.save({ role }); this.go(s.id); } },
                    React.createElement("span", null, s.icon),
                    " ",
                    s.title)))),
            React.createElement("div", { className: "sidebar-group" },
                React.createElement("span", { className: "sidebar-label" }, "TELAS COMUNS"),
                COMMON_SCREENS.map(s => React.createElement("button", { className: this.state.route === s.id ? 'active' : '', key: s.id, onClick: () => this.go(s.id) },
                    s.icon,
                    " ",
                    s.title))),
            React.createElement("div", { className: "sidebar-foot" },
                "Sinalis \u00B7 Demonstra\u00E7\u00E3o mobile-first",
                React.createElement("br", null),
                React.createElement("span", null, "React + TypeScript \u00B7 Dados locais")));
        const role = ['surdo', 'ouvinte', 'professor'].includes(initial.role) ? initial.role : 'ouvinte';
        const fromHash = decodeURIComponent(location.hash.replace(/^#\/?/, '')).trim();
        this.state = {
            route: fromHash || (initial.role ? START_ROUTE[role] : 'boas-vindas'), role,
            name: initial.name || '', email: initial.email || '', password: initial.password || '',
            formName: '', formEmail: '', formPassword: '', search: '', tab: 'Todos', answer: -1, quizIndex: 0,
            quizChecked: false, points: initial.points || 120, completed: initial.completed || [], favorites: initial.favorites || [],
            activities: initial.activities || [], options: initial.options || { 'Notificações': true, 'Vídeos em Libras': true, 'Meta diária': true, 'Biometria': false, 'Verificação em 2 etapas': true, 'Alertas de acesso': false, 'Dados de uso': true, 'Novidades por e-mail': false, 'Libras nos materiais': true },
            supportText: '', supportSent: false, activeStudent: '', currentLesson: '', message: '',
            newActivityTitle: '', newActivityDescription: '', activityKind: 'Texto', chatInput: '', chatHistory: [],
            selectedClass: '', teacherPost: '', teacherPosts: initial.teacherPosts || [], language: 'Libras', showSidebar: false
        };
    }
    componentDidMount() { window.addEventListener('hashchange', this.syncHash); }
    componentWillUnmount() { window.removeEventListener('hashchange', this.syncHash); }
    render() {
        const { route } = this.state;
        return React.createElement("div", { className: "site-layout" },
            this.sidebar(),
            React.createElement("main", { className: "workspace" },
                React.createElement("div", { className: "workspace-top" },
                    React.createElement("div", null,
                        React.createElement("span", { className: "workspace-eyebrow" }, "FLUXO DE TELAS \u00B7 SINALIS"),
                        React.createElement("h1", null, "Uma nova forma de aprender Libras."),
                        React.createElement("p", null, "Projeto educacional de acessibilidade digital")),
                    React.createElement("button", { className: "workspace-switch", onClick: () => this.go('escolher-perfil') },
                        "Trocar perfil ",
                        React.createElement("span", null, "\u2197"))),
                React.createElement("div", { className: "phone-shell" },
                    React.createElement("div", { className: "statusbar" },
                        React.createElement("span", null, "9:41"),
                        React.createElement("div", { className: "dynamic-island" }),
                        React.createElement("span", { className: "status-icons" }, "\u25AE\u25AE \u25B0")),
                    React.createElement("div", { className: 'phone-body ' + (['boas-vindas', 'sair'].includes(route) ? 'gradient-body' : '') },
                        this.header(),
                        this.renderScreen()),
                    this.bottomNav()),
                React.createElement("div", { className: "workspace-caption" },
                    React.createElement("span", null, "\u25CF"),
                    " Prot\u00F3tipo interativo \u00B7 Visualiza\u00E7\u00E3o iPhone 14 \u00B7 Layout adapt\u00E1vel a celulares")),
            this.state.message && React.createElement("div", { className: "toast", role: "status" }, this.state.message));
    }
}
ReactDOM.render(React.createElement(SinalisApp, null), document.getElementById('root'));
