export function getServerPreviewName(serverName: string) {
  const splitedName = serverName.split(" ");
  let letterForEachWord = "";
  splitedName.forEach((name) => {
    letterForEachWord += name.at(0);
  });

  return letterForEachWord.substring(0, 4);
}
