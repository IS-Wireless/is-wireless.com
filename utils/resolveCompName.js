export default function resolveCompName(name){

    let words = name.split('_')
    let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    let resolvedName = capitalizedWords.join('');
  
  return resolvedName;
}