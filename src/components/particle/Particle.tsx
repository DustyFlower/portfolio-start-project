import {useEffect, useMemo, useState} from 'react';
import Particles, {initParticlesEngine} from '@tsparticles/react';
import {
    Container,
    ISourceOptions,
    MoveDirection,
    OutMode,
} from '@tsparticles/engine';

import {loadFull} from 'tsparticles'; // if you are going to use `loadFull`, install the "tsparticles" package too.

export const Particle = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadFull(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            /*background: {
                color: {
                    value: '#0d47a1',
                },
            },*/
            fpsLimit: 120,
            interactivity: {
                events: {
                    /*onClick: {
                        enable: true,
                        mode: 'push',
                    },*/
                    onHover: {
                        enable: true,
                        mode: 'repulse',
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: '#ffffff',
                },
                links: {
                    color: '#ffffff',
                    distance: 200,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: MoveDirection.none,
                    enable: true,
                    outModes: {
                        default: OutMode.out,
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true
                    },
                    value: 65,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: 'circle',
                },
                size: {
                    value: {min: 1, max: 3},
                },
            },
            detectRetina: true,
        }),
        [],
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
            />
        );
    }

    return <></>;
};