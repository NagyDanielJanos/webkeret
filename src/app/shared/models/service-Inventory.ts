

export interface ServiceFields {
    category :string,
    description :string,
    endDate : string,
    feature : Feature [],
    hasStarted :boolean,
    href : string,
    id :string,
    isBundle : boolean,
    isServiceEnabled : boolean,
    isStateful : boolean,
    name : string,
    note : Note [],
    place : RelatedPlaceRefOrValue [],
    relatedEntity : RelatedEntityRefOrValue [],
    relatedParty : RelatedParty [],
    serviceCharacteristic : Characteristic [],
    serviceDate : string,
    serviceOrderItem : RelatedServiceOrderItem [],
    serviceRelationship : ServiceRelationship [],
    serviceSpecification : ServiceSpecificationRef,
    serviceType : string,
    startDate : string,
    startMode : string,
    state : "designed" | "active" | "reserved" | "inactive" | "terminated",
    supportingResource : ResourceRef [],
    supportingService : ServiceRefOrValue [],
}

export interface Characteristic{
    baseType : string,
    schemaLocation : string,
    type : string,
    characteristicRelationship : CharacteristicRelationship [],
    id : string,
    name : string,
    value : any,
    valueType : string,
}

export interface CharacteristicRelationship{
    id : string,
    relationshipType : string,
}

export interface Feature {
    constraint : ConstraintRef [],
    featureCharacteristic : Characteristic [],
    featureRelationship : FeatureRelationship [],
    id : string,
    isBundle : boolean,
    isEnabled : boolean,
    name : string,
}

export interface FeatureRelationship{
    id : string,
    name : string,
    relationshipType : string,
    validFor : string,
}

export interface Note{
    author : string,
    date : string,
    id : string,
    text : string,
}

export interface RelatedEntityRefOrValue{
    referredType :  string,
    name : string,
    href : string,
    is : string,
    baseType : string,
    schemaLocation : string,
    type : string,
    role : string,
}

export interface RelatedParty{
    referredType : string,
    name : string,
    href : string,
    id : string,
    baseType : string,
    schemaLocation : string,
    type : string,
    role : string,
}

export interface RelatedPlaceRefOrValue{
    referredType : string,
    name : string,
    href : string,
    id : string,
    baseType : string,
    schemaLocation : string,
    type : string,
    role : string,
}

export interface RelatedServiceOrderItem{
    referredType : string,
    itemAction : "add"| "modify" | "delete" | "noChange",
    itemId : string,
    role : string,
    serviceOrderHref : string,
    serviceOrderId : string,
}

export interface ServiceRefOrValue{
    referredType : string,
    name : string,
    href : string,
    id : string,
    baseType : string,
    schemaLocation : string,
    type : string,
    category :string,
    description : string,
    endDate :string,
    hasStarted : boolean,
    isBundle : boolean,
    isServiceEnabled : boolean,
    isStateful : boolean,
    serviceDate : string,
    serviceType : string,
    startDate : string,
    startMode : string,
    feature : Feature [],
    note : Note[],
    place : RelatedPlaceRefOrValue [],
    relatedEntity : RelatedEntityRefOrValue [],
    relatedParty : RelatedParty[],
    serviceCharacteristic : Characteristic[],
    serviceOrderItem : RelatedServiceOrderItem[],
    serviceRelationship : ServiceRelationship[],
    serviceSpecification : ServiceSpecificationRef,
    state : "designed" | "active" | "reserved" | "inactive" | "terminated",
    supportingResource : ResourceRef[],
    supportingService : ServiceRefOrValue[],
}

export interface ServiceRelationship{
    relationshipType : string,
    service : ServiceRefOrValue,
    serviceRelationshipCharacteristic : Characteristic,
}

export interface ConstraintRef{
    referredType : string,
    href : string,
    id : string,
    name : string,
    version : string,
}

export interface ResourceRef{
    referredType : string,
    name : string,
    href : string,
    id : string,
    baseType : string,
    schemaLocation : string,
    type: string,
}

export interface ServiceSpecificationRef{
    referredType : string,
    name : string,
    href : string,
    id : string,
    baseType : string,
    schemaLocation : string,
    type : string,
    version : string,
}