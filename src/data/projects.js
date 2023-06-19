import UIImage2 from '../assets/ui-project-2.jpg';
import AirAwareCover from '../assets/screenshots/airaware/cover.png';
import HidayaCover from '../assets/screenshots/hidaya/cover.png';
import SerCover from '../assets/screenshots/ser/cover.png';
import AAAndroidBatchPredictScreen from '../assets/screenshots/airaware/android/batch-predict-screen.jpg';
import AAAndroidDashboardScreen from '../assets/screenshots/airaware/android/dashboard-screen.jpg';
import AAAndroidSinglePredictResultScreen from '../assets/screenshots/airaware/android/single-predict-result-screen.png';
import AAAndroidSinglePredictScreen from '../assets/screenshots/airaware/android/single-predict-screen.jpg';
import AASystemArchitecture from '../assets/screenshots/airaware/other/system-architecture.png';
import AAWebAboutUsScreen from '../assets/screenshots/airaware/web/about-us-screen.png';
import AAWebBatchPredictResultScreen from '../assets/screenshots/airaware/web/batch-predict-result-screen.png';
import AAWebBatchPredictScreen from '../assets/screenshots/airaware/web/batch-predict-screen.png';
import AAWebDashboardScreen from '../assets/screenshots/airaware/web/dashboard-screen.png';
import AAWebSinglePredictScreen from '../assets/screenshots/airaware/web/single-predict-screen.png';
import HidayaAthkarScreen from '../assets/screenshots/hidaya/athkar-screen.png';
import HidayaHomeScreen from '../assets/screenshots/hidaya/home-screen.png';
import HidayaMoreScreen from '../assets/screenshots/hidaya/more-screen.png';
import HidayaPrayersScreen from '../assets/screenshots/hidaya/prayers-screen.png';
import HidayaQiblaScreen from '../assets/screenshots/hidaya/qibla-screen.png';
import HidayaQuranScreen from '../assets/screenshots/hidaya/quran-screen.png';
import HidayaRecitationsScreen from '../assets/screenshots/hidaya/recitations-screen.png';
import HidayaSettingsScreen from '../assets/screenshots/hidaya/settings-screen.png';
import SerAESScreen from '../assets/screenshots/ser/aes-screen.jpg';
import SerHomeScreen from '../assets/screenshots/ser/home-screen.jpg';
import SerKeyStoreScreen from '../assets/screenshots/ser/key-store-screen.jpg';
import SerKeysScreen from '../assets/screenshots/ser/keys-screen.jpg';
import SerRSAScreen from '../assets/screenshots/ser/rsa-screen.jpg';
import {Technologies as Tech} from "./technologies";

export const Projects = [
    {
        id: 1,
        title: 'AirAware',
        category: 'Machine Learning',
        description: 'A machine learning project that predicts flight delays in Saudi Arabia, Includes many components such as a Web application and a native Android application allowing users to access the machine learning model service.\nIt is a group project (graduation project).',
        tags: ['Data Science', 'Machine Learning', 'Python'],
        technologies: ['Python', 'FastAPI', 'React', 'Kotlin', 'Jetpack Compose', 'MVVM', 'Hilt', 'Retrofit'],
        cover: AirAwareCover,
        images: []
    },
    {
        id: 1.1,
        title: 'AirAware Machine Learning',
        category: 'Machine Learning',
        description: 'A machine learning project that predicts flight delays in Saudi Arabia, Includes many components such as a Web application and a native Android application allowing users to access the machine learning model service.\nIt is a group project (graduation project).',
        tags: ['Data Science', 'Machine Learning', 'Python'],
        technologies: [Tech.Android, Tech.Python],
        cover: AirAwareCover,
        images: [AASystemArchitecture]
    },
    {
        id: 1.2,
        title: 'AirAware Web Application',
        category: 'Web Application',
        description: '',
        tags: ['UI', 'Frontend', 'Backend', 'React', 'FastAPI'],
        technologies: [Tech.Android, Tech.Python],
        cover: AAWebSinglePredictScreen,
        images: [AAWebSinglePredictScreen, AAWebDashboardScreen, AAWebBatchPredictScreen, AAWebBatchPredictResultScreen, AAWebAboutUsScreen]
    },
    {
        id: 1.3,
        title: 'AirAware Mobile Application',
        category: 'Mobile Application',
        description: '',
        tags: ['Android', 'Kotlin', 'Jetpack Compose', 'MVVM', 'Hilt', 'Retrofit'],
        technologies: [Tech.Android, Tech.Python],
        cover: AAAndroidSinglePredictScreen,
        images: [AAAndroidSinglePredictScreen, AAAndroidSinglePredictResultScreen, AAAndroidBatchPredictScreen, AAAndroidDashboardScreen]
    },
    {
        id: 2,
        title: 'Hidaya',
        category: 'Mobile Application',
        description: 'A native Android app originally developed with Java and XML, then migrated to Kotlin and Jetpack Compose, using MVVM architecture, Dagger Hilt, and many other technologies.\nAround 15k lines of code, 2000+ users.',
        tags: ['Android', 'Kotlin', 'Jetpack Compose', 'MVVM', 'Hilt'],
        technologies: [Tech.Android, Tech.Kotlin, Tech.JetpackCompose, Tech.MVVM, Tech.Hilt],
        cover: HidayaCover,
        images: [HidayaHomeScreen, HidayaPrayersScreen, HidayaQuranScreen, HidayaAthkarScreen, HidayaQiblaScreen, HidayaRecitationsScreen, HidayaSettingsScreen, HidayaMoreScreen]
    },
    {
        id: 3,
        title: 'Ser',
        category: 'Mobile Application',
        description: 'A native Android app that allows you to encrypt and decrypt text and files using AES and RSA, it also includes a public repository for users to share their public keys.',
        tags: ['Android', 'Kotlin', 'Jetpack Compose', 'MVVM', 'Hilt'],
        technologies: [Tech.Android],
        cover: SerCover,
        images: [SerHomeScreen, SerAESScreen, SerRSAScreen, SerKeysScreen, SerKeyStoreScreen]
    },
    {
        id: 4,
        title: 'KSA-Map',
        category: 'Desktop Application',
        description: 'A windows application implemented using Python, with an interactive map GUI, it solves the Traveling salesman problem for 153 cities in Saudi Arabia using the algorithms: Breadth First Search (BFS), Uniform Cost Search (UCS), Iterative Deepening Search (IDS), Greedy Algorithm, A star Algorithm, Hill Climbing, Simulated Annealing, Genetic Algorithm.',
        tags: ['Desktop', 'Python', 'PyQt5', 'DFS', 'BFS', 'UCS', 'IDS', 'Greedy Algorithm', 'A*', 'Hill Climbing', 'Simulated Annealing', 'Genetic Algorithm'],
        technologies: [Tech.Python],
        cover: UIImage2,
        images: []
    }
];