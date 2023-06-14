import styles from "./skills.module.scss";

const skillMap = {
    js: { id: "js", label: "Javascript", searchTerms: "Java script" },
    ts: { id: "ts", label: "Typescript", searchTerms: "type script" },
    react: {
        id: "react",
        label: "React",
        searchTerms: "reactjs react-js nextjs next-js",
    },
    angular: {
        id: "angular",
        label: "Angular",
        searchTerms: "angularjs angular-js",
    },
};

function Skills(props) {
    const { skillIds } = props;
    const renderedSkills = skillIds.map((id, index) => {
        return (
            <div key={id} className={styles.container}>
                {skillMap[id].label}
            </div>
        );
    });
    return <div className={styles["list-container"]}>{renderedSkills}</div>;
}
export default Skills;
