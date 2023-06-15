import NusLogo from "../../assets/images/logos/nus/nus_logo_full-horizontal.jpeg";

export const nusData = {
    id: "nus",
    itemType: "education",

    headerLabel: "Education > Exchange program",
    url: "https://nus.edu.sg/",
    urlLabel: "nus.edu.sg",

    image: NusLogo,
    title: "Exchange Student at National University of Singapore (NUS)",
    brief: "Selected based on academic performance",
    startDate: new Date("1 Jul 2008"),
    endDate: new Date("31 Dec 2008"),
    skillIds: ["electrical", "physics"],
};

function NusHighlights() {
    return <div></div>;
}

export default NusHighlights;
