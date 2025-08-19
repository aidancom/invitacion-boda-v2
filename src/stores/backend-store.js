export const backendStore = (set, get) => ({
    data: {},
    getGuestsData: async (data) => {
        try {
            const consult = await fetch(`${import.meta.env.VITE_BACKEND_URL}/getGuestsData`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const res = await consult.json()

            const guest = {
                'guest_id': res[0].guest_id,
                'guest_name': res[0].guest_name,
                'guest_family': res[0].guest_family,
                'guest_family_number': res[0].guest_family_number ? res[0].guest_family_number : null,
                'guest_family_information': res[0].guest_family_information ? res[0].guest_family_information : null
            }

            set(state => ({
                data: {...state.data, 'guest_information': guest}
            }))

        } catch(error) {
            console.log(error)
        }

        
    }
})