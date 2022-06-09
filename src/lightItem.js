const gridBoxes = document.querySelectorAll('.grid__box');
export const lightItem = () => {
	gridBoxes.forEach((el, idx) => {
		gridBoxes[idx].onmouseover = function(event) {
			const { target } = event;
				if (target.className.includes('grid__box-link--more')) {
					this.querySelectorAll('.grid__box-link').forEach(el => el.classList.add('grid__box-link--more'));
					target.classList.remove('grid__box-link--more');
				}
			}
	})
}