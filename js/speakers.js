// Dados dos palestrantes
const speakers = {
    1: {
        name: "Ricardo Salada",
        role: "Perito Criminal",
        institution: "IUEJ",
        description: "Perito criminal com mais de 30 anos de experiência, destacando-se em casos emblemáticos como Suzane von Richthofen e Caso Yoki. Reconhecido pela perícia técnica em análises forenses e atualmente participa da série Perícia Lab no canal AXN Brasil.",
        image: "images/team-1.jpg"
    },
    2: {
        name: "Rubens Correia",
        role: "Criminólogo Psicanalista",
        institution: "IUEJ",
        description: "Criminólogo com duas décadas de experiência, formado em Direito com pós-graduação em Criminologia. Mestre e doutorando pela USP, autor de diversos livros sobre comportamento violento, incluindo 'Criminologia Descomplicada'.",
        image: "images/team-2.jpg"
    },
    3: {
        name: "Telma Rocha",
        role: "Fotógrafa Pericial",
        institution: "IUEJ",
        description: "Bacharel em Direito e referência em fotografia forense. Com 30 anos de atuação no DHPP em São Paulo, trabalhou em casos de repercussão nacional como Maniaco das Dentistas, Maniaco do Parque e Caso Matsunaga.",
        image: "images/team-3.jpg"
    },
    4: {
        name: "Amanda Csi",
        role: "Perita Criminal",
        institution: "IUEJ",
        description: "Perita Oficial Criminal da Polícia Civil da Paraíba, 1º lugar geral na Academia de Polícia Civil em 2014. Graduada em Farmácia e Direito, Mestre em Tecnologia Farmacêutica e autora do livro Medicina Legal.",
        image: "images/team-4.jpg"
    },
    5: {
        name: "Leonardo Couto",
        role: "Advogado Criminalista",
        institution: "IUEJ",
        description: "Advogado criminalista, Mestre em Desenvolvimento e Planejamento Territorial pela PUC/GO, Doutorando em Direito pela FADISP e palestrante.",
        image: "images/team-5.jpg"
    },
    6: {
        name: "Leonardo Pantaleão",
        role: "Advogado",
        institution: "IUEJ",
        description: "Advogado desde 1997, com experiência em empresa multinacional de telecomunicações. Sócio fundador da Pantaleão Sociedade de Advogados desde 2004, especializada em Direito Penal.",
        image: "images/team-6.jpg"
    },
    7: {
        name: "Jéssica Ramos",
        role: "Delegada",
        institution: "IUEJ",
        description: "Delegada pernambucana, natural de Recife. Iniciou como advogada, tornou-se delegada em 2018. Atuou no DRACCO e atualmente titulariza a delegacia de combate à violência contra a mulher do Recife.",
        image: "images/team-7.jpg"
    },
    8: {
        name: "Lorena Ocampos",
        role: "Juíza",
        institution: "IUEJ",
        description: "Juíza substituta do TJDFT, Mestra em Direito pelo IDP. Professora de Processo Penal, palestrante e autora da obra 'Audiência de Custódia - A Presença como Direito Fundamental'.",
        image: "images/team-8.jpg"
    },
    9: {
        name: "Simone Nunes",
        role: "Administradora",
        institution: "IUEJ",
        description: "CEO da ADM Contabilidade e Assessoria, graduada em Contabilidade, RH e Neurociência. Especialista em Neurociência Aplicada ao Comportamento e autora reconhecida por transformar negócios.",
        image: "images/team-9.jpg"
    },
    10: {
        name: "Luciana Guimarães",
        role: "Advogada",
        institution: "IUEJ",
        description: "Advogada em Direito Médico, pós-graduada em Ciências Criminais e Direito Médico. Coordenadora e professora de pós-graduação, membro de comissões da OAB BA e palestrante.",
        image: "images/team-10.jpg"
    },
    11: {
        name: "Brenda Yuri",
        role: "Psicóloga Jurídica",
        institution: "IUEJ",
        description: "Psicóloga Jurídica, Mestranda em Psicologia Criminal na Espanha, especialista em Investigação Criminal. Perita habilitada pelo TJSP, professora universitária e coordenadora de cursos de pós-graduação.",
        image: "images/team-11.jpg"
    },
    12: {
        name: "Dayana Tavares",
        role: "Juíza Tjce",
        institution: "IUEJ",
        description: "Juíza na 2ª Vara Cível da comarca de Boa Viagem-CE, membro do núcleo de cooperação judiciária do TJCE. Ex-oficial de justiça, graduada em Direito pela UFC.",
        image: "images/team-12.jpg"
    },
    13: {
        name: "Kyvia Maciel",
        role: "Advogada Criminalista",
        institution: "IUEJ",
        description: "Advogada criminalista especialista em Direito e Processo Penal. Sócia no escritório Omena & Advogados, CEO do podcast @vinhodireito e da @kmjurisacademy.",
        image: "images/team-13.jpg"
    },
    14: {
        name: "Luciana Fiala",
        role: "Juíza",
        institution: "IUEJ",
        description: "Juíza de Direito especialista em Direito Penal e Gênero, mestranda em Direitos Humanos. Juíza Titular do Juizado de Violência Doméstica no TJ-RJ e retratada no filme 'O Juízo' da Netflix.",
        image: "images/team-14.jpg"
    },
    15: {
        name: "Nidal Ahmad",
        role: "Professor De Direito Penal",
        institution: "IUEJ",
        description: "Mestre e Especialista em Direito, Professor de Direito Penal na UNISC. Ex-Assessor Jurídico do Ministério Público do RS, advogado, escritor e palestrante.",
        image: "images/team-15.jpg"
    },
    16: {
        name: "Aury Lopes",
        role: "Doutor Em Direito Processual Penal",
        institution: "IUEJ",
        description: "Doutor em Direito Processual Penal pela Universidad Complutense de Madrid. Professor Titular do Programa de Pós-Graduação em Ciências Criminais da PUC-RS e advogado criminalista.",
        image: "images/team-16.jpg"
    },
    17: {
        name: "Lucas Cardozo",
        role: "Mestre Em Direito E Major Da Pc",
        institution: "IUEJ",
        description: "Bacharel em Direito e Segurança Pública, especialista em Ciências Criminais e Gestão de Segurança Pública. Mestre em Direito, oficial da Polícia há 21 anos, professor e palestrante.",
        image: "images/team-17.jpg"
    },
    18: {
        name: "Willian Silva",
        role: "Advogado Criminalista",
        institution: "IUEJ",
        description: "Advogado Criminalista, formado em gestão de segurança pública, pós-graduado em ciências criminais e tribunal do júri.",
        image: "images/team-18.jpg"
    },
    19: {
        name: "Márcia Teixeira",
        role: "Advogada Criminalista",
        institution: "IUEJ",
        description: "Mais de dez anos de advocacia criminal, graduada pela URCA, pós-graduada em Ciências Penais e Criminologia. Professora universitária e idealizadora dos projetos 'Por Elas' e 'Com a Palavra a Defesa'.",
        image: "images/team-19.jpg"
    },
    20: {
        name: "Vinicius Schereinert",
        role: "Advogado E Mentor Jurídico",
        institution: "IUEJ",
        description: "Advogado desde 2010 e CEO da Destrava Mídias, melhor assessoria de marketing jurídico do Brasil. Ajuda mais de 170 advogados a alcançar clientes através do digital, com mais de R$ 20 milhões faturados.",
        image: "images/team-20.jpg"
    },
    21: {
        name: "Eduardo Maurício",
        role: "Advogado Criminalista",
        institution: "IUEJ",
        description: "Advogado criminalista internacional com atuação no Brasil, Portugal, Hungria e Espanha. Especialista em extradição, doutorando em Direito Penal pela Universidade de Salamanca e mestre pela Universidade de Coimbra.",
        image: "images/team-21.jpg"
    },
    22: {
        name: "Rogério Greco",
        role: "Secretário De Segurança Pública",
        institution: "IUEJ",
        description: "Doutor e Mestre em Direito, autor de mais de 150 obras jurídicas. Fundador do Instituto Greco e atual Secretário de Justiça e Segurança Pública do Estado de Minas Gerais.",
        image: "images/team-22.jpg"
    },
    23: {
        name: "Luana Davico",
        role: "Delegada De Polícia",
        institution: "IUEJ",
        description: "Graduada em Direito pela UFG, pós-graduada em Direito Penal e Processual Penal. Ex-assessora do MP-GO, Delegada do DF e Coordenadora de Carreira Policiais no Grancursos Online.",
        image: "images/team-23.jpg"
    },
    24: {
        name: "Bruno Ferrullo",
        role: "Advogado Criminalista",
        institution: "IUEJ",
        description: "Advogado Criminalista.",
        image: "images/team-24.jpg"
    },
    25: {
        name: "Keliny Aparecida Polesca De Freitas",
        role: "Advogada Criminalista",
        institution: "IUEJ",
        description: "Advogada criminalista, professora e mentora. Proprietária do Polesca Advocacia em Viçosa/MG, mestranda em Ciências Criminológico-Forense no Uruguai e membro de comissões da OAB Viçosa/MG.",
        image: "images/team-25.jpg"
    },
    26: {
        name: "Leonardo De Moraes Araújo Lima",
        role: "Advogado Criminalista",
        institution: "IUEJ",
        description: "Especialista em Ciências Criminais, professor de Direito Penal e Processual Penal. Ex-Presidente da ABRACRIM/AL e ACRIMAL, atual presidente da Caixa de Assistência dos Advogados de Alagoas.",
        image: "images/team-26.jpg"
    },
    27: {
        name: "Priscilla Jursa",
        role: "Especialista Em Oratória",
        institution: "IUEJ",
        description: "Profissional especializada em técnicas de oratória e comunicação, oferecendo treinamentos para aprimoramento da comunicação jurídica e apresentações profissionais.",
        image: "images/team-27.jpg"
    },
    28: {
        name: "Andreza Maia",
        role: "Psicóloga",
        institution: "IUEJ",
        description: "Psicóloga Mestra pela UNIVASF, especialista em Psicologia Jurídica e Gestão em Saúde. Atua como assistente técnica e perita no TJ-BA, além de professora em cursos de graduação e pós-graduação.",
        image: "images/team-28.jpg"
    },
    29: {
        name: "Karyne Lira",
        role: "Advogada",
        institution: "IUEJ",
        description: "Advogada especialista em Direito de Família, Presidente da Comissão de Marketing Jurídico da OAB Garanhuns, professora, palestrante e mentora com pós-graduações em Direito Civil e Trabalhista.",
        image: "images/team-29.jpg"
    },
    30: {
        name: "Ruth Viana",
        role: "Juíza",
        institution: "IUEJ",
        description: "Doutora em Direito, juíza, palestrante e autora de obras jurídicas. Profissional com vasta experiência na magistratura e contribuições significativas para a literatura jurídica.",
        image: "images/team-30.jpg"
    },
    31: {
        name: "Anna Victoria",
        role: "Delegada De Polícia",
        institution: "IUEJ",
        description: "Delegada de Polícia, escritora e professora. Profissional com atuação destacada na área policial, contribuindo também para a educação e literatura especializada.",
        image: "images/team-31.jpg"
    },
    32: {
        name: "Cássio Chechi De Assis",
        role: "Advogado Criminalista",
        institution: "IUEJ",
        description: "Mestre e doutorando em Direito pela Universidade de Coimbra. Vice-presidente do Instituto Iberoamericano de Compliance, autor de obras especializadas em direito criminal e compliance.",
        image: "images/team-32.jpg"
    },
    33: {
        name: "Nathália Della Santa",
        role: "Psicóloga Clínica E Jurídica",
        institution: "IUEJ",
        description: "Psicóloga clínica e jurídica do TJPE, Chefe do Centro de Apoio Psicossocial. Mestre em Neuropsiquiatria pela UFPE, especialista em Terapia Cognitivo-Comportamental e Neurociência pela PUC-RS.",
        image: "images/team-33.jpg"
    },
    34: {
        name: "Francisco Marques",
        role: "Psicólogo Clínico",
        institution: "IUEJ",
        description: "Professor do Curso de Psicologia da Faculdade Anhanguera, Mestre em Educação pela UFPE. Especialista em Psicologia Jurídica e Neuropsicologia, atua como formador na área da infância e adolescência.",
        image: "images/team-34.jpg"
    },
    35: {
        name: "Maciel Borges",
        role: "Advogado Criminalista",
        institution: "IUEJ",
        description: "Pós-graduado em Direito Penal e Processo Penal, curso de extensão em Teoria do Crime pela PUC/RS. Membro da Comissão de Defesa da OAB/MG e vice-presidente da 187ª Subseção OAB/MG.",
        image: "images/team-35.jpg"
    },
    36: {
        name: "Aline Pozzolo",
        role: "Psicóloga",
        institution: "IUEJ",
        description: "Psicóloga doutoranda em Portugal, mestra em Saúde Coletiva, especialista em Psicologia Jurídica. Psicóloga da Polícia Civil de SC, organizadora de livros e idealizadora do Projeto Proteja.",
        image: "images/team-36.jpg"
    },
    37: {
        name: "Diego Rodrigues",
        role: "Advogado Criminalista",
        institution: "IUEJ",
        description: "Advogado criminalista com experiência sólida na área penal, atuando em defesas criminais e casos complexos do direito penal brasileiro.",
        image: "images/team-37.jpg"
    },
    38: {
        name: "Cristiany Moraes",
        role: "Psicóloga Jurídica",
        institution: "Sistema de Justiça",
        description: "Profissional especializada em psicologia jurídica, atuando na interface entre psicologia e direito, com foco em avaliações periciais e assistência técnica.",
        image: "images/team-38.jpg"
    },
    39: {
        name: "Karol Toledo",
        role: "Advogada Criminalista",
        institution: "IUEJ",
        description: "Advogada criminalista, especialista em Direito Penal e Processual Penal. Coordenadora do Curso de Direito da FRM, presidente da Comissão da Mulher Advogada da OAB Penedo e coautora de obras jurídicas.",
        image: "images/team-39.jpg"
    },
    40: {
        name: "Felipe De Martino",
        role: "Psicólogo Jurídico",
        institution: "IUEJ",
        description: "Psicólogo especializado em psicologia jurídica e forense com mais de 12 anos de experiência. Diretor da GomezPsi, mestre em Ciências da Saúde pela USP e capacitado em perícias judiciais.",
        image: "images/team-40.jpg"
    },
    41: {
        name: "Allan Christyan",
        role: "Ceo Do Grupo Notorium",
        institution: "IUEJ",
        description: "CEO do Grupo Notorium® e da expoDireito® Brasil. Bacharel em Direito.",
        image: "images/team-41.jpg"
    },
    42: {
        name: "Rodrigo Martins",
        role: "Advogado Criminalista",
        institution: "IUEJ",
        description: "Advogado Criminalista e sócio-gestor do RM Advocacia Criminal. Professor de Direito Penal, integrou o FGV Rio Law Program. Especialista em Direito Público e fundador do Laboratório Criminal - LABCrim.",
        image: "images/team-42.jpg"
    },
    43: {
        name: "Emilia Queiroz",
        role: "Mestre Em Direito",
        institution: "IUEJ",
        description: "Mestre e especialista em Direito, membro Consultora da Comissão Nacional de Educação Jurídica do CFO OAB. Presidente da Comissão de Educação Jurídica da OABPE, professora e fundadora do escritório Oliveira, Queiroz e Costa Advocacia.",
        image: "images/team-43.jpg"
    },
};

// Função para criar o HTML de um card de palestrante
function createSpeakerCard(id, speaker) {
    return `
        <div class="col">
            <div id="tm-1-${id}" class="team-member wow animate__animated animate__fadeInUp">
                <!-- Team Member Photo -->
                <div class="team-member-photo r-10 position-relative">
                    <div class="hover-overlay"> 
                        <img class="img-fluid" src="${speaker.image}" alt="team-member-foto">
                        <div class="item-overlay d-flex justify-content-center align-items-center">
                            <button class="btn btn--theme btn-sm" onclick="openSpeakerModal(${id})">Saiba mais</button>
                        </div>
                    </div>
                </div>
                
                <!-- Team Member Data -->		
                <div class="team-member-data">	
                    <h6 class="h6-lg">${speaker.name}</h6>
                    <p>${speaker.role}</p>
                </div>	
            </div>									
        </div>
    `;
}

// Função para renderizar todos os palestrantes
function renderSpeakers() {
    const container = document.getElementById('speakers-container');
    let html = '';
    
    // Itera sobre todos os palestrantes e cria os cards
    Object.keys(speakers).forEach(id => {
        html += createSpeakerCard(id, speakers[id]);
    });
    
    container.innerHTML = html;
}

// Função para abrir o modal do palestrante
function openSpeakerModal(id) {
    const speaker = speakers[id];
    if (!speaker) return;

    document.getElementById("speakerName").textContent = speaker.name;
    document.getElementById("speakerRole").textContent = speaker.role;
    document.getElementById("speakerInstitution").textContent = speaker.institution;
    document.getElementById("speakerDescription").textContent = speaker.description;
    document.getElementById("speakerImage").src = speaker.image;

    const modal = new bootstrap.Modal(document.getElementById('speakerModal'));
    modal.show();
}

// Renderizar os palestrantes quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    renderSpeakers();
});