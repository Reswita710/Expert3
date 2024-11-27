const DrawerInitiator = {
  init({ button, drawer, content }) {
    const eventListeners = ['click', 'keypress'];
    eventListeners.forEach((eventListener) => {
      this._eventListenerInitiator({ button, drawer, content }, eventListener);
    });
  },

  _eventListenerInitiator({ button, drawer, content }, eventListener) {
    button.addEventListener(eventListener, (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener(eventListener, (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
