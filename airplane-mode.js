const elementsToRemove = "[id^=topnews_main_stream]";

const removeNode = node => node.parentNode.removeChild(node);

document.querySelectorAll(elementsToRemove).forEach(removeNode);
