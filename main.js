var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer .tabPanel");
function showPanel(panelIndex, colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor=" ";
        node.style.Color=" ";
});
tabButtons[panelIndex].style.backgroundColor=colorCode;
tabButtons[panelIndex].style.Color="white";
tabPanels.forEach(function(node){
    node.style.display="none";
});
}