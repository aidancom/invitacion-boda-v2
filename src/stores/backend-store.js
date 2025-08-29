export const backendStore = (set, get) => ({
    data: {},
    getGuestsData: async (data) => {
        console.log(data)
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

        
    },
    updateGuestDB: async (next, guest) => {
        set(() => ({
            confirmLoader: true
        }))
        const data = {
            'actual_guest': guest,
            'update_guest': next,
            'guest_code': get().data.guest_information.guest_id
        }
        try {

            const req = await fetch(`${import.meta.env.VITE_BACKEND_URL}/updateGuest`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const res = req.json()
            get().getGuestsData({code: get().data.guest_information.guest_id});

        } catch(error) {
            console.log(error)
        }
        finally {
            set(() => ({
                confirmLoader: false
            }))
            get().getGuestsData({code: get().data.guest_information.guest_id});
        }
    }
})