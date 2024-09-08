import React from 'react';

const containerClasses = "flex flex-col bg-zinc-900 items-center justify-center py-24 px-4 sm:px-6 lg:px-8";
const sharedClasses = {
    textColor: 'text-zinc-900 dark:text-zinc-100',
    textSecondaryColor: 'text-zinc-500 dark:text-zinc-400',
    textTertiaryColor: 'text-zinc-600 dark:text-zinc-400',
    bgPrimaryColor: 'bg-zinc-100 dark:bg-zinc-900',
    maxWidth: 'max-w-7xl',
    marginAuto: 'mx-auto',
    paddingX: 'px-4 sm:px-6 lg:px-8',
    textAlignCenter: 'text-center',
    marginY: 'my-20',
    gridCols: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    gap: 'gap-8',
    spaceY: 'space-y-4',
    imgSize: 'h-64 w-64',
    roundedFull: 'rounded-full',
};

const MissionSection = () => {
    return (
        <>
            <div className={containerClasses}>
            <h2 className={` underline underline-offset-4 text-4xl font-bold ${sharedClasses.textColor}`}>OUR MISSION</h2>
                <p className={`mt-10 text-xl leading-10 max-w-5xl text-center py-10 ${sharedClasses.textTertiaryColor}`}>
                Our mission is to provide drivers with the tools and knowledge to measure and improve their reaction times, making roads safer for everyone. By helping drivers react faster to unexpected events, we aim to reduce accidents and save lives. We offer easy-to-use tests and resources to help drivers understand and enhance their reaction times. With the right tools and information, we believe everyone can become a better driver. By focusing on reaction times, we strive to make every journey safer and increase driver confidence.
                </p>
            </div>
        </>
    );
};

export default MissionSection;