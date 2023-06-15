export const getMonthAndYear = (dt) => {
    return `${dt.toLocaleString("en-US", {
        month: "short",
    })} '${dt.toLocaleString("en-US", { year: "2-digit" })}`;
};
export const formatDuration = (startDate, endDate) => {
    const duration =
        (endDate.getTime() - startDate.getTime()) / (24 * 3600 * 1000);
    let years = Math.floor(duration / 365);
    let months = Math.floor((duration % 365) / 30);
    if (months === 12) {
        months = 0;
        years++;
    }
    let yrStr = years > 0 ? `${years} year${years > 1 ? "s" : ""}` : ``;
    let moStr =
        months > 0
            ? `${years > 0 ? " " : ""}${months} month${months > 1 ? "s" : ""}`
            : ``;

    return yrStr + moStr;
};
