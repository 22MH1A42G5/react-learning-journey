
export const getAllMemes = async() => {
    const response = fetch('https://api.imgflip.com/get_memes');
    return (await response).json();
}