/**
 * Umschalten zwischen Nav-Tabs.
 */
$('body').on('click', '.tab__control a', function (event) {
	const target = $(event.currentTarget).attr('href');
	if (!target || (target.indexOf('#') !== 0 && target.indexOf('.') !== 0)) {
		return;
	}

	const tabContent = $(target);
	if (tabContent.length === 0 || !tabContent.hasClass('tab__container')) {
		return;
	}

	// aktiven Tab markieren
	const tabControl = $(event.currentTarget).closest('.tab__control');
	tabControl.siblings('.tab__control').removeClass('tab__control--active');
	tabControl.addClass('tab__control--active');

	// Tab-Content switchen
	tabContent.siblings('.tab__container').not('.tab__container--is-hidden').addClass('tab__container--is-hidden');
	tabContent.removeClass('tab__container--is-hidden');

	return false;
});

/**
 * Auf- und zuklapp-Funktion für Collapsibles / Akkordeon-Menüs.
 */
$('body').on('click', '[data-toggle=collapse]', function (event) {
	const target = $(event.currentTarget).attr('href') || $(event.currentTarget).data('target');
	if (!target) {
		return;
	}

	const $target = $(target);
	if ($target.length === 0) {
		return;
	}

	if ($target.hasClass('collapse')) {
		$target.removeClass('collapse');
	} else {
		$target.addClass('collapse');
	}
});