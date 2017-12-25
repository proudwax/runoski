block('contacts')(
    elem('phone')(
        tag()('a'),

        content()('+7(495)987-65-43'),

        addAttrs()(_ => {
            return {
                href: 'tel:+79459876543'
            };
        })
    ),

    elem('email')(
        tag()('a'),

        content()('info@runoski.ru'),

        addAttrs()(_ => {
            return {
                href: 'emailto:info@runoski.ru'
            };
        })
    )
)
