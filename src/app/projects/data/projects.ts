import { techStackConfig } from "./techStackConfig";

// Sample project data - replace with your actual data source
export interface Project {
    name: string;
    description: string;
    stack: string[];
    problem: string;
    solution: string;
    role: string;
    ownership: string[];
    architecture: string[];
    challenges: { challenge: string; solution: string }[];
    deployment: string;
    outcomes: string[];
    lessons: string[];
    github: string | null;
    demo: string | null;
    featured: boolean;
    url: string;
}

export const projectsData: Record<string, Project> = {
    'healthcare-portal': {
        name: 'BlueCross BlueShield Tennessee Member Portal',
        description: 'Enterprise member benefits system built with Next.js frontend and Java REST services, deployed via Azure DevOps to RedHat OpenShift using modern DevOps practices.',
        stack: ['Next.js', 'TypeScript', 'Java', 'Spring Boot', 'SQL Server', 'OpenShift', 'Azure DevOps', 'Tekton', 'Docker', 'Helm', 'ArgoCD', 'Jest'],
        problem: 'Migrate an existing legacy patient portal from Java JSP Portlets on HCL/IBM WebSphere Portal to a modern, scalable architecture while ensuring HIPAA compliance and zero downtime. Introduce CIAM capabilities for secure user authentication and authorization for data access and consent management.',
        solution: 'Built a modern Next.js SPA with Server-Side Rendering for optimal performance, backed by scalable Java REST services. Implemented fully automated CI/CD pipeline using Azure DevOps, Tekton, Helm Charts, and ArgoCD for GitOps-based deployments to RedHat OpenShift.',
        role: 'Lead Full-Stack Developer & DevOps Engineer',
        ownership: [
            'Architected Next.js frontend application with App Router',
            'Designed and implemented Java REST API services',
            'Built complete CI/CD pipeline from source control to production',
            'Established GitOps workflow using ArgoCD and Helm',
            'Led migration from legacy system with zero downtime',
        ],
        architecture: [
            'Next.js App Router with TypeScript for type-safe frontend',
            'Java Spring Boot REST services with microservices architecture',
            'SQL Server for patient data with row-level security',
            'RedHat OpenShift container platform for orchestration',
            'Azure DevOps for source control, work tracking, and CI/CD',
            'Tekton pipelines for container builds and testing',
            'Helm charts for Kubernetes resource management',
            'ArgoCD for GitOps-based continuous deployment',
        ],
        challenges: [
            {
                challenge: 'Complex deployment pipeline coordination',
                solution: 'Designed and implemented a multi-stage GitOps pipeline as a greenfield initiative, requiring cross-team coordination with security, infrastructure, and platform teams. Orchestrated Azure Pipelines to trigger builds on Git commits, OpenShift Tekton to build and scan containers, Helm charts to package releases, and ArgoCD to monitor and deploy automatically. Configured secure integration across Azure DevOps, Git Enterprise, OpenShift, and container registry systems with encrypted secrets management, audit logging, and automated security scanning at every stage.',
            },
            {
                challenge: 'Existing systems did not contain CIAM capabilities requiring entire application restructure as part of migration efforts',
                solution: 'CIAM was placed at the forefront of the new architecture. This decision allowed for data processing and access to be managed external to the applications. By doing so, it enabled application development to be more focused on the core business logic that application required. More importantly, it allowed for more accurate logic migrations from existing applications to new applications while ensuring compliance with data access and consent management policies. It also provided a closer 1:1 mapping to existing systems so logic comparison and testing could be more easily accomplished and reduce defects during migration.',
            },
            {
                challenge: 'Multiple existing features were behind third-party vendor solutions that were entering end of contract periods during development efforts.',
                solution: 'Micro-frontends were developed to enable in-house development of replacement features. Developing in-house placed an initial burden on the team to support more things as part of Production Support, but by designing across microfrontends for those features, provided a path for future vendor tools to replace the functionality and thus eliminate the overhead.',
            },
            {
                challenge: 'Tech Familiarization and Adoption',
                solution: 'New technologies such as Next.js, OpenShift, Tekton, Helm, and ArgoCD were unfamiliar to many team members. Conducted knowledge sharing sessions, created documentation, and provided hands-on workshops to accelerate learning and adoption across the team.',
            },
        ],
        deployment: 'Azure DevOps manages source control and work items with Azure Pipeline YAML for CI/CD orchestration. Code commits trigger automated testing and push to Git Enterprise. OpenShift Tekton pipelines build Docker images, run security scans, and upload to secure container registry. Helm charts are updated with version tags and stored in Git. ArgoCD continuously monitors Helm chart repository and automatically syncs changes to OpenShift cluster, ensuring desired state matches Git repository (GitOps pattern).',
        outcomes: [
            'Successful migration from legacy portal to modern architecture with minimal downtime (Certain cut-over and architecture changes required brief maintenance windows)',
            'New deployment systems to enable multiple releases per week (were biweekly) with automated testing and security scans',
            'Reduced lead time for changes from weeks to days by enabling local development and automated deployments',
            'Complete integration of new CIAM system for secure user management',
            'Enhanced team collaboration and efficiency with automated workflows',
        ],
        lessons: [
            'Documentation analysis played a crucial role in understanding legacy system functionality, especially when original developers were unavailable. Investing time in thorough documentation review helped identify key features and workflows that needed to be replicated in the new system.',
            'Maintaining as close to a 1:1 mapping of existing functionality during migration efforts simplified testing and validation. This approach enabled quick identification of discrepancies between old and new systems, facilitating smoother transitions and reducing time to resolve defects.',
            'Early adoption and review by operations and production support teams ensured that new deployment and features aligned with operational requirements. Their insights helped shape deployment strategies and monitoring practices, leading to more reliable releases and quicker issue resolution post-deployment.',
            'Cross-functional collaboration between developers, DevOps engineers, QA, and business stakeholders was key to aligning technical solutions with business needs and ensuring successful delivery.',
            
        ],
        github: null,
        demo: null,
        featured: true,
        url: 'healthcare-portal',
    },
    'quilt-automation': {
        name: `Debbie's Quilts Order Automation`,
        description: 'Help a locally owned quilt maker automate their order intake and delivery scheduling system. Client is not tech-savvy, so solution needed to be user-friendly and low-maintenance.',
        stack: ['Google Forms', 'Zapier', 'QR-Code Generator'],
        problem: 'Client was receiving numerous orders via phone and email, leading to missed orders and scheduling conflicts. Needed a simple way to streamline order intake and automate delivery scheduling without requiring technical expertise from the client.',
        solution: `Created a Google Form for order intake that customers could access via a QR code. Integrated the form with Zapier to automatically create calendar events for pick-up and delivery scheduling. This allowed for immediate problem resolution while providing a platform for the client to expand their digital footprint/process when needed as the business grew. Since the business's primary audience were non-technical users, the solution prioritized ease of use for customers and minimal maintenance for the client.`,
        role: 'Solutions Architect & Developer',
        ownership: [
            'Designed user-friendly Google Form for order intake',
            'Set up Zapier integrations to automate calendar event creation',
            'Generated QR codes for easy customer access to the order form',
            'Provided training and documentation for client use',
        ],
        architecture: [
            'Google Forms for order intake',
            'Zapier for workflow automation',
            'QR-Code Generator for customer access',
        ],
        challenges: [
            {
                challenge: 'Non-technical client requirements',
                solution: 'Ensured all solutions were easy to use and required minimal maintenance. Provided clear documentation and training for the client.',
            },
            {
                challenge: 'Integration between Google Forms and calendar system',
                solution: 'Configured Zapier to connect Google Forms responses with calendar event creation, ensuring seamless automation.',
            },
        ],
        deployment: 'Google Forms and Zapier with automated workflow management. Monitoring through Zapier dashboard.',
        outcomes: [
            'Streamlined order intake process, reducing missed orders by 90%',
            'Provided a scalable solution that can grow with the business',
            'Provided more transparency into order and delivery status for both client and customers',
        ],
        lessons: [
            'Database optimization was crucial for user experience',
            'Incremental migration approach reduced risk',
            'User training sessions increased adoption rate',
        ],
        github: '',
        demo: '',
        featured: true,
        url: 'quilt-automation',
    },
    'untamed': {
        name: 'Untamed ARena',
        description: 'Battle with your Untamed Dinosaurs in Augmented Reality! Scan your physical Untamed dinosaur toys and bring them to life in AR to battle against opponents and friends in your real-world environment. A FREE augmented reality mobile game that combines physical collectibles with digital gameplay.',
        stack: ['Unity3D', 'C#', 'Azure PlayFab', 'ARCore', 'ARKit', 'Augmented Reality'],
        problem: 'Traditional collectible toys provided limited interactive experiences. Collectors wanted to bring their physical toys to life and engage with them beyond static display, creating a bridge between physical collectibles and digital gaming experiences.',
        solution: 'Developed an augmented reality mobile game using Unity3D that allows players to scan their physical Untamed dinosaur toys and use them to battle in AR within their real-world environment. Integrated Azure PlayFab to manage player data, inventories, and game progression, creating a seamless experience between physical and digital gameplay.',
        role: 'Game Developer & Backend Integration Specialist',
        ownership: [
            'Designed and implemented game UI systems in Unity3D',
            'Developed ability and visual FX systems for combat mechanics',
            'Integrated Azure PlayFab for player data management and inventory systems',
            'Created AR toy scanning functionality using ARCore/ARKit',
        ],
        architecture: [
            'Unity3D game engine with C# for cross-platform mobile development',
            'ARCore (Android) and ARKit (iOS) for augmented reality features',
            'Azure PlayFab for backend services, player data, and inventory management',
            'Real-time battle system with visual effects and abilities',
        ],
        challenges: [
            {
                challenge: 'AR toy recognition and tracking',
                solution: 'Implemented computer vision techniques to accurately scan and recognize physical toys, then map them to their digital AR counterparts with proper scaling and positioning in the user\'s environment.',
            },
            {
                challenge: 'Cross-platform AR performance',
                solution: 'Optimized visual effects and rendering pipeline in Unity to maintain smooth performance across both ARCore and ARKit platforms while delivering high-quality AR experiences.',
            },
            {
                challenge: 'Player data synchronization',
                solution: 'Leveraged Azure PlayFab\'s cloud services to manage player inventories, battle statistics, and progression data, ensuring reliable sync across devices and sessions.',
            },
        ],
        deployment: 'Deployed to Apple App Store and Google Play Store. Azure PlayFab manages backend infrastructure with automatic scaling for player data and matchmaking services.',
        outcomes: [
            'Successfully launched cross-platform AR game on iOS and Android',
            'Created engaging bridge between physical collectibles and digital gameplay',
            'Delivered smooth AR experience with real-time visual effects and combat',
            'Established scalable backend infrastructure for player data management',
        ],
        lessons: [
            'AR technology requires careful performance optimization for mobile devices',
            'Backend-as-a-Service solutions like PlayFab accelerate development and reduce infrastructure complexity',
            'Physical-to-digital experiences create unique engagement opportunities',
            'Unity\'s cross-platform capabilities are essential for mobile AR development',
        ],
        github: null,
        demo: 'https://apps.apple.com/us/app/untamed-arena/id1408843139',
        featured: false,
        url: 'untamed',
    },
    'api-modernization': {
        name: 'Legacy API Modernization',
        description: 'Migrated monolithic REST API to microservices architecture with improved performance.',
        stack: ['Node.js', 'Express', 'Docker', 'CI/CD', 'Jest'],
        problem: 'Monolithic API was difficult to maintain, deploy, and scale. Single point of failure affected entire system.',
        solution: 'Incrementally extracted services into microservices while maintaining backward compatibility with existing clients.',
        role: 'Backend Developer',
        ownership: [
            'Analyzed monolith and identified service boundaries',
            'Built migration strategy and timeline',
            'Implemented new microservices',
            'Maintained API compatibility during transition',
        ],
        architecture: [
            'Microservices architecture with domain-driven design',
            'Node.js with Express for each service',
            'Message queue for inter-service communication',
            'API Gateway for routing and authentication',
            'Docker Compose for local development',
        ],
        challenges: [
            {
                challenge: 'Zero-downtime migration',
                solution: 'Implemented strangler fig pattern, routing traffic gradually to new services.',
            },
            {
                challenge: 'Data consistency across services',
                solution: 'Used event sourcing and saga pattern for distributed transactions.',
            },
        ],
        deployment: 'Kubernetes cluster with automated scaling based on load. CI/CD pipeline with automated testing and canary deployments.',
        outcomes: [
            'Reduced deployment time from 2 hours to 15 minutes',
            '40% improvement in API response times',
            'Independent service scaling reduced infrastructure costs by 25%',
            'Increased development team velocity',
        ],
        lessons: [
            'Incremental migration was key to managing risk',
            'Service boundaries should align with business domains',
            'Comprehensive monitoring essential for distributed systems',
        ],
        github: 'https://github.com/bradencarter/api-modernization',
        demo: null,
        featured: true,
        url: 'api-modernization',
    },
};

export default projectsData;