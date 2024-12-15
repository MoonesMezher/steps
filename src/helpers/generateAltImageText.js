const generateAltImageText = (path) => {
    // Extract the file name from the path
    const fileName = path.split('/').pop().split('.')[0];
    
    // Convert the file name to alt text
    const altText = fileName.replace(/[-_]/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
    
    return altText;
}

export default generateAltImageText;