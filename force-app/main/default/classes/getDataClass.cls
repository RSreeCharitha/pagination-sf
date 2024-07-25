public with sharing class getDataClass {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        return [select id, LastName, Email from Contact];
    }
}