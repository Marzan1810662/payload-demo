export const richTextContent = (arr:any) =>{
    console.log(arr);
    let text = ''
    arr?.forEach((item:any) => {
        if (item?.children){
            text += richTextContent(item.children)
        }
        else{
            text += item.text
        }

    })
    return text
}