import basicLightboxMin from 'basiclightbox';

export const Modal = () =>
  basicLightboxMin
    .create(
      `
<img width="1400" height="900" src="https://placehold.it/1400x900">
`
    )
    .show();
