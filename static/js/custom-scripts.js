document.addEventListener("DOMContentLoaded", function() {
	var disqus = document.getElementById("disqus_thread");
	if (!disqus || !window.MutationObserver) {
		return;
	}

	var observer = new MutationObserver(function() {
		var iframes = disqus.getElementsByTagName("iframe");
		if (iframes.length > 1) {
			var commentsIframe = iframes[1];
			while (disqus.firstChild) {
				disqus.removeChild(disqus.firstChild);
			}
			disqus.appendChild(commentsIframe);
			observer.disconnect();
		}
	});

	observer.observe(disqus, { childList: true, subtree: true });
});