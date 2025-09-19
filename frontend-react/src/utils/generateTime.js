const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
};

export const generateTime = (time)=>{
    const date = new Date(time);
    return date.toLocaleString("en-NZ", options);
}
