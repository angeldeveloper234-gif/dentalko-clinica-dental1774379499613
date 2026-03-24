export interface GalleryItem {
    title: string;
    category: string;
    image: string;
}

export interface ProductItem {
    id: string;
    name: string;
    price: string;
    desc: string;
    image: string;
}

export interface ServiceItem {
    id: string;
    icon: string;
    title: string;
    problem: string;
    agitation: string;
    solve: string;
    price: string;
}

export interface TestimonialItem {
    name: string;
    role: string;
    text: string;
    tags: string[];
}

export interface Config {
    branding: {
        name: string;
        slogan: string;
        logo: string;
        trade: string;
    };
    contact: {
        address: string;
        googleMaps: string;
        phoneDisplay: string;
    };
    supabase: {
        url: string;
        anonKey: string;
    };
    analytics: {
        webhookUrl: string;
    };
    bookingUrl: string;
    paymentLink: string;
    googleMapsReviewUrl: string;
    dynamicContent: {
        city: string;
        localAnchor: string;
        stats: {
            projectsDone: number;
            experienceYears: number;
            happyClients: number;
            m2Built?: string;
        };
        specialization: {
            title: string;
            pain: string;
            ego: string;
            hook: string;
        };
        roadmap: Array<{
            step: string;
            title: string;
            desc: string;
        }>;
        pricing: {
            basic: string;
            comprehensive: string;
            retainer: string;
        };
    };
    services: ServiceItem[];
    testimonials: TestimonialItem[];
    demoUser: {
        name: string;
        email: string;
        whatsapp: string;
    };
    features: {
        showGallery: boolean;
        showProducts: boolean;
        showTestimonials: boolean;
        showFAQ: boolean;
        showStats: boolean;
    };
    gallery: GalleryItem[];
    products: ProductItem[];
}

export const config: Config = {
    branding: {
        name: "dentalkō. | Clínica Dental Saltillo",
        slogan: "Odontología Integral y Estética",
        logo: "dentalkō.",
        trade: "Clínica Dental",
    },
    contact: {
        address: "Plaza San Jerónimo, Celestin Freinet 27-Local 26, 25204 Saltillo, Coah.",
        googleMaps: "https://maps.app.goo.gl/yqkMAciV4VCwcgEh9",
        phoneDisplay: "+52 844 827 2565"
    },
    supabase: {
        url: "",
        anonKey: "",
    },
    analytics: {
        webhookUrl: "",
    },
    bookingUrl: "#contact",
    paymentLink: "",
    googleMapsReviewUrl: "",
    dynamicContent: {
        city: "Saltillo",
        localAnchor: "Plaza San Jerónimo, Local 26",
        stats: {
            projectsDone: 3500,
            experienceYears: 15,
            happyClients: 3400,
            m2Built: "100%"
        },
        specialization: {
            title: "Salud Oral",
            pain: "Dolor dental y ansiedad",
            ego: "Tu Sonrisa Perfecta",
            hook: "Diagnóstico Digital Preciso"
        },
        roadmap: [
            {
                step: "01",
                title: "Diagnóstico Digital",
                desc: "Evaluación completa con escáner intraoral y radiografía digital de baja radiación."
            },
            {
                step: "02",
                title: "Plan Integral",
                desc: "Diseño de tratamiento personalizado enfocado en preservar tu estructura dental natural."
            },
            {
                step: "03",
                title: "Resolución Clínica",
                desc: "Ejecución del tratamiento sin dolor, en un ambiente relajado y estéril."
            }
        ],
        pricing: {
            basic: "Consulta de valoración desde $500 MXN",
            comprehensive: "Diseño de sonrisa personalizado",
            retainer: "Planes de ortodoncia a meses"
        }
    },
    services: [
        {
            id: "01",
            icon: "🦷",
            title: "Implantes Dentales",
            problem: "Pérdida de piezas dentales",
            agitation: "La falta de dientes afecta tu digestión, tu habla y la estructura de tu rostro.",
            solve: "Recupera la función y estética completa con implantes de titanio biocompatible.",
            price: "pricing.comprehensive"
        },
        {
            id: "02",
            icon: "✨",
            title: "Estética Dental",
            problem: "Dientes manchados o desgastados",
            agitation: "Una sonrisa apagada puede disminuir tu confianza en interacciones sociales.",
            solve: "Carillas y blanqueamiento para una sonrisa radiante y natural.",
            price: "pricing.basic"
        },
        {
            id: "03",
            icon: "🛡️",
            title: "Ortodoncia",
            problem: "Dientes desalineados",
            agitation: "La mala mordida puede causar dolores de cabeza y de desgaste prematuro.",
            solve: "Alineación perfecta con brackets estéticos o alineadores invisibles.",
            price: "pricing.retainer"
        }
    ],
    testimonials: [
        {
            name: "Sofía Martínez",
            role: "Paciente de Ortodoncia",
            text: "El trato de la Dra. Alejandra es increíble. Me explicaron todo el proceso y los resultados fueron más rápidos de lo que esperaba.",
            tags: ["Amabilidad", "Eficiencia"]
        },
        {
            name: "Ricardo Gómez",
            role: "Paciente de Implantes",
            text: "Tenía mucho miedo al dentista, pero el Dr. Guillermo me hizo sentir muy seguro. El procedimiento fue totalmente indoloro.",
            tags: ["Sin Dolor", "Confianza"]
        },
        {
            name: "Ana Paula R.",
            role: "Diseño de Sonrisa",
            text: "Las instalaciones están impecables y la tecnología que usan es de otro nivel. Mi sonrisa quedó perfecta.",
            tags: ["Tecnología", "Limpieza"]
        }
    ],
    demoUser: {
        name: "dentalkō. Recepción",
        email: "contacto@dentalko.mx",
        whatsapp: "+528448272565"
    },
    features: {
        showGallery: true,
        showProducts: false,
        showTestimonials: true,
        showFAQ: true,
        showStats: true
    },
    gallery: [
        {
            title: "Consultorio Principal",
            category: "Instalaciones",
            image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Tecnología Digital",
            category: "Equipamiento",
            image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Área de Esterilización",
            category: "Seguridad",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Recepción",
            category: "Confort",
            image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=800&auto=format&fit=crop"
        }
    ],
    products: []
};