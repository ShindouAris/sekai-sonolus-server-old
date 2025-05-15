export const configurationOptions = {
    spoilers: {
        name: {},
        required: false,
        type: 'multi',
        values: {
            music: { title: {}, def: false },
            card: { title: {}, def: false },
        },
    },
};
export const updateConfigurationOptions = (repository) => {
    configurationOptions.spoilers.name = repository.commonTexts.spoilerContent;
    configurationOptions.spoilers.values.music.title = repository.commonTexts.music;
    configurationOptions.spoilers.values.card.title = repository.commonTexts.card;
};
