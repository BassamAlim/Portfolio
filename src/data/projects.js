import UIImage2 from '../assets/ui-project-2.jpg';
import AirAwareCover from '../assets/screenshots/airaware/cover.png';
import AirAwareWebSinglePredictScreen from '../assets/screenshots/airaware/web/single-predict-screen.png';
import AirAwareAndroidSinglePredictScreen from '../assets/screenshots/airaware/android/single-predict-screen.jpg';
import HidayaCover from '../assets/screenshots/hidaya/cover.png';
import SerCover from '../assets/screenshots/ser/cover.png';

export const projectsData = [
    {
        id: 1,
        title: 'AirAware',
        category: 'Machine Learning',
        description: 'A machine learning project that predicts flight delays in Saudi Arabia, Includes many components such as a Web application and a native Android application allowing users to access the machine learning model service.\nIt is a group project (graduation project).',
        cover: AirAwareCover,
        tags: ['Data Science', 'Machine Learning', 'Python'],
        mainProject: true,
        subProjects: [2, 3, 4]
    },
    {
        id: 2,
        title: 'AirAware Machine Learning',
        category: 'Machine Learning',
        description: 'A machine learning project that predicts flight delays in Saudi Arabia, Includes many components such as a Web application and a native Android application allowing users to access the machine learning model service.\nIt is a group project (graduation project).',
        cover: AirAwareCover,
        tags: ['Data Science', 'Machine Learning', 'Python'],
        mainProject: false,
        subProjects: []
    },
    {
        id: 3,
        title: 'AirAware Web Application',
        category: 'Web Application',
        description: '',
        cover: AirAwareWebSinglePredictScreen,
        tags: ['UI', 'Frontend', 'Backend', 'React', 'FastAPI'],
        mainProject: false,
        subProjects: []
    },
    {
        id: 4,
        title: 'AirAware Mobile Application',
        category: 'Mobile Application',
        description: '',
        cover: AirAwareAndroidSinglePredictScreen,
        tags: ['Android', 'Kotlin', 'Jetpack Compose', 'MVVM', 'Hilt', 'Retrofit'],
        mainProject: false,
        subProjects: []
    },
    {
        id: 5,
        title: 'Hidaya',
        category: 'Mobile Application',
        description: 'A native Android app originally developed with Java and XML, then migrated to Kotlin and Jetpack Compose, using MVVM architecture, Dagger Hilt, and many other technologies.\nAround 15k lines of code, 2000+ users.',
        cover: HidayaCover,
        tags: ['Android', 'Kotlin', 'Jetpack Compose', 'MVVM', 'Hilt'],
        mainProject: true,
        subProjects: []
    },
    {
        id: 6,
        title: 'Ser',
        category: 'Mobile Application',
        description: 'A native Android app that allows you to encrypt and decrypt text and files using AES and RSA, it also includes a public repository for users to share their public keys.',
        cover: SerCover,
        tags: ['Android', 'Kotlin', 'Jetpack Compose', 'MVVM', 'Hilt'],
        mainProject: true,
        subProjects: []
    },
    {
        id: 7,
        title: 'KSA-Map',
        category: 'Desktop Application',
        description: 'A windows application implemented using Python, with an interactive map GUI, it solves the Traveling salesman problem for 153 cities in Saudi Arabia using the algorithms: Breadth First Search (BFS), Uniform Cost Search (UCS), Iterative Deepening Search (IDS), Greedy Algorithm, A star Algorithm, Hill Climbing, Simulated Annealing, Genetic Algorithm.',
        cover: UIImage2,
        tags: ['Desktop', 'Python', 'PyQt5', 'DFS', 'BFS', 'UCS', 'IDS', 'Greedy Algorithm', 'A*', 'Hill Climbing', 'Simulated Annealing', 'Genetic Algorithm'],
        mainProject: true,
        subProjects: []
    }
];