$("#owl-demo-1").owlCarousel({
    loop:true,
    nav: true,
    navText: [
        "<svg xmlns='http://www.w3.org/2000/svg' width='12' height='9' viewBox='0 0 12 9' fill='none'><path d='M10.9927 3.93746L1.97516 3.93746L5.03752 0.960126C5.26345 0.740468 5.26345 0.384401 5.03752 0.164743C4.81159 -0.0549145 4.44521 -0.0549145 4.21928 0.164743L0.169309 4.10227C-0.0566225 4.32193 -0.0566225 4.67814 0.169309 4.89766L4.21928 8.83519C4.33225 8.94502 4.48036 9 4.62848 9C4.77644 9 4.92456 8.94502 5.03752 8.83519C5.26345 8.61553 5.26345 8.25932 5.03752 8.03981L1.97516 5.06247L10.9927 5.06247C11.3122 5.06247 11.5713 4.81061 11.5713 4.49997C11.5713 4.18932 11.3122 3.93746 10.9927 3.93746Z' fill='white'/></svg>",
        "<svg xmlns='http://www.w3.org/2000/svg' width='12' height='9' viewBox='0 0 12 9' fill='none'>  <path d='M0.578568 5.06254H9.59613L6.53377 8.03987C6.30784 8.25953 6.30784 8.6156 6.53377 8.83526C6.7597 9.05491 7.12607 9.05491 7.35201 8.83526L11.402 4.89773C11.6279 4.67807 11.6279 4.32186 11.402 4.10234L7.35201 0.164814C7.23904 0.0549849 7.09093 0 6.94281 0C6.79485 0 6.64673 0.0549849 6.53377 0.164814C6.30784 0.384472 6.30784 0.740677 6.53377 0.960195L9.59613 3.93753H0.578568C0.259054 3.93753 0 4.18939 0 4.50003C0 4.81068 0.259054 5.06254 0.578568 5.06254Z' fill='white'/></svg>"
    ],
    margin:0,
    responsiveClass:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoWidth: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoHeight:true,
    dots: true,
    dotsEach: true,
    responsive:{
        0:{
          items:1,
          nav:true
        },
        575:{
            items:1,
            nav:true
        },
        991:{
            items:2,
            nav:true
        },
        1199:{
            items:3,
            nav:true
        }
    }
  });

  let currentToast = null;

  const closeCurrentToast = () => {
    if (currentToast) {
      currentToast.hide();
    }
  };
  
  const createToast = (triggerId, toastId) => {
    const toastTrigger = document.getElementById(triggerId);
    const toastLiveExample = document.getElementById(toastId);
    
    if (toastTrigger) {
      const toast = new bootstrap.Toast(toastLiveExample);
      toastTrigger.addEventListener('click', () => {
        closeCurrentToast(); // Закрыть текущий toast перед открытием нового
        currentToast = toast;
        toast.show();
      });
    }
  };
  
  createToast('liveToastBtn', 'liveToast');
  createToast('liveToastBtn2', 'liveToast2');
  createToast('liveToastBtn3', 'liveToast3');
  createToast('liveToastBtn4', 'liveToast4');