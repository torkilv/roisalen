
function SpeakerQueue() {

    // this is just a simple wrapping around an array

    this.list = {};
    this.next = next;
    this.add = add;
    this.countSpeakers = 0;
    this.nextSpeaker = 0;
    this.view = new this.SpeakerListView(document.getElementById("myList"));

    function add(who) {
        this.list[this.countSpeakers] = who;
        this.view.drawSpeaker(who, this.countSpeakers);
        this.countSpeakers++;

    }

    function next() {
        this.view.undrawSpeaker(this.nextSpeaker);
        this.remove(this.nextSpeaker)
        this.nextSpeaker++;
    }

    function remove(number) {
        this.view.undrawSpeaker(number);
        if (!(delete this.list[number])) {
            console.log("Error: "+who+" not in list");
        }
    }

    function size() {
        return Object.keys(_speakersList).length;
    }

}
