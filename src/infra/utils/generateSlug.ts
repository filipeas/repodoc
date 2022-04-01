export function generateSlug(title: string, withId = false): string {
    let slug = title.replace(/^\s+|\s+$/g, '').toLowerCase();

    // remove accents, swap ñ for n, etc
    const from = 'åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;';
    const to = 'aaaaaaeeeeiiiioooouuuunc------';

    for (let i = 0, l = from.length; i < l; i += 1) {
        slug = slug.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    slug = slug
        .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    if (withId) {
        return `${slug}-${Date.now()}`;
    }

    return slug;
}
