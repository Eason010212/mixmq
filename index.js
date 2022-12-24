class MQTTPacket{
    constructor(){
        this.packetType = 0;
    }
}

class MQTT3Packet extends MQTTPacket{
    constructor(){
        super();
        this.packetType = 1;
    }
}

class MQTT4Packet extends MQTT3Packet{
    constructor(){
        super();
        this.packetType = 2;
    }
}

class MQTT5Packet extends MQTTPacket{
    constructor(){
        super();
        this.packetType = 2;
    }
}