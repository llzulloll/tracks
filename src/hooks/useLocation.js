import { useEffect, useState } from "react";
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);
    const [subscriber, setSubscriber] = useState(null);

    const startWatching = async () => {
        try {
            const { granted } = await requestForegroundPermissionsAsync();
            const sub = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            },
                callback
            );

            setSubscriber(sub);

            if (!granted) {
                throw new Error('Location permission not granted');
            }
        } catch (err) {
            setErr(err);
        }
    };


    useEffect(() => {
        if (shouldTrack) {
            startWatching();
        } else {
            //stop
            subscriber.remove();
            setSubscriber(null);
        }
    }, [shouldTrack]);

    return [err];
};