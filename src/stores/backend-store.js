import { toast } from "react-toastify"

export const backendStore = (set, get) => ({
    data: {},
    verificationLoader: false,
    getGuestsData: async (data) => {
        set(() => ({
            verificationLoader: true
        }))
        try {
            const consult = await fetch(`${import.meta.env.VITE_BACKEND_URL}/getGuestsData`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const res = await consult.json()

            if (!res) {
                toast.error("Código incorrecto")
                return
            }

            const guest = {
                'guest_id': res.guest_id,
                'guest_name': res.guest_name,
                'guest_family': res.guest_family,
                'guest_family_number': res.guest_family_number ? res.guest_family_number : null,
                'guest_family_information': res.guest_family_information ? res.guest_family_information : null
            }

            set(state => ({
                data: {...state.data, 'guest_information': guest}
            }))

        } catch(error) {
            toast.error("Algo ha salido mal")
        } finally {
            set(() => ({
                verificationLoader: false
            }))            
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
    },
    sendSong: async (data) => {
        const song = {
            'suggsted_for': get().data.guest_information.guest_name,
            'name': data.songName,
            'artist': data.artistName,
            'album': data.albumName
        }
        const req = await fetch(`${import.meta.env.VITE_BACKEND_URL}/sendSong`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(song)
        })
        const res = await req.json()
        return res
    }
})