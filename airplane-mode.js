const elementsToRemove =
  "#stories_pagelet_rhc," +
  "#pagelet_reminders" +
  ".jewelCount" +
  "[id^=topnews_main_stream]";

const removeNode = node => node.parentNode.removeChild(node);

document.querySelectorAll(elementsToRemove).forEach(removeNode);
