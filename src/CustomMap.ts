export interface IMappable {
    location: {
        lat: number,
        lng: number,
    },
    markerContent():string,
};

export class CustomMap {
    private map: google.maps.Map;
    constructor(public id: string) {
        this.map = new google.maps.Map(document.getElementById(id), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            }
        });
    }
    addMarker(mappable: IMappable) {
        const marker = new google.maps.Marker({
            map: this.map,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            }
        });
        marker.addListener('click',()=>{
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent(),
            });
            infoWindow.open(this.map,marker);

        })
    }
}