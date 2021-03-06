module.exports = {
    aor: {
        action: {
            delete: 'Radera',
            show: 'Visa',
            list: 'Lista',
            save: 'Spara',
            create: 'Skapa',
            edit: 'Redigera',
            cancel: 'Avbryt',
            refresh: 'Ladda om',
            add_filter: 'Lägg till filter',
            remove_filter: 'Ta bort filter',
        },
        boolean: {
            true: 'Ja',
            false: 'Nej',
        },
        page: {
            list: '%{name} Lista',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: 'Skapa %{name}',
            delete: 'Radera %{name} #%{id}',
            dashboard: 'Överblick',
        },
        input: {
            image: {
                upload_several: 'Drag och släpp filer för att ladda upp, eller klicka för att välja filer.',
                upload_single: 'Drag och släpp en fil för att ladda upp, eller klicka för att välja fil',
            },
        },
        message: {
            yes: 'Ja',
            no: 'Nej',
            are_you_sure: 'Är du säker?',
            about: 'Om',
        },
        navigation: {
            no_results: 'Inga resultat hittades',
            page_out_of_boundaries: 'Sidnummer %{page} utanför spannet',
            page_out_from_end: 'Kan inte besöka sida efter sista sidan',
            page_out_from_begin: 'Kan inte besöka sida före första sidan',
            page_range_info: '%{offsetBegin}-%{offsetEnd} av %{total}',
            next: 'Nästa',
            prev: 'Föregående',
        },
        auth: {
            username: 'Användarnamn',
            password: 'Lösenord',
            sign_in: 'Logga in',
            sign_in_error: 'Inloggning misslyckades, försök gärna igen',
            logout: 'Logga ut',
        },
        notification: {
            updated: 'Objekt uppdaterat',
            created: 'Objekt skapat',
            deleted: 'Objekt raderat',
            item_doesnt_exist: 'Objektet hittas inte',
            http_error: 'Kommunikationsfel med servern',
        },
        validation: {
            required: 'Obligatorisk',
            minLength: 'Måste vara minst %{min} tecken',
            maxLength: 'Måste vara max %{max} tecken',
            minValue: 'Måste vara minst %{min}',
            maxValue: 'Måste vara max %{max}',
            number: 'Måste vara ett nummer number',
            email: 'Måste vara en giltig e-postadress',
        },
    },
};
