export const saveThresherToDisk = () => async (
dispatch: ({}) => any,
getState: () => { thresher: [] }
) => {
showSaveDialog((filename: string = "") => {
if (filename) {
writeFile(filename, JSON.stringify(getState().regions), e => {
 if (e) {
 window.console.log(`ERROR SAVING ${filename}`, e);
 } else {
 notifier.notify({
 title: "Thresher",
 message: `Thresher saved to ${filename}`
 });
 }
});
}
});
};
