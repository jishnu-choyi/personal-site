import styles from "./skills.module.scss";
import AngularIcon from "../../assets/images/skill-logos/angular-icon-64.png";
import CIcon from "../../assets/images/skill-logos/c-icon-64.png";
import CordovaIcon from "../../assets/images/skill-logos/cordova-icon-64.png";
import CssIcon from "../../assets/images/skill-logos/css-icon-64.png";
import DevOpsIcon from "../../assets/images/skill-logos/devops-icon-64.png";
import DockerIcon from "../../assets/images/skill-logos/docker-icon-64.png";
import GcpIcon from "../../assets/images/skill-logos/gcp-icon-64.png";
import GitIcon from "../../assets/images/skill-logos/git-icon-64.png";
import GithubIcon from "../../assets/images/skill-logos/github-icon-64.png";
import GitlabIcon from "../../assets/images/skill-logos/gitlab-icon-64.png";
import HtmlIcon from "../../assets/images/skill-logos/html5-icon.png";
import JestJsIcon from "../../assets/images/skill-logos/jestjs-icon-64.png";
import JiraIcon from "../../assets/images/skill-logos/jira-icon-64.png";
import JsIcon from "../../assets/images/skill-logos/js-icon-64.png";
import K8sIcon from "../../assets/images/skill-logos/kubernetes-icon-64.png";
import MatlabIcon from "../../assets/images/skill-logos/matlab-icon-64.png";
import MongoDbIcon from "../../assets/images/skill-logos/mongodb-icon-64.png";
import NginxIcon from "../../assets/images/skill-logos/nginx-icon-64.png";
import NodeJsIcon from "../../assets/images/skill-logos/nodejs-icon-64.png";
import NodeJS2Icon from "../../assets/images/skill-logos/nodejs2-icon-64.png";
// import NvidiaRivaIcon from "../../assets/images/skill-logos/nvidia-riva-128.png";
import NvidiaRivaIcon from "../../assets/images/skill-logos/nvidia-riva-64.png";
import OpenGLIcon from "../../assets/images/skill-logos/opengl-icon-64.png";
import PhpIcon from "../../assets/images/skill-logos/php-icon-64.png";
import PostgreSqlIcon from "../../assets/images/skill-logos/postgresql-icon-64.png";
import PythonIcon from "../../assets/images/skill-logos/python-icon-64.png";
import ReactIcon from "../../assets/images/skill-logos/react-icon-64.png";
import ReduxIcon from "../../assets/images/skill-logos/redux-icon-64.png";
import SassIcon from "../../assets/images/skill-logos/sass-icon-64.png";
import SocketIcon from "../../assets/images/skill-logos/socket-icon-64.png";
import TailwindIcon from "../../assets/images/skill-logos/tailwind-icon-64.png";
import ThreeJsIcon from "../../assets/images/skill-logos/threejs-icon-64.png";
import TsIcon from "../../assets/images/skill-logos/ts-icon-64.png";
import WebGLIcon from "../../assets/images/skill-logos/webgl-icon-64.png";
import WebRTCIcon from "../../assets/images/skill-logos/webrtc-icon-64.png";

const skillMap = {
    js: {
        id: "js",
        label: "Javascript",
        searchTerms: "Java script",
        icon: JsIcon,
    },
    ts: {
        id: "ts",
        label: "Typescript",
        searchTerms: "type script",
        icon: TsIcon,
    },
    html: {
        id: "html",
        label: "HTML",
        searchTerms: "html5 html",
        icon: HtmlIcon,
    },
    css: { id: "css", label: "CSS", searchTerms: "css3", icon: CssIcon },
    tailwind: {
        id: "tailwind",
        label: "Tailwind CSS",
        searchTerms: "scss sass",
        icon: TailwindIcon,
    },
    sass: { id: "sass", label: "SCSS", searchTerms: "scss", icon: SassIcon },
    react: {
        id: "react",
        label: "React",
        searchTerms: "reactjs react-js nextjs next-js",
        icon: ReactIcon,
    },
    angular: {
        id: "angular",
        label: "Angular",
        searchTerms: "angularjs angular-js",
        icon: AngularIcon,
    },
    nodejs: {
        id: "nodejs",
        label: "Node.js",
        searchTerms: "Node Javascript js server Rest API express express.js",
        icon: NodeJsIcon,
    },
    mean: {
        id: "mean",
        label: "MEAN",
        searchTerms: "mean stack",
    },
    mern: {
        id: "mern",
        label: "MERN",
        searchTerms: "mern stack",
    },
    mongodb: {
        id: "mongodb",
        label: "MongoDB",
        searchTerms: "database backend mongo",
        icon: MongoDbIcon,
    },
    postgresql: {
        id: "postgresql",
        label: "PostgreSQL",
        searchTerms: "database backend postgres",
        icon: PostgreSqlIcon,
    },
    cordova: {
        id: "cordova",
        label: "Apache Cordova",
        searchTerms: "mobile app HTML/CSS/JS",
        icon: CordovaIcon,
    },
    threejs: {
        id: "threejs",
        label: "three.js",
        searchTerms: "WebGL 3D visualization games HTML5 GLSL OpenGL",
        icon: ThreeJsIcon,
    },
    webgl: {
        id: "webgl",
        label: "WebGL",
        searchTerms: "WebGL 3D visualization games HTML5 GLSL OpenGL",
        icon: WebGLIcon,
    },
    glsl: {
        id: "glsl",
        label: "GLSL (OpenGL)",
        searchTerms: "WebGL 3D visualization games HTML5 GLSL",
        icon: OpenGLIcon,
    },
    webrtc: {
        id: "webrtc",
        label: "WebRTC",
        searchTerms: "Video conference",
        icon: WebRTCIcon,
    },
    socket: {
        id: "socket",
        label: "WebSocket",
        searchTerms: "Streaming socketio socket.io",
        icon: SocketIcon,
    },
    firmwareC: {
        id: "firmwareC",
        label: "Firmware in C",
        searchTerms: "Embedded",
        icon: CIcon,
    },
    firmwareAssembly: {
        id: "firmwareAssembly",
        label: "Firmware in assembly language",
        searchTerms: "Embedded MEMs DSP Digital signal processing",
    },
    signalProcessing: {
        id: "signalProcessing",
        label: "Digital Signal Processing",
        searchTerms: "DSP",
    },
    devOps: {
        id: "devOps",
        label: "DevOps",
        searchTerms: "Google cloud GCP AWS",
        icon: DevOpsIcon,
    },
    gcp: {
        id: "gcp",
        label: "GCP",
        searchTerms: "Google cloud",
        icon: GcpIcon,
    },

    mlOps: {
        id: "mlOps",
        label: "MLOps",
        searchTerms: "Google cloud GCP VertexAI",
    },
    docker: {
        id: "docker",
        label: "Docker",
        searchTerms: "devops",
        icon: DockerIcon,
    },
    kubernetes: {
        id: "kubernetes",
        label: "Kubernetes (k8s)",
        searchTerms: "",
        icon: K8sIcon,
    },
    nvidiaRiva: {
        id: "nvidiaRiva",
        label: "Nvidia Riva",
        searchTerms: "",
        icon: NvidiaRivaIcon,
    },

    microservices: {
        id: "microservices",
        label: "Microservices architecture",
        searchTerms: "",
    },
    git: {
        id: "git",
        label: "Git",
        searchTerms: "version control guthub gitlab",
        icon: GitIcon,
    },
    github: {
        id: "github",
        label: "Github",
        searchTerms: "version control guthub gitlab",
        icon: GithubIcon,
    },
    gitlab: {
        id: "gitlab",
        label: "Gitlab",
        searchTerms: "version control guthub gitlab",
        icon: GitlabIcon,
    },
    jira: {
        id: "jira",
        label: "Jira",
        searchTerms: "Jira Agile Scrum",
        icon: JiraIcon,
    },
    agile: {
        id: "agile",
        label: "Agile/Scrym",
        searchTerms: "Jira Agile Scrum",
    },
    matlab: {
        id: "matlab",
        label: "Matlab",
        searchTerms: "",
        icon: MatlabIcon,
    },
    php: {
        id: "php",
        label: "PHP",
        searchTerms: "",
        icon: PhpIcon,
    },
    prototyping: {
        id: "prototyping",
        label: "Prototyping",
        searchTerms: "",
    },
    projectManagement: {
        id: "projectManagement",
        label: "Project Management",
        searchTerms: "",
    },
    vendorManagement: {
        id: "vendorManagement",
        label: "Project Management",
        searchTerms: "",
    },
    supplyChain: {
        id: "supplyChain",
        label: "Supply chain",
        searchTerms: "",
    },
    nginx: {
        id: "nginx",
        label: "Nginx",
        searchTerms: "nginx load balancer",
        icon: NginxIcon,
    },
    redux: {
        id: "redux",
        label: "Redux",
        searchTerms: "redux",
        icon: ReduxIcon,
    },
    python: {
        id: "python",
        label: "Python",
        searchTerms: "python",
        icon: PythonIcon,
    },
    cgpa: {
        id: "cgpa",
        label: "CGPA: 9.0/10",
        searchTerms: "",
    },
    physics: {
        id: "physics",
        label: "Minor in physics",
        searchTerms: "physics",
    },
    vlsi: {
        id: "vlsi",
        //label: "Micro-electronics & VLSI design (Masters specialization)",
        label: "Micro-electronics & VLSI design",
        searchTerms: "electronics ",
    },
    electrical: {
        id: "electrical",
        label: "Electrical Engg.",
        searchTerms: "",
    },
    robotics: {
        id: "robotics",
        label: "Robotics",
        searchTerms: "",
    },
    diy: {
        id: "diy",
        label: "DIY",
        searchTerms: "",
    },
    probono: {
        id: "probono",
        label: "Pro bono",
        searchTerms: "",
    },
    patent: {
        id: "patent",
        label: "Patent",
        searchTerms: "",
    },
    spreadSpectrum: {
        id: "spreadSpectrum",
        label: "Spread spectrum",
        searchTerms: "",
    },
    teacherTraining: {
        id: "teacherTraining",
        label: "Teacher Training",
        searchTerms: "",
    },
    fieldTest: {
        id: "fieldTest",
        label: "Field tests for games",
        searchTerms: "",
    },
    teaching: {
        id: "teaching",
        label: "Teaching",
        searchTerms: "",
    },
    compliance: {
        id: "compliance",
        label: "Regulatory compliance",
        searchTerms: "",
    },
    certifications: {
        id: "certifications",
        label: "Wireless certifications: CE, FCC & RED",
        searchTerms: "",
    },
};

function Skills(props) {
    const { skillIds } = props;
    const renderedSkills = skillIds.map((id, index) => {
        console.log("id=", id);
        const icon = skillMap[id]?.icon;
        return (
            <div key={id} className={styles.container}>
                {icon && <img src={icon} alt={id} />}
                <div>{skillMap[id]?.label || "Unknown"}</div>
            </div>
        );
    });
    return <div className={styles["list-container"]}>{renderedSkills}</div>;
}
export default Skills;
