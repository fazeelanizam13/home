import ReactGA from 'react-ga';

export default function useEventTracker() {
  const eventTracker = (action, label) => {
    ReactGA.event({ action, label });
  };

  return eventTracker;
}
