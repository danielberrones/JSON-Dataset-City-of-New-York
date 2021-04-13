let obj = {
    "meta" : {
      "view" : {
        "id" : "7xq6-k6zy",
        "name" : "Appeals Filed In 2017",
        "assetType" : "dataset",
        "averageRating" : 0,
        "category" : "City Government",
        "createdAt" : 1515533927,
        "description" : "A list of all appeals filed with the Civil Service Commission in 2017. This list includes both Civil Service Law Section 50 Disqualification Appeals and Civil Service Law Section 76 Disciplinary Appeals.",
        "displayType" : "table",
        "downloadCount" : 1538,
        "hideFromCatalog" : false,
        "hideFromDataJson" : false,
        "indexUpdatedAt" : 1534453692,
        "locale" : "en_US",
        "newBackend" : true,
        "numberOfComments" : 0,
        "oid" : 27694390,
        "provenance" : "official",
        "publicationAppendEnabled" : false,
        "publicationDate" : 1515534022,
        "publicationGroup" : 14778371,
        "publicationStage" : "published",
        "rowClass" : "",
        "rowsUpdatedAt" : 1515533931,
        "rowsUpdatedBy" : "d5dp-fses",
        "tableId" : 14778371,
        "totalTimesRated" : 0,
        "viewCount" : 2610,
        "viewLastModified" : 1581123301,
        "viewType" : "tabular",
        "approvals" : [ {
          "reviewedAt" : 1515595745,
          "reviewedAutomatically" : true,
          "state" : "approved",
          "submissionId" : 1069630,
          "submissionObject" : "public_audience_request",
          "submissionOutcome" : "change_audience",
          "submittedAt" : 1515595745,
          "workflowId" : 2285,
          "submissionDetails" : {
            "permissionType" : "READ"
          },
          "submissionOutcomeApplication" : {
            "failureCount" : 0,
            "status" : "success"
          },
          "submitter" : {
            "id" : "5fuc-pqz2",
            "displayName" : "NYC OpenData"
          }
        } ],
        "columns" : [ {
          "id" : -1,
          "name" : "sid",
          "dataTypeName" : "meta_data",
          "fieldName" : ":sid",
          "position" : 0,
          "renderTypeName" : "meta_data",
          "format" : { },
          "flags" : [ "hidden" ]
        }, {
          "id" : -1,
          "name" : "id",
          "dataTypeName" : "meta_data",
          "fieldName" : ":id",
          "position" : 0,
          "renderTypeName" : "meta_data",
          "format" : { },
          "flags" : [ "hidden" ]
        }, {
          "id" : -1,
          "name" : "position",
          "dataTypeName" : "meta_data",
          "fieldName" : ":position",
          "position" : 0,
          "renderTypeName" : "meta_data",
          "format" : { },
          "flags" : [ "hidden" ]
        }, {
          "id" : -1,
          "name" : "created_at",
          "dataTypeName" : "meta_data",
          "fieldName" : ":created_at",
          "position" : 0,
          "renderTypeName" : "meta_data",
          "format" : { },
          "flags" : [ "hidden" ]
        }, {
          "id" : -1,
          "name" : "created_meta",
          "dataTypeName" : "meta_data",
          "fieldName" : ":created_meta",
          "position" : 0,
          "renderTypeName" : "meta_data",
          "format" : { },
          "flags" : [ "hidden" ]
        }, {
          "id" : -1,
          "name" : "updated_at",
          "dataTypeName" : "meta_data",
          "fieldName" : ":updated_at",
          "position" : 0,
          "renderTypeName" : "meta_data",
          "format" : { },
          "flags" : [ "hidden" ]
        }, {
          "id" : -1,
          "name" : "updated_meta",
          "dataTypeName" : "meta_data",
          "fieldName" : ":updated_meta",
          "position" : 0,
          "renderTypeName" : "meta_data",
          "format" : { },
          "flags" : [ "hidden" ]
        }, {
          "id" : -1,
          "name" : "meta",
          "dataTypeName" : "meta_data",
          "fieldName" : ":meta",
          "position" : 0,
          "renderTypeName" : "meta_data",
          "format" : { },
          "flags" : [ "hidden" ]
        }, {
          "id" : 339300802,
          "name" : "Appeal Type",
          "dataTypeName" : "text",
          "fieldName" : "appeal_type",
          "position" : 1,
          "renderTypeName" : "text",
          "tableColumnId" : 59586185,
          "width" : 232,
          "cachedContents" : {
            "largest" : "Waiting for DQ",
            "non_null" : 1265,
            "null" : 0,
            "top" : [ {
              "item" : "Waiting for DQ",
              "count" : 20
            }, {
              "item" : "Section 50",
              "count" : 19
            }, {
              "item" : "Other",
              "count" : 18
            }, {
              "item" : "Waiting for Appeal Request",
              "count" : 17
            }, {
              "item" : "Section 76",
              "count" : 16
            }, {
              "item" : "Jurisdictional Issue",
              "count" : 15
            }, {
              "item" : "Duplicate Filing",
              "count" : 14
            } ],
            "smallest" : "Duplicate Filing"
          },
          "format" : { }
        }, {
          "id" : 339300803,
          "name" : "Appeal Subtype",
          "dataTypeName" : "text",
          "fieldName" : "appeal_subtype",
          "position" : 2,
          "renderTypeName" : "text",
          "tableColumnId" : 59586186,
          "width" : 268,
          "cachedContents" : {
            "largest" : "Veterans Credits",
            "non_null" : 1103,
            "null" : 162,
            "top" : [ {
              "item" : "Character",
              "count" : 20
            }, {
              "item" : "Score",
              "count" : 19
            }, {
              "item" : "Timeliness",
              "count" : 18
            }, {
              "item" : "Psych",
              "count" : 17
            }, {
              "item" : "Education and Experience",
              "count" : 16
            }, {
              "item" : "Medical",
              "count" : 15
            }, {
              "item" : "Termination",
              "count" : 14
            }, {
              "item" : "Unauthorized Substance",
              "count" : 13
            }, {
              "item" : "Eligibility",
              "count" : 12
            }, {
              "item" : "Suspension",
              "count" : 11
            }, {
              "item" : "Demotion",
              "count" : 10
            }, {
              "item" : "Veterans Credits",
              "count" : 9
            }, {
              "item" : "Seniority",
              "count" : 8
            }, {
              "item" : "Probationary Employee",
              "count" : 7
            } ],
            "smallest" : "Character"
          },
          "format" : { }
        }, {
          "id" : 339300804,
          "name" : "Agency",
          "dataTypeName" : "text",
          "fieldName" : "agency",
          "position" : 3,
          "renderTypeName" : "text",
          "tableColumnId" : 59586187,
          "width" : 172,
          "cachedContents" : {
            "largest" : "Transit Authority - NYCTA",
            "non_null" : 1265,
            "null" : 0,
            "top" : [ {
              "item" : "Police Department - NYPD",
              "count" : 20
            }, {
              "item" : "Department of Citywide Administrative Services - DCAS",
              "count" : 19
            }, {
              "item" : "MTA New York City Transit - NYCT",
              "count" : 18
            }, {
              "item" : "Department of Correction - DOC",
              "count" : 17
            }, {
              "item" : "Housing Authority - NYCHA",
              "count" : 16
            }, {
              "item" : "Department of Sanitation - DSNY",
              "count" : 15
            }, {
              "item" : "Department of Social Services - DSS",
              "count" : 14
            }, {
              "item" : "Other - OTH",
              "count" : 13
            }, {
              "item" : "Fire Department - FDNY",
              "count" : 12
            }, {
              "item" : "Administration for Children's Services - ACS",
              "count" : 11
            }, {
              "item" : "Department of Finance - DOF",
              "count" : 10
            }, {
              "item" : "Human Resources Administration - HRA",
              "count" : 9
            }, {
              "item" : "Department of Environmental Protection - DEP",
              "count" : 8
            }, {
              "item" : "Transit Authority - NYCTA",
              "count" : 7
            }, {
              "item" : "Department of Buildings - DOB",
              "count" : 6
            }, {
              "item" : "Department of Investigation - DOI",
              "count" : 5
            }, {
              "item" : "Civil Service Commission - NYCCSC",
              "count" : 4
            }, {
              "item" : "Department of Education - DOE",
              "count" : 3
            }, {
              "item" : "Department of Probation - DOP",
              "count" : 2
            }, {
              "item" : "Department of Health and Mental Hygiene - DOHMH",
              "count" : 1
            } ],
            "smallest" : "Administration for Children's Services - ACS"
          },
          "format" : { }
        }, {
          "id" : 339300805,
          "name" : "Status",
          "dataTypeName" : "text",
          "fieldName" : "status",
          "position" : 4,
          "renderTypeName" : "text",
          "tableColumnId" : 59586188,
          "width" : 172,
          "cachedContents" : {
            "largest" : "Open",
            "non_null" : 1265,
            "null" : 0,
            "top" : [ {
              "item" : "Open",
              "count" : 20
            }, {
              "item" : "Closed",
              "count" : 19
            } ],
            "smallest" : "Closed"
          },
          "format" : { }
        }, {
          "id" : 339300806,
          "name" : "Date Filed",
          "dataTypeName" : "calendar_date",
          "fieldName" : "date_filed",
          "position" : 5,
          "renderTypeName" : "calendar_date",
          "tableColumnId" : 59586189,
          "width" : 220,
          "cachedContents" : {
            "largest" : "2017-12-29T00:00:00",
            "non_null" : 1265,
            "null" : 0,
            "top" : [ {
              "item" : "2017-07-24T00:00:00",
              "count" : 20
            }, {
              "item" : "2017-05-15T00:00:00",
              "count" : 19
            }, {
              "item" : "2017-04-24T00:00:00",
              "count" : 18
            }, {
              "item" : "2017-04-03T00:00:00",
              "count" : 17
            }, {
              "item" : "2017-03-22T00:00:00",
              "count" : 16
            }, {
              "item" : "2017-03-20T00:00:00",
              "count" : 15
            }, {
              "item" : "2017-03-06T00:00:00",
              "count" : 14
            }, {
              "item" : "2017-03-01T00:00:00",
              "count" : 13
            }, {
              "item" : "2017-02-21T00:00:00",
              "count" : 12
            }, {
              "item" : "2017-02-17T00:00:00",
              "count" : 11
            }, {
              "item" : "2017-02-16T00:00:00",
              "count" : 10
            }, {
              "item" : "2017-02-13T00:00:00",
              "count" : 9
            }, {
              "item" : "2017-02-10T00:00:00",
              "count" : 8
            }, {
              "item" : "2017-02-08T00:00:00",
              "count" : 7
            }, {
              "item" : "2017-02-07T00:00:00",
              "count" : 6
            }, {
              "item" : "2017-02-03T00:00:00",
              "count" : 5
            }, {
              "item" : "2017-02-02T00:00:00",
              "count" : 4
            }, {
              "item" : "2017-02-01T00:00:00",
              "count" : 3
            }, {
              "item" : "2017-01-30T00:00:00",
              "count" : 2
            }, {
              "item" : "2017-01-27T00:00:00",
              "count" : 1
            } ],
            "smallest" : "2017-01-03T00:00:00"
          },
          "format" : {
            "view" : "date",
            "align" : "left"
          }
        }, {
          "id" : 339300807,
          "name" : "Date Closed",
          "dataTypeName" : "calendar_date",
          "fieldName" : "date_closed",
          "position" : 6,
          "renderTypeName" : "calendar_date",
          "tableColumnId" : 59586190,
          "width" : 232,
          "cachedContents" : {
            "largest" : "2018-01-02T00:00:00",
            "non_null" : 794,
            "null" : 471,
            "top" : [ {
              "item" : "2017-06-13T00:00:00",
              "count" : 20
            }, {
              "item" : "2017-09-08T00:00:00",
              "count" : 19
            }, {
              "item" : "2017-06-30T00:00:00",
              "count" : 18
            }, {
              "item" : "2017-03-07T00:00:00",
              "count" : 17
            }, {
              "item" : "2017-05-12T00:00:00",
              "count" : 16
            }, {
              "item" : "2017-06-05T00:00:00",
              "count" : 15
            }, {
              "item" : "2017-05-17T00:00:00",
              "count" : 14
            }, {
              "item" : "2017-05-16T00:00:00",
              "count" : 13
            }, {
              "item" : "2017-06-06T00:00:00",
              "count" : 12
            }, {
              "item" : "2017-07-14T00:00:00",
              "count" : 11
            }, {
              "item" : "2017-06-16T00:00:00",
              "count" : 10
            }, {
              "item" : "2017-03-23T00:00:00",
              "count" : 9
            }, {
              "item" : "2017-01-25T00:00:00",
              "count" : 8
            }, {
              "item" : "2017-01-18T00:00:00",
              "count" : 7
            }, {
              "item" : "2017-07-07T00:00:00",
              "count" : 6
            }, {
              "item" : "2017-04-06T00:00:00",
              "count" : 5
            }, {
              "item" : "2017-03-03T00:00:00",
              "count" : 4
            }, {
              "item" : "2017-02-14T00:00:00",
              "count" : 3
            }, {
              "item" : "2017-03-31T00:00:00",
              "count" : 2
            }, {
              "item" : "2017-03-10T00:00:00",
              "count" : 1
            } ],
            "smallest" : "2017-01-09T00:00:00"
          },
          "format" : {
            "view" : "date",
            "align" : "left"
          }
        }, {
          "id" : 339300808,
          "name" : "Exam No.",
          "dataTypeName" : "number",
          "fieldName" : "exam_no",
          "position" : 7,
          "renderTypeName" : "number",
          "tableColumnId" : 59586191,
          "width" : 196,
          "cachedContents" : {
            "largest" : "8213",
            "non_null" : 1064,
            "average" : "5321.635338345865",
            "null" : 201,
            "top" : [ {
              "item" : "7002",
              "count" : 20
            }, {
              "item" : "6012",
              "count" : 19
            }, {
              "item" : "7035",
              "count" : 18
            }, {
              "item" : "2000",
              "count" : 17
            }, {
              "item" : "4300",
              "count" : 16
            }, {
              "item" : "3318",
              "count" : 15
            }, {
              "item" : "6067",
              "count" : 14
            }, {
              "item" : "8098",
              "count" : 13
            }, {
              "item" : "5011",
              "count" : 12
            }, {
              "item" : "6042",
              "count" : 11
            }, {
              "item" : "6315",
              "count" : 10
            }, {
              "item" : "5039",
              "count" : 9
            }, {
              "item" : "6332",
              "count" : 8
            }, {
              "item" : "5044",
              "count" : 7
            }, {
              "item" : "6003",
              "count" : 6
            }, {
              "item" : "6043",
              "count" : 5
            }, {
              "item" : "6325",
              "count" : 4
            }, {
              "item" : "6006",
              "count" : 3
            }, {
              "item" : "6029",
              "count" : 2
            }, {
              "item" : "5017",
              "count" : 1
            } ],
            "smallest" : "113",
            "sum" : "5662220"
          },
          "format" : {
            "precisionStyle" : "standard",
            "noCommas" : "true",
            "align" : "right"
          }
        }, {
          "id" : 339300809,
          "name" : "Title",
          "dataTypeName" : "text",
          "fieldName" : "title",
          "position" : 8,
          "renderTypeName" : "text",
          "tableColumnId" : 59586192,
          "width" : 160,
          "cachedContents" : {
            "largest" : "Transit Electrical Helper",
            "non_null" : 1064,
            "null" : 201,
            "top" : [ {
              "item" : "Police Officer",
              "count" : 20
            }, {
              "item" : "Auto Mechanic",
              "count" : 19
            }, {
              "item" : "School Safety Agent",
              "count" : 18
            }, {
              "item" : "Traffic Enforcement Agent",
              "count" : 17
            }, {
              "item" : "Computer Associate (Software)",
              "count" : 16
            }, {
              "item" : "Computer Associate (Technical Support)",
              "count" : 15
            }, {
              "item" : "Correction Officer",
              "count" : 14
            }, {
              "item" : "Computer Programmer Analyst",
              "count" : 13
            }, {
              "item" : "Sanitation Worker",
              "count" : 12
            }, {
              "item" : "Maintenance Worker",
              "count" : 11
            }, {
              "item" : "Police Communications Technician",
              "count" : 10
            }, {
              "item" : "Administrative Director of Social Services",
              "count" : 9
            }, {
              "item" : "Health Services Manager",
              "count" : 8
            }, {
              "item" : "Administrative Community Relations Specialist",
              "count" : 7
            }, {
              "item" : "Firefighter",
              "count" : 6
            }, {
              "item" : "City Planner",
              "count" : 5
            }, {
              "item" : "Computer Service Technician",
              "count" : 4
            }, {
              "item" : "Train Operator",
              "count" : 3
            }, {
              "item" : "Administrative Staff Analyst",
              "count" : 2
            }, {
              "item" : "Administrative Manager",
              "count" : 1
            } ],
            "smallest" : "Addministrative Director of Social Sevices"
          },
          "format" : { }
        }, {
          "id" : 339300810,
          "name" : "Expiration",
          "dataTypeName" : "calendar_date",
          "fieldName" : "expiration",
          "position" : 9,
          "renderTypeName" : "calendar_date",
          "tableColumnId" : 59586193,
          "width" : 220,
          "cachedContents" : {
            "largest" : "2021-09-21T00:00:00",
            "non_null" : 795,
            "null" : 470,
            "top" : [ {
              "item" : "2021-09-06T00:00:00",
              "count" : 20
            }, {
              "item" : "2021-02-01T00:00:00",
              "count" : 19
            }, {
              "item" : "2021-01-11T00:00:00",
              "count" : 18
            }, {
              "item" : "2020-06-22T00:00:00",
              "count" : 17
            }, {
              "item" : "2021-06-21T00:00:00",
              "count" : 16
            }, {
              "item" : "2021-05-10T00:00:00",
              "count" : 15
            }, {
              "item" : "2017-06-26T00:00:00",
              "count" : 14
            }, {
              "item" : "2020-06-15T00:00:00",
              "count" : 13
            }, {
              "item" : "2019-12-22T00:00:00",
              "count" : 12
            }, {
              "item" : "2019-12-17T00:00:00",
              "count" : 11
            }, {
              "item" : "2020-08-17T00:00:00",
              "count" : 10
            }, {
              "item" : "2017-09-19T00:00:00",
              "count" : 9
            }, {
              "item" : "2020-09-28T00:00:00",
              "count" : 8
            }, {
              "item" : "2020-09-22T00:00:00",
              "count" : 7
            }, {
              "item" : "2019-09-24T00:00:00",
              "count" : 6
            }, {
              "item" : "2019-12-09T00:00:00",
              "count" : 5
            }, {
              "item" : "2020-03-16T00:00:00",
              "count" : 4
            }, {
              "item" : "2021-07-19T00:00:00",
              "count" : 3
            }, {
              "item" : "2020-02-24T00:00:00",
              "count" : 2
            }, {
              "item" : "2020-09-21T00:00:00",
              "count" : 1
            } ],
            "smallest" : "2016-12-19T00:00:00"
          },
          "format" : {
            "view" : "date",
            "align" : "left"
          }
        }, {
          "id" : 339300811,
          "name" : "Extension",
          "dataTypeName" : "text",
          "fieldName" : "extension",
          "position" : 10,
          "renderTypeName" : "text",
          "tableColumnId" : 59586194,
          "width" : 208,
          "cachedContents" : {
            "non_null" : 0,
            "null" : 1265
          },
          "format" : { }
        }, {
          "id" : 339300812,
          "name" : "Acronym",
          "dataTypeName" : "text",
          "fieldName" : "acronym",
          "position" : 11,
          "renderTypeName" : "text",
          "tableColumnId" : 59586195,
          "width" : 184,
          "cachedContents" : {
            "largest" : "OTH",
            "non_null" : 1265,
            "null" : 0,
            "top" : [ {
              "item" : "NYPD",
              "count" : 20
            }, {
              "item" : "DCAS",
              "count" : 19
            }, {
              "item" : "NYCT",
              "count" : 18
            }, {
              "item" : "DOC",
              "count" : 17
            }, {
              "item" : "NYCHA",
              "count" : 16
            }, {
              "item" : "DSNY",
              "count" : 15
            }, {
              "item" : "DSS",
              "count" : 14
            }, {
              "item" : "OTH",
              "count" : 13
            }, {
              "item" : "FDNY",
              "count" : 12
            }, {
              "item" : "ACS",
              "count" : 11
            }, {
              "item" : "DOF",
              "count" : 10
            }, {
              "item" : "HRA",
              "count" : 9
            }, {
              "item" : "DEP",
              "count" : 8
            }, {
              "item" : "NYCTA",
              "count" : 7
            }, {
              "item" : "DOB",
              "count" : 6
            }, {
              "item" : "DOI",
              "count" : 5
            }, {
              "item" : "NYCCSC",
              "count" : 4
            }, {
              "item" : "DOE",
              "count" : 3
            }, {
              "item" : "DOP",
              "count" : 2
            }, {
              "item" : "DOHMH",
              "count" : 1
            } ],
            "smallest" : "ACS"
          },
          "format" : { }
        } ],
        "grants" : [ {
          "inherited" : false,
          "type" : "viewer",
          "flags" : [ "public" ]
        } ],
        "metadata" : {
          "rdfClass" : "",
          "rdfSubject" : "0",
          "attachments" : [ {
            "filename" : "Appeals_Data_Dictionary.docx",
            "assetId" : "d4b4f77f-b11a-4f3d-9213-04ccb4f822cc",
            "blobId" : "",
            "name" : "Appeals_Data_Dictionary.docx"
          } ],
          "custom_fields" : {
            "Update" : {
              "Automation" : "No",
              "Date Made Public" : "01/10/2018",
              "Update Frequency" : "Historical Data"
            },
            "Legislative Compliance" : {
              "Geo-coding Attached?" : ""
            },
            "Dataset Information" : {
              "Agency" : "Civil Service Commission"
            }
          },
          "rowIdentifier" : "0",
          "availableDisplayTypes" : [ "table", "fatrow", "page" ],
          "rowLabel" : "Appeal",
          "renderTypeConfig" : {
            "visible" : {
              "table" : true
            }
          }
        },
        "owner" : {
          "id" : "5fuc-pqz2",
          "displayName" : "NYC OpenData",
          "profileImageUrlLarge" : "/api/users/5fuc-pqz2/profile_images/LARGE",
          "profileImageUrlMedium" : "/api/users/5fuc-pqz2/profile_images/THUMB",
          "profileImageUrlSmall" : "/api/users/5fuc-pqz2/profile_images/TINY",
          "screenName" : "NYC OpenData",
          "type" : "interactive",
          "flags" : [ "acceptedEula", "mayBeStoriesCoOwner" ]
        },
        "query" : { },
        "rights" : [ "read" ],
        "tableAuthor" : {
          "id" : "5fuc-pqz2",
          "displayName" : "NYC OpenData",
          "profileImageUrlLarge" : "/api/users/5fuc-pqz2/profile_images/LARGE",
          "profileImageUrlMedium" : "/api/users/5fuc-pqz2/profile_images/THUMB",
          "profileImageUrlSmall" : "/api/users/5fuc-pqz2/profile_images/TINY",
          "screenName" : "NYC OpenData",
          "type" : "interactive",
          "flags" : [ "acceptedEula", "mayBeStoriesCoOwner" ]
        },
        "flags" : [ "default", "ownerMayBeContacted", "restorable", "restorePossibleForType" ]
      }
    },
    "data" : [ [ "row-ncj4_9gee_mtx5", "00000000-0000-0000-3B12-7DFE62121693", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Police Department - NYPD", "Open", "2017-12-29T00:00:00", null, null, null, null, null, "NYPD" ]
  , [ "row-qz64.abp6_9qsa", "00000000-0000-0000-6077-588D530A7890", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-12-29T00:00:00", null, "4316", "Police Officer", "2020-08-24T00:00:00", null, "NYPD" ]
  , [ "row-zcrh_85i4_5ry5", "00000000-0000-0000-D8AA-08D52BAA9F94", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-28T00:00:00", null, "6508", "Child Protective Specialist Supervisor", "2021-07-26T00:00:00", null, "DCAS" ]
  , [ "row-j693-rz5n-nk9j", "00000000-0000-0000-320F-6BAEA7009CE0", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-28T00:00:00", null, "6012", "Auto Mechanic", "2021-09-06T00:00:00", null, "DCAS" ]
  , [ "row-sawh~p5jz-d2pa", "00000000-0000-0000-BBA3-3127A5013561", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-12-28T00:00:00", null, "5329", "Police Officer", "2021-07-07T00:00:00", null, "NYPD" ]
  , [ "row-ugh2~jfcy~kmcv", "00000000-0000-0000-37A1-6824845046CD", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-12-28T00:00:00", null, "4323", "Police Officer", "2020-08-26T00:00:00", null, "NYPD" ]
  , [ "row-bxrx~x982.ecjc", "00000000-0000-0000-C3FF-E95B2B72EA9E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-12-27T00:00:00", null, "6323", "School Safety Agent", "2021-04-05T00:00:00", null, "NYPD" ]
  , [ "row-bxf6.jduz.4kdm", "00000000-0000-0000-3E02-8D36B77A2CBD", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-12-27T00:00:00", null, "6329", "Traffic Enforcement Agent", "2020-10-21T00:00:00", null, "NYPD" ]
  , [ "row-tb5b.kydm~scmb", "00000000-0000-0000-089F-6B104F817F3E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-12-27T00:00:00", null, "4323", "Police Officer", "2020-08-26T00:00:00", null, "NYPD" ]
  , [ "row-yxrv.mbke~rx6z", "00000000-0000-0000-6717-2F5B8CC16F0F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-12-27T00:00:00", null, "140", "Police Officer", "2019-03-02T00:00:00", null, "NYPD" ]
  , [ "row-jbdc_qq2s~ygxi", "00000000-0000-0000-630C-5D1E20116390", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-12-26T00:00:00", null, "5310", "Police Officer", "2021-03-06T00:00:00", null, "NYPD" ]
  , [ "row-aisw-z76s~kj6b", "00000000-0000-0000-A86A-52C6A81DE9BD", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-12-26T00:00:00", null, "4324", "Police Officer", "2020-09-14T00:00:00", null, "NYPD" ]
  , [ "row-iung_ub63-6izv", "00000000-0000-0000-A676-70B25B9EFFA1", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-22T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-3hhe~pkyn.f8xq", "00000000-0000-0000-5475-0520EC3A2680", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-22T00:00:00", null, "8003", "Clerical Associate", null, null, "DCAS" ]
  , [ "row-dicm.8i2w~n87m", "00000000-0000-0000-2CEE-EFE48F11C50A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-22T00:00:00", null, "6067", "City Planner", "2021-06-21T00:00:00", null, "DCAS" ]
  , [ "row-ju4i_bkdn-h7fx", "00000000-0000-0000-E0F0-AC9AD35EC53E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-22T00:00:00", null, "7003", "Computer Associate (Technical Support)", null, null, "DCAS" ]
  , [ "row-fz8p_b47v-zjng", "00000000-0000-0000-85B9-CDB57EAC203E", 0, 1515534308, null, 1515534308, null, "{ }", "Other", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-12-21T00:00:00", "2017-12-27T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-mchg_n3dt~sjvw", "00000000-0000-0000-9C42-F2D03B05D619", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-21T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-4rkg~e942_mj7v", "00000000-0000-0000-E526-1CAE9054E8B8", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "MTA New York City Transit - NYCT", "Open", "2017-12-21T00:00:00", null, "6613", "Structure Maintainer Group E", null, null, "NYCT" ]
  , [ "row-ycww_wthc.p92d", "00000000-0000-0000-2EBE-7B6C8DC4B020", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for Appeal Request", null, "Department of Correction - DOC", "Open", "2017-12-21T00:00:00", null, null, null, null, null, "DOC" ]
  , [ "row-mp2u~ft48~fxkn", "00000000-0000-0000-3C06-990628700D19", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-21T00:00:00", null, "6014", "Auto Mechanic (Diesel)", "2021-09-06T00:00:00", null, "DCAS" ]
  , [ "row-gedp_75uu~gxeh", "00000000-0000-0000-C2C0-E7ADAB8C8972", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "MTA New York City Transit - NYCT", "Open", "2017-12-21T00:00:00", null, "5610", "Car Inspector", "2020-11-02T00:00:00", null, "NYCT" ]
  , [ "row-ft3b_3th5~mr7n", "00000000-0000-0000-CFEF-693019A0AD72", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-20T00:00:00", null, "7003", "Computer Associate (Technical Support)", null, null, "DCAS" ]
  , [ "row-e9si~yejq-q4cj", "00000000-0000-0000-8FC1-08B62F76F1BC", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-20T00:00:00", null, "7019", "Procurement Analyst", null, null, "DCAS" ]
  , [ "row-w8tv~hnch~8uig", "00000000-0000-0000-E120-1CDEF6AAEDA4", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-12-19T00:00:00", null, "4323", "Police Officer", "2020-08-26T00:00:00", null, "NYPD" ]
  , [ "row-4bif-r8m4-c6vn", "00000000-0000-0000-130E-CB141F0AC853", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-12-19T00:00:00", null, "4328", "Police Offficer", "2020-11-23T00:00:00", null, "NYPD" ]
  , [ "row-xuh4.ei3v.79fi", "00000000-0000-0000-BA6E-B34DB4F59A7D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-12-19T00:00:00", null, "4323", "Police Officer", "2020-08-26T00:00:00", null, "NYPD" ]
  , [ "row-maj8~yedr~p4ut", "00000000-0000-0000-4D90-185619BE92CF", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "MTA New York City Transit - NYCT", "Open", "2017-12-19T00:00:00", null, "5716", "Conductor", "2021-02-01T00:00:00", null, "NYCT" ]
  , [ "row-5qgg~q9se~fdd8", "00000000-0000-0000-BEE7-8CC07189E834", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Open", "2017-12-18T00:00:00", null, "7320", "Correction Officer", "2021-01-11T00:00:00", null, "DOC" ]
  , [ "row-wdpb~qsry~mz5h", "00000000-0000-0000-66AE-1B4D25001E8D", 0, 1515534308, null, 1515534308, null, "{ }", "Other", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-12-17T00:00:00", "2017-12-18T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-f4vx.68zv_miv7", "00000000-0000-0000-FB4F-793F1B417199", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-12-15T00:00:00", null, "4320", "Police Officer", "2020-08-25T00:00:00", null, "NYPD" ]
  , [ "row-dman.viu9-xpbi", "00000000-0000-0000-8B21-50EC01DDBC05", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-12-15T00:00:00", null, "4306", "Police Officer", "2019-12-23T00:00:00", null, "NYPD" ]
  , [ "row-csqf.cbg5_mym6", "00000000-0000-0000-67F4-985E96BB0860", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-15T00:00:00", null, "6508", "Promotion to Child Protective Specialist Supervisor", "2021-07-26T00:00:00", null, "DCAS" ]
  , [ "row-49tn~4uz4~ptji", "00000000-0000-0000-0136-9B441BD1AB5B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-15T00:00:00", null, "6066", "Juvenile Counselor", "2021-05-10T00:00:00", null, "DCAS" ]
  , [ "row-wnk2~rqi2.dvim", "00000000-0000-0000-F914-EBCD4DF2AA6F", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Correction - DOC", "Open", "2017-12-15T00:00:00", null, null, null, null, null, "DOC" ]
  , [ "row-ku6j_3sfd_fd3i", "00000000-0000-0000-A6CD-5E457D8D27D5", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Open", "2017-12-15T00:00:00", null, "7324", "Correction Officer", "2021-09-20T00:00:00", null, "DOC" ]
  , [ "row-hjm2~7q7x_dntu", "00000000-0000-0000-45B5-E1D492933C1C", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "MTA New York City Transit - NYCT", "Open", "2017-12-15T00:00:00", null, null, null, null, null, "NYCT" ]
  , [ "row-rawy_wjq3.szsu", "00000000-0000-0000-F44D-72E9E97B22B5", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for Appeal Request", null, "Department of Correction - DOC", "Open", "2017-12-15T00:00:00", null, null, null, null, null, "DOC" ]
  , [ "row-j3kx_xads_vdpe", "00000000-0000-0000-2922-65D43130E4AB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-15T00:00:00", null, "6508", "Promotion to Child Protective Specialist Supervisor", "2021-07-26T00:00:00", null, "DCAS" ]
  , [ "row-9iuf.by6r-9emk", "00000000-0000-0000-8F31-9F48754748D0", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Termination", "Housing Authority - NYCHA", "Open", "2017-12-14T00:00:00", null, null, null, null, null, "NYCHA" ]
  , [ "row-queu-dvc9.psik", "00000000-0000-0000-C698-AA814DC11BCE", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", null, "Housing Authority - NYCHA", "Closed", "2017-12-14T00:00:00", "2017-12-14T00:00:00", null, null, null, null, "NYCHA" ]
  , [ "row-dgkf_eqpw.h35m", "00000000-0000-0000-7AD8-EC0E2E419B08", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Termination", "Housing Authority - NYCHA", "Open", "2017-12-14T00:00:00", null, null, null, null, null, "NYCHA" ]
  , [ "row-7qff-ixqy.jpqf", "00000000-0000-0000-D57A-0B498065FE00", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "MTA New York City Transit - NYCT", "Open", "2017-12-14T00:00:00", null, "6617", "Revenue Equipment Maintainer", null, null, "NYCT" ]
  , [ "row-w5z5~ibci_g8jy", "00000000-0000-0000-8692-2F7711748F38", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-14T00:00:00", null, "8003", "Clerical Associate", null, null, "DCAS" ]
  , [ "row-5ynb-vv7i_z6aq", "00000000-0000-0000-999F-1CC403A2F613", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Unauthorized Substance", "Police Department - NYPD", "Open", "2017-12-14T00:00:00", null, "7304", "School Safety Agent", "2021-07-20T00:00:00", null, "NYPD" ]
  , [ "row-sg4y-gup2~si6s", "00000000-0000-0000-0B7B-AC95E040AC15", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-14T00:00:00", null, "7003", "Computer Associate (Technical Support)", null, null, "DCAS" ]
  , [ "row-3hap.3gv6_gpd9", "00000000-0000-0000-01E8-282DBEDD5289", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-14T00:00:00", null, "6042", "Construction Project Manager", null, null, "DCAS" ]
  , [ "row-uvju_bqkp_i3uh", "00000000-0000-0000-0836-9C7627A3AE71", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-12-13T00:00:00", null, "6329", "Traffic Enforcement Agent", "2020-10-21T00:00:00", null, "NYPD" ]
  , [ "row-dast.saaf_86hg", "00000000-0000-0000-4E59-7488009FF900", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-12-13T00:00:00", null, "4316", "Police Officer", "2020-08-24T00:00:00", null, "NYPD" ]
  , [ "row-zndv~q4sc.2ykf", "00000000-0000-0000-EF33-B128CBFB8284", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-12-13T00:00:00", null, "2344", "Police Officer", "2019-06-19T00:00:00", null, "NYPD" ]
  , [ "row-spzr.qebj.skay", "00000000-0000-0000-BAA3-27F25ED6103B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-12-13T00:00:00", null, "4313", "Police Officer", "2020-06-23T00:00:00", null, "NYPD" ]
  , [ "row-sr3u~sxad_2ub2", "00000000-0000-0000-FA6E-14A960520E7D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-12-13T00:00:00", null, "6502", "Police Officer", "2020-06-22T00:00:00", null, "NYPD" ]
  , [ "row-7w3z~pjgr~wtuz", "00000000-0000-0000-8AD1-0A9B54B93688", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-12-13T00:00:00", null, "4316", "Police Officer", "2020-08-24T00:00:00", null, "NYPD" ]
  , [ "row-b9xh~dp3b-e99d", "00000000-0000-0000-516D-0E9D41A1521B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-13T00:00:00", null, "6037", "Senior Stationary Engineer", null, null, "DCAS" ]
  , [ "row-nnkq.uk94.srb5", "00000000-0000-0000-4475-5C1437DA1AC1", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "MTA New York City Transit - NYCT", "Open", "2017-12-13T00:00:00", null, "5716", "Conductor", "2021-02-01T00:00:00", null, "NYCT" ]
  , [ "row-hu3k_ffea~7xxk", "00000000-0000-0000-7E6D-B18920B789A2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-12-13T00:00:00", null, "4320", "Police Officer", "2020-08-25T00:00:00", null, "NYPD" ]
  , [ "row-x2db-st5x.duti", "00000000-0000-0000-4412-E9FBFF2AF0D7", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-12-13T00:00:00", "2017-12-19T00:00:00", "6031", "Stock Worker", "2020-11-02T00:00:00", null, "NYPD" ]
  , [ "row-bxzu~b4cf-wpnk", "00000000-0000-0000-2CE2-B3BA330F1EC0", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-13T00:00:00", null, "6508", "Promotion to Child Protective Specialist Supervisor", "2021-07-26T00:00:00", null, "DCAS" ]
  , [ "row-jjtk-ruqy-xafn", "00000000-0000-0000-60F9-E987CF15CEB4", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-13T00:00:00", null, "6508", "Promotion to Child Protective Specialist Supervisor", "2021-07-26T00:00:00", null, "DCAS" ]
  , [ "row-gqf3_dzns.qifs", "00000000-0000-0000-9DEE-535487C3F16B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-12T00:00:00", null, "6508", "Promotion to Child Protective Specialist Supervisor", "2021-07-26T00:00:00", null, "DCAS" ]
  , [ "row-ayf9-gd4h-pqkd", "00000000-0000-0000-E7D6-C0C0697E8FDB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-12-12T00:00:00", null, "4312", "Police Officer", "2020-06-22T00:00:00", null, "NYPD" ]
  , [ "row-3t8n_ykkd.zm92", "00000000-0000-0000-4DF1-F755DC8E414F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-11T00:00:00", null, "5011", "Administrative Staff Analyst", "2020-09-28T00:00:00", null, "DCAS" ]
  , [ "row-myan.rrjz~4mat", "00000000-0000-0000-8A6E-0B0FDE5DFC19", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-11T00:00:00", null, "7014", "Emergency Medical Specialist Trainee", null, null, "DCAS" ]
  , [ "row-bt5r-s6g3~wpab", "00000000-0000-0000-AC72-E319E40898C0", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-10T00:00:00", null, "6508", "Promotion to Child Protective Specialist Supervisor", "2021-07-26T00:00:00", null, "DCAS" ]
  , [ "row-at25_usxc-t789", "00000000-0000-0000-73C2-BD2BAFADC201", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Eligibility", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-09T00:00:00", null, "8207", "Associate Transit Management Analyst (Operations)", null, null, "DCAS" ]
  , [ "row-ydag-v74a~j4wn", "00000000-0000-0000-1881-64D000DC8BD7", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-12-08T00:00:00", null, "4324", "Police Officer", "2020-09-14T00:00:00", null, "NYPD" ]
  , [ "row-eavu_4kte_5nku", "00000000-0000-0000-5C72-F19B95679886", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-12-07T00:00:00", null, "4313", "Police Officer", "2020-06-23T00:00:00", null, "NYPD" ]
  , [ "row-4cve-iitc_z6we", "00000000-0000-0000-093D-B6EF927AD377", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Sanitation - DSNY", "Open", "2017-12-07T00:00:00", null, null, null, null, null, "DSNY" ]
  , [ "row-teht.k6er-aiaj", "00000000-0000-0000-9525-CC44B9190503", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-07T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-zene~58m5.5hfz", "00000000-0000-0000-69BD-01B711F12870", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-06T00:00:00", null, "6508", "Promotion to Child Protective Specialist Supervisor", "2021-07-26T00:00:00", null, "DCAS" ]
  , [ "row-tzxt_he9s_g6zw", "00000000-0000-0000-57B4-0F13418C4C8F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-12-06T00:00:00", null, "6307", "Traffic Enforcement Agent", "2020-06-16T00:00:00", null, "NYPD" ]
  , [ "row-fd4h-e4tf.dnjt", "00000000-0000-0000-9947-2C5A1B64D6DC", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-06T00:00:00", null, "8003", "Clerical Associate", null, null, "DCAS" ]
  , [ "row-guz3.kfcs~34u4", "00000000-0000-0000-BE0D-ACC225034CE5", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-06T00:00:00", null, "8005", "Secretary", null, null, "DCAS" ]
  , [ "row-jmu5_vjj8~aw3b", "00000000-0000-0000-95AF-B2E4D3F5CB96", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-12-06T00:00:00", "2017-12-07T00:00:00", "5011", "Administrative Staff Analyst", "2020-09-28T00:00:00", null, "DCAS" ]
  , [ "row-w5f9~th35-8nkn", "00000000-0000-0000-489A-0DD058B6E00D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-06T00:00:00", null, "7004", "Computer Programmer Analyst", null, null, "DCAS" ]
  , [ "row-t38q-j3sd~jh3r", "00000000-0000-0000-27B0-A7D779F0DFB7", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-05T00:00:00", null, "6508", "Promotion to Child Protective Specialist Supervisor", "2021-07-26T00:00:00", null, "DCAS" ]
  , [ "row-zd3e_pzdn_cfyk", "00000000-0000-0000-2518-49229BEC715E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Social Services - DSS", "Open", "2017-12-04T00:00:00", null, "3328", "Special Officer", "2019-10-14T00:00:00", null, "DSS" ]
  , [ "row-pmzm-6qt8-xneg", "00000000-0000-0000-9199-8EEF8E340736", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-04T00:00:00", null, "7014", "Emergency Medical Specialist Trainee", null, null, "DCAS" ]
  , [ "row-rwsj_2gdv~5xgd", "00000000-0000-0000-1AB9-EB85EA5A3C65", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "MTA New York City Transit - NYCT", "Open", "2017-12-04T00:00:00", null, "6613", "Structure Maintainer Group E", null, null, "NYCT" ]
  , [ "row-mcte_mz8p_ynyw", "00000000-0000-0000-8978-74D09EC1B998", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-12-04T00:00:00", null, "6329", "Traffic Enforcement Agent", "2020-10-21T00:00:00", null, "NYPD" ]
  , [ "row-mf2z.q4u4_i7p5", "00000000-0000-0000-FB57-A718854BCB55", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Police Department - NYPD", "Open", "2017-12-04T00:00:00", null, null, null, null, null, "NYPD" ]
  , [ "row-na8q.nwbs.ur82", "00000000-0000-0000-FE42-E3BBBEADDC75", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-03T00:00:00", null, "7029", "Statistician", null, null, "DCAS" ]
  , [ "row-q695_mjse~yacf", "00000000-0000-0000-B075-658D05B21925", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Open", "2017-12-01T00:00:00", null, "6037", "Senior Stationary Engineer", null, null, "DCAS" ]
  , [ "row-ck9s-edef~jffk", "00000000-0000-0000-40AE-6A22EF11FB6B", 0, 1515534308, null, 1515534308, null, "{ }", "Jurisdictional Issue", null, "Other - OTH", "Open", "2017-12-01T00:00:00", "2017-12-21T00:00:00", null, null, null, null, "OTH" ]
  , [ "row-c3qv_hbjx_6zq3", "00000000-0000-0000-FBFA-9767AE742405", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Sanitation - DSNY", "Open", "2017-11-30T00:00:00", null, "5001", "Sanitation Worker", "2020-03-16T00:00:00", null, "DSNY" ]
  , [ "row-zbnk~98e7_j8s4", "00000000-0000-0000-4ADC-AFD09A45681C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Open", "2017-11-30T00:00:00", null, "7320", "Correction Officer", "2021-01-11T00:00:00", null, "DOC" ]
  , [ "row-2x4y~km5w~4uhf", "00000000-0000-0000-47AD-1500E6B91599", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-30T00:00:00", null, "6037", "Senior Stationary Engineer", null, null, "DCAS" ]
  , [ "row-bev8_h9x7.ckyk", "00000000-0000-0000-1683-86F15B4BC48C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-11-30T00:00:00", null, "4312", "Police Officer", "2020-06-22T00:00:00", null, "NYPD" ]
  , [ "row-qmks~tva2_qhcf", "00000000-0000-0000-C270-5257EEBFC726", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-11-30T00:00:00", null, "2324", "Motor Vehicle Operator", "2019-12-02T00:00:00", null, "NYPD" ]
  , [ "row-yjqw-jvv6~cznd", "00000000-0000-0000-02FB-0713249DF037", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "MTA New York City Transit - NYCT", "Open", "2017-11-30T00:00:00", null, "6613", "Structure Maintainer Group E", null, null, "NYCT" ]
  , [ "row-8hja-ibg2~2d9v", "00000000-0000-0000-F2DB-B5B1C82743E2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-29T00:00:00", null, "6012", "Auto Mechanic", "2021-09-06T00:00:00", null, "DCAS" ]
  , [ "row-u5xf~qe6b.dpi2", "00000000-0000-0000-C40B-9DDE265359B6", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-11-29T00:00:00", "2017-12-20T00:00:00", "4313", "Police Officer", "2020-06-23T00:00:00", null, "NYPD" ]
  , [ "row-wngy-p57s_yag2", "00000000-0000-0000-6DD5-884519BB5CA2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-11-29T00:00:00", null, "4313", "Police Officer", "2020-06-23T00:00:00", null, "NYPD" ]
  , [ "row-zesz~n7nr_h2sr", "00000000-0000-0000-1D29-7BBF2C73C745", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-11-29T00:00:00", "2017-12-01T00:00:00", "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-v5nt-33dr.wdjz", "00000000-0000-0000-4F97-B2A363E41D42", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for Appeal Request", null, "Department of Sanitation - DSNY", "Open", "2017-11-29T00:00:00", null, null, null, null, null, "DSNY" ]
  , [ "row-5cb9-9big_ciyz", "00000000-0000-0000-87FC-53FA339BFEDC", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-29T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-5aji_dfyk.aibh", "00000000-0000-0000-074B-B8F76F870723", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-11-28T00:00:00", null, "4313", "Police Officer", "2020-06-23T00:00:00", null, "NYPD" ]
  , [ "row-3f4g~dipz_vh77", "00000000-0000-0000-2ED6-48F99960912E", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-28T00:00:00", null, "6044", "Fraud Investigator", null, null, "DCAS" ]
  , [ "row-qsq7-pa3z~f9fm", "00000000-0000-0000-DF67-C049E73CFF47", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-11-28T00:00:00", null, "6302", "School Safety Agent", "2020-10-19T00:00:00", null, "NYPD" ]
  , [ "row-kizh-x9ke-xbvr", "00000000-0000-0000-AC1E-76F03A04D8B0", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for Appeal Request", null, "Police Department - NYPD", "Open", "2017-11-28T00:00:00", null, null, null, null, null, "NYPD" ]
  , [ "row-4yzz~63mr~8ucd", "00000000-0000-0000-6F45-C59426570113", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-28T00:00:00", null, "7004", "Computer Programmer Analyst", null, null, "DCAS" ]
  , [ "row-yvcb_jsbr_nj62", "00000000-0000-0000-123C-DA28571642E1", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-11-28T00:00:00", null, "4313", "Police Officer", "2020-06-23T00:00:00", null, "NYPD" ]
  , [ "row-8dk5_3u3q.yqu5", "00000000-0000-0000-7C63-D2D2731C0913", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-11-28T00:00:00", null, "3317", "Police Officer", "2019-12-16T00:00:00", null, "NYPD" ]
  , [ "row-mjii-4b56-ucki", "00000000-0000-0000-B2A0-9CBB4434A9A4", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-27T00:00:00", null, "7508", "Computer Associate (Technical Support) (PROM)", null, null, "DCAS" ]
  , [ "row-ktnh-3e7p.5krq", "00000000-0000-0000-4507-C16F56945127", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Police Department - NYPD", "Open", "2017-11-27T00:00:00", null, "4312", "Police Officer", "2020-06-22T00:00:00", null, "NYPD" ]
  , [ "row-nam7-ih9d_kkha", "00000000-0000-0000-85E0-C8A0F2A35C9B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Open", "2017-11-27T00:00:00", null, "7000", "Emergency Medical Specialist - EMT", "2021-03-29T00:00:00", null, "FDNY" ]
  , [ "row-gckj-swhc_uxak", "00000000-0000-0000-237B-35B6BCB213D4", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-11-26T00:00:00", null, "4323", "Police Officer", "2020-08-26T00:00:00", null, "NYPD" ]
  , [ "row-e37c.fnas-ztpu", "00000000-0000-0000-0E9C-2B2E7AE3B1E2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Sanitation - DSNY", "Open", "2017-11-25T00:00:00", null, "5001", "Sanitation Worker", "2020-03-16T00:00:00", null, "DSNY" ]
  , [ "row-f9w2~dcs8-mv76", "00000000-0000-0000-B112-AD336538233D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Sanitation - DSNY", "Open", "2017-11-24T00:00:00", null, "5001", "Sanitation Worker", "2020-03-16T00:00:00", null, "DSNY" ]
  , [ "row-324y_8x9w.js5n", "00000000-0000-0000-80D7-338ADC7A1250", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Sanitation - DSNY", "Open", "2017-11-24T00:00:00", null, "5001", "Sanitation Worker", "2020-03-16T00:00:00", null, "DSNY" ]
  , [ "row-5wgi_szmp.ez35", "00000000-0000-0000-A74F-9889EB6EE6B8", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-24T00:00:00", null, null, null, null, null, "DCAS" ]
  , [ "row-39nx_if8k.n4jm", "00000000-0000-0000-C329-4000143F8F31", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-24T00:00:00", null, "6508", "Promotion to Child Protective Specialist Supervisor", "2021-07-26T00:00:00", null, "DCAS" ]
  , [ "row-7n8j.vv9y~r35c", "00000000-0000-0000-815A-9146D69F60AA", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-24T00:00:00", null, "6042", "Construction Project Manager", null, null, "DCAS" ]
  , [ "row-pzzh-qes9.tp7d", "00000000-0000-0000-5E5E-F4A811E388C7", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Open", "2017-11-22T00:00:00", null, "7329", "Correction Officer", "2021-02-15T00:00:00", null, "DOC" ]
  , [ "row-237m_qxjk-s6aj", "00000000-0000-0000-E05C-51921A05293C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-22T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-qip6_93ag~hk9v", "00000000-0000-0000-DC62-AB6B9C8E18C1", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-21T00:00:00", null, "1328", "Eligibility Specialist", "2018-08-27T00:00:00", null, "DCAS" ]
  , [ "row-weap_siuy~u4zz", "00000000-0000-0000-5267-372002491405", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-21T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-99gm.j7ds~65xi", "00000000-0000-0000-F5AF-B6685264960E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-11-21T00:00:00", null, "7307", "Traffic Enforcement Agent", "2021-04-05T00:00:00", null, "NYPD" ]
  , [ "row-duk2-mnu5.karg", "00000000-0000-0000-52D4-24F9ABC2A778", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-21T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-j9kr_6p4u_danx", "00000000-0000-0000-F1BC-67162B54FDAB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-21T00:00:00", null, "7029", "Statistician", null, null, "DCAS" ]
  , [ "row-pkmq-gf4i.gz8f", "00000000-0000-0000-3729-BF9E18BFC7A7", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-20T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-wfht-w4ig-ufka", "00000000-0000-0000-6C74-01AEA1EBBF52", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-20T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-6w72-igrz-w68n", "00000000-0000-0000-A9F5-79F3F2B8330C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-20T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-h2f5_ubts-avm4", "00000000-0000-0000-4A73-4200336D8A88", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-11-20T00:00:00", null, "6307", "Traffic Enforcement Agent", "2020-06-16T00:00:00", null, "NYPD" ]
  , [ "row-g2ws-c9rt_9q7p", "00000000-0000-0000-8850-C6B8191B8552", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-20T00:00:00", null, "7029", "Statistician", null, null, "DCAS" ]
  , [ "row-6ugz_mx7p~5znb", "00000000-0000-0000-CF4A-5A0AA511C942", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-20T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-2kcj~qzmy.gh38", "00000000-0000-0000-12EB-968E5AC8D133", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Unauthorized Substance", "Police Department - NYPD", "Open", "2017-11-20T00:00:00", null, "7307", "Traffic Enforcement Agent", "2021-04-05T00:00:00", null, "NYPD" ]
  , [ "row-hj5z.vt28_4vau", "00000000-0000-0000-0278-A5678C537A3D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Open", "2017-11-20T00:00:00", null, "7000", "Emergency Medical Specialist - EMT", "2021-03-29T00:00:00", null, "FDNY" ]
  , [ "row-uwxj.da4b~9vjt", "00000000-0000-0000-4EF0-1BD8CBF27229", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-20T00:00:00", null, "8003", "Clerical Associate", null, null, "DCAS" ]
  , [ "row-8xjb-wvh4_tgyu", "00000000-0000-0000-23BA-FB6644F121F9", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Sanitation - DSNY", "Open", "2017-11-20T00:00:00", null, "5001", "Sanitation Worker", "2020-03-16T00:00:00", null, "DSNY" ]
  , [ "row-5qd9_kejx.85z4", "00000000-0000-0000-57C5-2885E4A949B6", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-20T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-xt85-pwgi_9n58", "00000000-0000-0000-3961-763BE2F13FB6", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-17T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-awwb-k3hf~xqkc", "00000000-0000-0000-EF93-F382A8307A3E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-17T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-ci3u~49jr_rdyn", "00000000-0000-0000-9B04-498C0CC4B15C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-17T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-7nbu.sg32~w8ma", "00000000-0000-0000-A98C-E37D58F13D0F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-17T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-mxu7~pvh7-k4bx", "00000000-0000-0000-23EC-CE263EFED9D2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-11-17T00:00:00", "2017-12-19T00:00:00", "5319", "Traffic Enforcement Agent", "2019-10-28T00:00:00", null, "NYPD" ]
  , [ "row-qg45_su99.53fe", "00000000-0000-0000-7621-18E4E64F4050", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-17T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-ypbz~qs43_7iic", "00000000-0000-0000-18E8-BA355B29B391", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-17T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-fcbd-srii.7489", "00000000-0000-0000-5DE6-724A28A274DD", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-17T00:00:00", null, "8003", "Clerical Associate", null, null, "DCAS" ]
  , [ "row-ic55-nq7b.7ats", "00000000-0000-0000-2819-2E4EE6336483", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for Appeal Request", null, "Police Department - NYPD", "Open", "2017-11-17T00:00:00", null, null, null, null, null, "NYPD" ]
  , [ "row-2ime_crah-63fq", "00000000-0000-0000-BC4F-75794C057C26", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Administration for Children's Services - ACS", "Closed", "2017-11-17T00:00:00", "2017-12-19T00:00:00", "6337", "Child Protective Specialist", "2021-06-28T00:00:00", null, "ACS" ]
  , [ "row-c3nd-enqa_74zh", "00000000-0000-0000-5677-40B2D0FD035F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-11-16T00:00:00", null, "3309", "Police Officer", "2019-06-23T00:00:00", null, "NYPD" ]
  , [ "row-kqdj.gvgu~vtse", "00000000-0000-0000-87C4-8BC82D103968", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-16T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-d3z2-neg8~xcy3", "00000000-0000-0000-19DD-E3B7231A6365", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-16T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-t8b3-gamn~7v5w", "00000000-0000-0000-7841-B31FBB7C83EC", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-16T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-4fd5_49vs-239k", "00000000-0000-0000-9492-990D60E35B94", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-16T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-wfc2-k7hk-89n4", "00000000-0000-0000-D846-9BB8E0D209D9", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-16T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-97nu_x243~ezsb", "00000000-0000-0000-0F89-B94F9A352769", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-16T00:00:00", null, "6508", "Child Protective Specialist Supervisor (PROM)", "2021-07-26T00:00:00", null, "DCAS" ]
  , [ "row-3iam~gmn8.iex6", "00000000-0000-0000-A2F4-E619B1049CDA", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Open", "2017-11-15T00:00:00", null, "7322", "Correction Officer", "2021-05-17T00:00:00", null, "DOC" ]
  , [ "row-4prq_dxvd.amrr", "00000000-0000-0000-B6B1-ADFD2708EFA1", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Police Department - NYPD", "Open", "2017-11-15T00:00:00", null, null, null, null, null, "NYPD" ]
  , [ "row-nxvg~gq6r.w6u7", "00000000-0000-0000-F63C-E6748A6C6B25", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-11-15T00:00:00", null, "4316", "Police Officer", "2020-08-24T00:00:00", null, "NYPD" ]
  , [ "row-xwy8.awex~r3ke", "00000000-0000-0000-EE76-7398A79656AD", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-15T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-3vhz_d233_be6h", "00000000-0000-0000-6ED3-7E2EFDD07B16", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-15T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-br73~z7p8.w8ek", "00000000-0000-0000-B0DF-9A1F3186E8C3", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-15T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-t3h9~iqvt~ht8v", "00000000-0000-0000-E970-3C5631A439D6", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-11-15T00:00:00", null, "4323", "Police Officer", "2020-08-26T00:00:00", null, "NYPD" ]
  , [ "row-f7rs-fqgk.6icg", "00000000-0000-0000-66AA-363FAA005B9E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-15T00:00:00", null, "7000", "Emergency Medical Spcialist - EMT (FIRE)", "2021-03-29T00:00:00", null, "DCAS" ]
  , [ "row-wgx5.6x5b_q47r", "00000000-0000-0000-64FC-42B81C42ABF2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Sanitation - DSNY", "Open", "2017-11-15T00:00:00", null, "5001", "Sanitation Worker", "2020-03-16T00:00:00", null, "DSNY" ]
  , [ "row-yru6.wahu~ueuf", "00000000-0000-0000-D6F5-78F6D499B7E1", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-14T00:00:00", null, "7029", "Statistician", null, null, "DCAS" ]
  , [ "row-sxie_gzi6_qeyj", "00000000-0000-0000-53B4-CB34F0872CB4", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-14T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-y5kx-cn6t_ft8x", "00000000-0000-0000-1A4F-131F83BDF0D6", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-14T00:00:00", null, "8213", "Administrative Graphic Artist", null, null, "DCAS" ]
  , [ "row-ppih_8p6z_k7kx", "00000000-0000-0000-A024-F52B962FE53D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Sanitation - DSNY", "Closed", "2017-11-14T00:00:00", "2017-12-12T00:00:00", "5001", "Sanitation Worker", "2020-03-16T00:00:00", null, "DSNY" ]
  , [ "row-ufw6_ukhz_7qr8", "00000000-0000-0000-846B-E10FA5B8A858", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-11-14T00:00:00", null, "4307", "School Safety Agent", "2020-01-07T00:00:00", null, "NYPD" ]
  , [ "row-a9xu-j4wz~s4r7", "00000000-0000-0000-145D-1E0C8C06FD31", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-11-14T00:00:00", null, "6329", "Traffic Enforcement Agent", "2020-10-21T00:00:00", null, "NYPD" ]
  , [ "row-yak4.qehs.3yy8", "00000000-0000-0000-DDF1-2385F0EABBD9", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-14T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-4h2t-7ikh-ghbd", "00000000-0000-0000-EC70-7252164A4C74", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Suspension", "Housing Authority - NYCHA", "Open", "2017-11-14T00:00:00", null, null, null, null, null, "NYCHA" ]
  , [ "row-4mst~rk6b-tmi6", "00000000-0000-0000-10AB-D52D89E43D86", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Termination", "Housing Authority - NYCHA", "Open", "2017-11-14T00:00:00", null, null, null, null, null, "NYCHA" ]
  , [ "row-6edr_nvjv-tcmh", "00000000-0000-0000-A200-4D6BA3DB1681", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-13T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-hrw2_n286.84ww", "00000000-0000-0000-0A91-76D2CF07DEAB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-13T00:00:00", null, "7002", "Computer Associate", null, null, "DCAS" ]
  , [ "row-p85k-8kan_qntu", "00000000-0000-0000-8808-CC433F0FC150", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-13T00:00:00", null, "7029", "Statistician", null, null, "DCAS" ]
  , [ "row-8dbv_wptg~dc7v", "00000000-0000-0000-E6C8-6A00730714C9", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-13T00:00:00", null, "6037", "Senior Stationary Engineer", null, null, "DCAS" ]
  , [ "row-yarz-dmcr~xdrb", "00000000-0000-0000-0862-BCC9A813F4DB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-13T00:00:00", null, "6037", "Senior Stationary Engineer", null, null, "DCAS" ]
  , [ "row-bjbb_s6zw~8s89", "00000000-0000-0000-0CE9-C93C0A88A130", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-12T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-bsqe-5md5.f3tm", "00000000-0000-0000-1B23-CDCB3D073B9E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-11-11T00:00:00", null, "4328", "Police officer", "2020-11-23T00:00:00", null, "NYPD" ]
  , [ "row-pgap~q6hx.qdwn", "00000000-0000-0000-01CD-08379835FEA4", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-11T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-aa62.hmpp_addt", "00000000-0000-0000-76FB-D364AC8F93D8", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Sanitation - DSNY", "Open", "2017-11-11T00:00:00", null, "5001", "Sanitation Worker", "2020-03-16T00:00:00", null, "DSNY" ]
  , [ "row-z4ix~7sch.mbi6", "00000000-0000-0000-40D3-52A54E1054C8", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Police Department - NYPD", "Open", "2017-11-10T00:00:00", null, null, null, null, null, "NYPD" ]
  , [ "row-sy7x.5pky_pjrv", "00000000-0000-0000-C4F3-1A696E0C52D0", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-09T00:00:00", null, null, null, null, null, "DCAS" ]
  , [ "row-5cbi_6x9k_e2dj", "00000000-0000-0000-005E-BE0D2ED2C2A7", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-09T00:00:00", null, "7011", "Administrative Community Relations Specialist", "2021-09-20T00:00:00", null, "DCAS" ]
  , [ "row-cwgc_w2xa-hum8", "00000000-0000-0000-7677-B82CD9ACEF2A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Finance - DOF", "Closed", "2017-11-09T00:00:00", "2017-11-09T00:00:00", "3021", "Deputy City Sheriff", "2017-07-10T00:00:00", null, "DOF" ]
  , [ "row-uqh9_mi6v.bqfk", "00000000-0000-0000-6424-407ABC9F55C0", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-11-09T00:00:00", null, "4320", "Police Officer", "2020-08-25T00:00:00", null, "NYPD" ]
  , [ "row-w254-9bi2-ts7g", "00000000-0000-0000-A9A2-19920A783C44", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-09T00:00:00", null, "6012", "Auto Mechanic", "2021-09-06T00:00:00", null, "DCAS" ]
  , [ "row-qfgc_z84n-hmee", "00000000-0000-0000-EC1E-F805388BC829", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-09T00:00:00", null, "7004", "Computer Programmer Analyst", null, null, "DCAS" ]
  , [ "row-v7yn.igf9_sd6b", "00000000-0000-0000-A51E-E1761137B4E0", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-11-09T00:00:00", null, "3318", "Police Officer", "2019-12-17T00:00:00", null, "NYPD" ]
  , [ "row-7mam~9w33~k6yg", "00000000-0000-0000-4368-2D805F82F893", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-08T00:00:00", null, "7003", "Computer Associate (Technical Support)", null, null, "DCAS" ]
  , [ "row-k7cm~mvpz~mny7", "00000000-0000-0000-52EA-5BD768EC2456", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-08T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-k6wu~4wbw_e37s", "00000000-0000-0000-6C63-82EE3DCE6EFE", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Police Department - NYPD", "Open", "2017-11-08T00:00:00", null, "5321", "Police Officer", "2021-07-03T00:00:00", null, "NYPD" ]
  , [ "row-unep-6hk6-dv33", "00000000-0000-0000-3AF9-8C493EDF2267", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Unauthorized Substance", "Police Department - NYPD", "Open", "2017-11-08T00:00:00", null, "7311", "Traffic Enforcement Agent", "2021-08-02T00:00:00", null, "NYPD" ]
  , [ "row-y8zf~vzzf_377z", "00000000-0000-0000-B605-2D1D2A22358B", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-11-08T00:00:00", "2017-12-08T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-46qf~nvvn.9bup", "00000000-0000-0000-ECF0-5AAFFFE45F7E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Demotion", "Housing Authority - NYCHA", "Open", "2017-11-06T00:00:00", null, null, null, null, null, "NYCHA" ]
  , [ "row-ed4s-khzk_245k", "00000000-0000-0000-80FC-7BA078F2404A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-06T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-2c7r-p4ru.iy4t", "00000000-0000-0000-5E1B-CA3B986B9156", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Police Department - NYPD", "Open", "2017-11-06T00:00:00", null, "4310", "Police Officer", "2019-12-28T00:00:00", null, "NYPD" ]
  , [ "row-jyj8~sdiy~pfhv", "00000000-0000-0000-A5FB-2EFA54752C83", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-11-06T00:00:00", null, "4313", "Police Officer", "2020-06-23T00:00:00", null, "NYPD" ]
  , [ "row-vzvp.dnif.czj2", "00000000-0000-0000-1D83-D779339136C9", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-11-06T00:00:00", null, "4300", "Police Officer", "2019-12-22T00:00:00", null, "NYPD" ]
  , [ "row-gn6p_vbnh.zw5a", "00000000-0000-0000-9943-1506BF53743E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Closed", "2017-11-06T00:00:00", "2017-11-29T00:00:00", "7320", "Correction Officer", "2021-01-11T00:00:00", null, "DOC" ]
  , [ "row-dexk_wyd3_mbm2", "00000000-0000-0000-94B3-6E2A197A3215", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-06T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-jeip~wf7p_hjhf", "00000000-0000-0000-C5FF-551EA877B004", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-06T00:00:00", null, "8003", "Clerical Associate", null, null, "DCAS" ]
  , [ "row-k653~ickb~nzbd", "00000000-0000-0000-EB1F-FC39BC2399AD", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "MTA New York City Transit - NYCT", "Open", "2017-11-06T00:00:00", null, "5716", "Conductor", "2021-02-21T00:00:00", null, "NYCT" ]
  , [ "row-iqkm-mq6k-ctuj", "00000000-0000-0000-A47D-380258D71750", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-06T00:00:00", null, "8003", "Clerical Associate", null, null, "DCAS" ]
  , [ "row-5vw6_b3wd_bm37", "00000000-0000-0000-239A-B6B3ED959390", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Open", "2017-11-06T00:00:00", null, "7329", "Correction Officer", "2021-02-15T00:00:00", null, "DOC" ]
  , [ "row-6hmn~bymk.krkv", "00000000-0000-0000-50E6-49CBCB8D948C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-11-06T00:00:00", null, "4300", "Police Officer", "2019-12-22T00:00:00", null, "NYPD" ]
  , [ "row-p225.qmi9.yqdb", "00000000-0000-0000-9918-7D483253917B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Suspension", "Human Resources Administration - HRA", "Open", "2017-11-06T00:00:00", null, null, null, null, null, "HRA" ]
  , [ "row-ubz6_mqe4_sqxy", "00000000-0000-0000-082F-9F4E44790612", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-03T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-33fr~dmkx-4fgz", "00000000-0000-0000-4FC5-1CF96DFCEF20", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-03T00:00:00", null, "7322", "Correction Officer", "2021-05-17T00:00:00", null, "DCAS" ]
  , [ "row-a7rw.ujbm-ubyv", "00000000-0000-0000-6520-D40C5BCDC6E2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-11-03T00:00:00", null, "4310", "Police Officer", "2019-12-28T00:00:00", null, "NYPD" ]
  , [ "row-5jy4.rwp9~56iv", "00000000-0000-0000-328B-964A35BB9CDB", 0, 1515534308, null, 1515534308, null, "{ }", "Other", null, "Police Department - NYPD", "Closed", "2017-11-02T00:00:00", "2017-11-03T00:00:00", null, null, null, null, "NYPD" ]
  , [ "row-xhrs~p68m~j6gv", "00000000-0000-0000-F4C6-66F0951D4CFB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-11-02T00:00:00", null, "3308", "Police Officer", "2019-06-22T00:00:00", null, "NYPD" ]
  , [ "row-8ges~jixz_trnq", "00000000-0000-0000-FFD3-E38D577A63F1", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-11-02T00:00:00", null, "3313", "Police Officer", "2019-09-24T00:00:00", null, "NYPD" ]
  , [ "row-r8da.zrxm~tyxm", "00000000-0000-0000-75ED-CD7CBA906FB4", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-11-02T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-w8qq_yuks~ajyg", "00000000-0000-0000-E674-CA0CC3C7DD28", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-11-01T00:00:00", null, "3313", "Police Officer", "2019-09-24T00:00:00", null, "NYPD" ]
  , [ "row-pn7t.jqtn-te5x", "00000000-0000-0000-93C7-50BC83718D16", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Termination", "Department of Environmental Protection - DEP", "Open", "2017-11-01T00:00:00", null, null, null, null, null, "DEP" ]
  , [ "row-84j8~g3sm.qxqx", "00000000-0000-0000-FAFC-B1B8A463D1EC", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Sanitation - DSNY", "Open", "2017-11-01T00:00:00", null, "5001", "Sanitation Worker", "2020-03-16T00:00:00", null, "DSNY" ]
  , [ "row-8fbz~vh5m.sxkd", "00000000-0000-0000-E685-6AAFA09D1869", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Police Department - NYPD", "Closed", "2017-11-01T00:00:00", "2017-11-14T00:00:00", "3318", "Police Officer", "2019-12-17T00:00:00", null, "NYPD" ]
  , [ "row-eijg_hmup.4bxa", "00000000-0000-0000-8E22-07D93DC6107D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-10-31T00:00:00", null, "3315", "Police Officer", "2019-12-10T00:00:00", null, "NYPD" ]
  , [ "row-q9dh~gvi4.zid2", "00000000-0000-0000-1625-8651BF06DF81", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-10-31T00:00:00", null, "3316", "Police Officer", "2019-12-14T00:00:00", null, "NYPD" ]
  , [ "row-pm9e-c5re.3bsg", "00000000-0000-0000-FDD1-D1C254AA3A33", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Open", "2017-10-31T00:00:00", null, "6315", "Correction Officer", "2020-06-15T00:00:00", null, "DOC" ]
  , [ "row-xmvi-g95r~jbra", "00000000-0000-0000-6776-B02FAD289C91", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Police Department - NYPD", "Open", "2017-10-30T00:00:00", null, "4323", "Police Officer", "2020-08-26T00:00:00", null, "NYPD" ]
  , [ "row-em9u_dhcq~kggr", "00000000-0000-0000-64A2-F8DAA13E258E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-10-30T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-div9-i6y2-nn4k", "00000000-0000-0000-A2D8-94D0CF3624AE", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "MTA New York City Transit - NYCT", "Open", "2017-10-30T00:00:00", null, "5716", "Conductor", "2021-02-01T00:00:00", null, "NYCT" ]
  , [ "row-h23e.yqsd_p7jw", "00000000-0000-0000-8275-0599B2B8C341", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-10-30T00:00:00", null, "2326", "Police Officer", "2018-07-02T00:00:00", null, "NYPD" ]
  , [ "row-f85j-9wnc-6upk", "00000000-0000-0000-CEBA-33BD34F891D2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-10-30T00:00:00", "2018-01-02T00:00:00", "6313", "Traffic Enforcement Agent", "2020-09-21T00:00:00", null, "NYPD" ]
  , [ "row-6v9j.ariu.bu7r", "00000000-0000-0000-B558-219AD9B80921", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-10-27T00:00:00", "2017-11-27T00:00:00", "8003", "Clerical Associate", null, null, "DCAS" ]
  , [ "row-kuuk~r28n_zvx3", "00000000-0000-0000-6898-399279876EB6", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Open", "2017-10-27T00:00:00", null, "7322", "Correction Officer", "2021-05-17T00:00:00", null, "DOC" ]
  , [ "row-e4q6~jbqs~b6s4", "00000000-0000-0000-D5F2-670BF58A2DA4", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for Appeal Request", null, "MTA New York City Transit - NYCT", "Closed", "2017-10-27T00:00:00", "2017-12-08T00:00:00", null, null, null, null, "NYCT" ]
  , [ "row-zjgq-6kvk~j53n", "00000000-0000-0000-B81D-D14E552831BD", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "MTA New York City Transit - NYCT", "Open", "2017-10-27T00:00:00", null, "5716", "Conductor", "2021-02-01T00:00:00", null, "NYCT" ]
  , [ "row-xwuk_4rz8_wxih", "00000000-0000-0000-17DC-354C50ECF8FA", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for Appeal Request", null, "Police Department - NYPD", "Closed", "2017-10-27T00:00:00", "2017-12-08T00:00:00", null, null, null, null, "NYPD" ]
  , [ "row-hxe3.ryct.tcf5", "00000000-0000-0000-B864-356252B7591E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Open", "2017-10-26T00:00:00", null, "4318", "Correction Officer", "2019-11-04T00:00:00", null, "DOC" ]
  , [ "row-ti4p-pjpm-4cgs", "00000000-0000-0000-9F42-77B0F1DCE9F5", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-10-26T00:00:00", "2017-10-27T00:00:00", "6042", "Construction Project Manager", null, null, "DCAS" ]
  , [ "row-ebrd~mpnd_3hr9", "00000000-0000-0000-D9F1-9629C07CEE06", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-10-25T00:00:00", null, "6319", "Traffic Enforcement Agent", "2020-10-19T00:00:00", null, "NYPD" ]
  , [ "row-xggk.tbzi.9i2e", "00000000-0000-0000-F016-E446BA4CFB24", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-10-25T00:00:00", null, "7003", "Computer Associate (Technical Support)", null, null, "DCAS" ]
  , [ "row-f2ee-vfth_ghtq", "00000000-0000-0000-A11E-95D04F729BCF", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-10-25T00:00:00", "2017-11-29T00:00:00", "7003", "Computer Associate (Technical Support)", null, null, "DCAS" ]
  , [ "row-824w_m5eb~9as7", "00000000-0000-0000-C98C-A2AFA301DEDA", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-10-25T00:00:00", "2017-12-18T00:00:00", "6033", "Maintenance Worker", "2021-05-10T00:00:00", null, "DCAS" ]
  , [ "row-mbhg.qs9t~2jrc", "00000000-0000-0000-B85B-109E9A5985AA", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-10-25T00:00:00", null, "2326", "Police Officer", "2018-07-02T00:00:00", null, "NYPD" ]
  , [ "row-gmvx_riix_aw7a", "00000000-0000-0000-0DBE-9D8951DA5697", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Open", "2017-10-25T00:00:00", null, "7320", "Correction Officer", "2021-01-11T00:00:00", null, "DOC" ]
  , [ "row-snv4-bvp9-jcet", "00000000-0000-0000-439C-90AF129D29D7", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "MTA New York City Transit - NYCT", "Open", "2017-10-25T00:00:00", null, "5716", "Conductor", "2021-02-01T00:00:00", null, "NYCT" ]
  , [ "row-9kav_hcy2-5iux", "00000000-0000-0000-6B47-C15BEC194740", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-10-25T00:00:00", null, "4312", "Police Officer", "2020-06-22T00:00:00", null, "NYPD" ]
  , [ "row-t5kf~6aai~a3nn", "00000000-0000-0000-36CB-E5AF3A160BE8", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-10-24T00:00:00", null, "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-btfj~gfj8_v898", "00000000-0000-0000-B4BA-8FA475230155", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-10-24T00:00:00", null, "7029", "Statistician", null, null, "DCAS" ]
  , [ "row-ks5u_rdrb_inn9", "00000000-0000-0000-67ED-A774F660A908", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-10-24T00:00:00", null, "4307", "School Safety Agent", "2020-01-07T00:00:00", null, "NYPD" ]
  , [ "row-fypu~ycf2_7s34", "00000000-0000-0000-B544-0E3CDD3E1D6E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", null, "Police Department - NYPD", "Closed", "2017-10-24T00:00:00", "2017-10-31T00:00:00", "4307", "School Safety Agent", "2020-01-07T00:00:00", null, "NYPD" ]
  , [ "row-g2ac.wuee_9923", "00000000-0000-0000-303F-66E544DB6E18", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Open", "2017-10-24T00:00:00", null, "6332", "Correction Officer", "2020-09-22T00:00:00", null, "DOC" ]
  , [ "row-td59~tpcb.ayhk", "00000000-0000-0000-D254-FFF10C97B4CA", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Transit Authority - NYCTA", "Closed", "2017-10-23T00:00:00", "2017-12-08T00:00:00", null, null, null, null, "NYCTA" ]
  , [ "row-wyx8_etzg.4ra5", "00000000-0000-0000-08EB-A9449BC2A2D1", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-10-23T00:00:00", "2017-12-08T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-u4za~42uc~77cu", "00000000-0000-0000-B072-F629DA774220", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-10-23T00:00:00", null, "8206", "Administrative Retirement Benefits Specialist", null, null, "DCAS" ]
  , [ "row-wuix~uk8h.gua5", "00000000-0000-0000-10DE-4EDF12A621E8", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-10-23T00:00:00", null, "6302", "School Safety Agent", "2020-10-19T00:00:00", null, "NYPD" ]
  , [ "row-4nhz-njvx-749a", "00000000-0000-0000-9E4B-8113EE72CAB8", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-10-23T00:00:00", null, "5330", "Police Communications Technician", "2020-09-15T00:00:00", null, "NYPD" ]
  , [ "row-eud9.2yfc~gpux", "00000000-0000-0000-15A8-77638C655D70", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-10-23T00:00:00", null, "4331", "Traffic Enforcement Agent", "2018-10-29T00:00:00", null, "NYPD" ]
  , [ "row-dead-4xw2~hvka", "00000000-0000-0000-E11D-835FE6DF27CC", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Citywide Administrative Services - DCAS", "Open", "2017-10-23T00:00:00", null, "6333", "Special Officer", "2021-02-01T00:00:00", null, "DCAS" ]
  , [ "row-y3bs-r6md.8y68", "00000000-0000-0000-BB7F-4B72C7E43AC1", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-10-21T00:00:00", null, "5304", "Traffic Enforcement Agent", "2019-01-21T00:00:00", null, "NYPD" ]
  , [ "row-u9cd.8kv9_42km", "00000000-0000-0000-B702-B279050FDE89", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Eligibility", "Department of Citywide Administrative Services - DCAS", "Open", "2017-10-20T00:00:00", null, "7508", "Promotion to Computer Associate (Technical Support)", null, null, "DCAS" ]
  , [ "row-dwdy_2e6p-qqh4", "00000000-0000-0000-A2C6-502817A3C6B3", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-10-20T00:00:00", "2017-11-20T00:00:00", "7303", "Traffic Enforcement Agent", "2021-03-08T00:00:00", null, "NYPD" ]
  , [ "row-xfyu_2bex_6b2y", "00000000-0000-0000-3D7F-348968487868", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Open", "2017-10-20T00:00:00", null, "7322", "Correction Officer", "2021-05-17T00:00:00", null, "DOC" ]
  , [ "row-ed6i-sfkq-beu3", "00000000-0000-0000-3C13-6479435C2CC7", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-10-20T00:00:00", null, "6524", "Assistant Resident Buildings Superintendent", "2021-07-05T00:00:00", null, "DCAS" ]
  , [ "row-m7dx-v4ds.aabq", "00000000-0000-0000-AAB0-17956C0F8D47", 0, 1515534308, null, 1515534308, null, "{ }", "Other", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-10-20T00:00:00", "2017-10-20T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-67in~iutr_sxu4", "00000000-0000-0000-E235-0927990E2674", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Fire Department - FDNY", "Closed", "2017-10-20T00:00:00", "2017-10-23T00:00:00", "4004", "Emerg.Med.Spec.-EMT", "2018-02-19T00:00:00", null, "FDNY" ]
  , [ "row-hd9k.5k34_qivc", "00000000-0000-0000-B62A-6048E161EA1C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "MTA New York City Transit - NYCT", "Open", "2017-10-20T00:00:00", null, "5709", "Signal Maintainer", "2021-03-08T00:00:00", null, "NYCT" ]
  , [ "row-v9yh~rq3s.2rnf", "00000000-0000-0000-2A85-5A518D1A8564", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-10-20T00:00:00", null, "8003", "Clerical Associate", null, null, "DCAS" ]
  , [ "row-9nkm_ctdq_4rvz", "00000000-0000-0000-C2EF-EAE25B0F0248", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-09-01T00:00:00", null, "4316", "Police Officer", "2020-08-24T00:00:00", null, "NYPD" ]
  , [ "row-ackq~mrgp~8z3z", "00000000-0000-0000-52A9-C9001A88F38F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Open", "2017-10-20T00:00:00", null, "7004", "Computer Programmer Analyst", null, null, "DCAS" ]
  , [ "row-7fuf-tyus_m2qh", "00000000-0000-0000-9081-3AB0F1159EBF", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-10-19T00:00:00", null, "4313", "Police Officer", "2020-06-23T00:00:00", null, "NYPD" ]
  , [ "row-r6xm~zi73.vhbp", "00000000-0000-0000-310A-7ABF3A468178", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Suspension", "Housing Authority - NYCHA", "Open", "2017-10-19T00:00:00", null, null, null, null, null, "NYCHA" ]
  , [ "row-k2gm~a4hs.nh8x", "00000000-0000-0000-07FE-97D1F400211A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-10-18T00:00:00", null, "7004", "Computer Programmer Analyst", null, null, "DCAS" ]
  , [ "row-9dd9.cvgj~zrrd", "00000000-0000-0000-0D88-51A30ADF721B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-10-18T00:00:00", "2017-12-15T00:00:00", "6012", "Auto Mechanic", "2021-09-06T00:00:00", null, "DCAS" ]
  , [ "row-m4q7_eixt~zd52", "00000000-0000-0000-DC0B-477706E74F5A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-10-18T00:00:00", "2017-10-31T00:00:00", "4335", "Police Communications Technician", "2017-11-14T00:00:00", null, "NYPD" ]
  , [ "row-tyvn.ttqb.hvyg", "00000000-0000-0000-3CC8-D70032D186D0", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-10-17T00:00:00", null, "7003", "Computer Associate (Technical Support)", null, null, "DCAS" ]
  , [ "row-aqhc-kze5~wk9q", "00000000-0000-0000-A9D8-360AD7AFF73A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-10-17T00:00:00", "2017-10-17T00:00:00", "4314", "School Safety Agent", "2020-01-08T00:00:00", null, "DCAS" ]
  , [ "row-ru67-npfc~8wsf", "00000000-0000-0000-BF10-EBCB1E895E66", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-10-17T00:00:00", null, "4307", "School Safety Agent", "2020-01-07T00:00:00", null, "NYPD" ]
  , [ "row-9fcs~rcnh-krkw", "00000000-0000-0000-C55F-66AC9B82BFAB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-10-17T00:00:00", "2017-11-29T00:00:00", "6012", "Auto Mechanic", "2021-09-06T00:00:00", null, "DCAS" ]
  , [ "row-h2uh~du3v.bn2g", "00000000-0000-0000-C233-BFD9019D51D8", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-10-17T00:00:00", null, "4307", "School Safety Agent", "2020-01-07T00:00:00", null, "NYPD" ]
  , [ "row-s8dc.85ud.6zz5", "00000000-0000-0000-4250-F63EC3EC1983", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-10-17T00:00:00", null, "3316", "Police Officer", "2019-12-14T00:00:00", null, "NYPD" ]
  , [ "row-hjdp-p33y.ggmw", "00000000-0000-0000-CFAA-71298D1449AB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-10-16T00:00:00", null, "7003", "Computer Associate (Technical Support)", null, null, "DCAS" ]
  , [ "row-iuwg_myee-gvja", "00000000-0000-0000-1A78-D1509DCD40F0", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-10-16T00:00:00", null, "3316", "Police Officer", "2019-12-14T00:00:00", null, "NYPD" ]
  , [ "row-qix8~t3qh~6qms", "00000000-0000-0000-50CE-8840C9E679E4", 0, 1515534308, null, 1515534308, null, "{ }", "Duplicate Filing", null, "Police Department - NYPD", "Closed", "2017-10-16T00:00:00", null, null, null, null, null, "NYPD" ]
  , [ "row-cp7r-c65b_sd93", "00000000-0000-0000-3AB7-0B3D77C15EB0", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-10-16T00:00:00", "2017-12-11T00:00:00", "7003", "Computer Associate (Technical Support)", null, null, "DCAS" ]
  , [ "row-rh64.87qp.f35w", "00000000-0000-0000-AFF5-44E8A58E9367", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-10-16T00:00:00", null, "7003", "Computer Associate (Technical Support)", null, null, "DCAS" ]
  , [ "row-mpin.2xkm.mgdp", "00000000-0000-0000-EC08-6E4B3259B988", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-10-16T00:00:00", "2017-11-17T00:00:00", "6502", "Promotional Police Officer", "2020-06-22T00:00:00", null, "NYPD" ]
  , [ "row-gari-e4k3-vtnz", "00000000-0000-0000-4156-3FB13176E0D5", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Eligibility", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-10-16T00:00:00", "2017-10-31T00:00:00", "7544", "Promotion to Captain (Police)", null, null, "DCAS" ]
  , [ "row-4p2n-rk4u~2het", "00000000-0000-0000-21B5-9F2D5E2ACB78", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-10-16T00:00:00", null, "7003", "Computer Associate (Technical Support)", null, null, "DCAS" ]
  , [ "row-i5p4~xtvm-drdy", "00000000-0000-0000-BEC2-511A8E86FC41", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Transit Authority - NYCTA", "Open", "2017-10-13T00:00:00", null, "5716", "Conductor", "2021-02-01T00:00:00", null, "NYCTA" ]
  , [ "row-zv3r~ww7a_znpi", "00000000-0000-0000-A348-9C95037C0AE2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-10-13T00:00:00", null, "3318", "Police Officer", "2019-12-17T00:00:00", null, "NYPD" ]
  , [ "row-wifn.berk.dki4", "00000000-0000-0000-CA71-0E7E3DC06F5C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-10-13T00:00:00", "2017-12-13T00:00:00", "6033", "Maintenance Worker", "2021-05-10T00:00:00", null, "DCAS" ]
  , [ "row-7uh7.6edz-x7zf", "00000000-0000-0000-6242-D01059C1AF5A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-10-13T00:00:00", "2017-11-02T00:00:00", "7320", "Correction Officer", "2021-01-11T00:00:00", null, "DOC" ]
  , [ "row-j4q4_9pdu-ca7q", "00000000-0000-0000-A1B1-82117A05FB96", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-10-12T00:00:00", "2017-11-14T00:00:00", "6029", "Probation Officer", "2020-09-14T00:00:00", null, "DOC" ]
  , [ "row-a3vd~abwx~ey5m", "00000000-0000-0000-F06F-BCFD6B226FFA", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-10-12T00:00:00", null, "4306", "Police Officer", "2019-12-23T00:00:00", null, "NYPD" ]
  , [ "row-e7jx~7p9s~vw9t", "00000000-0000-0000-1BD1-27A85594BE19", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-10-11T00:00:00", null, "7004", "Computer Programmer Analyst", null, null, "DCAS" ]
  , [ "row-wz9n~urq8_cunm", "00000000-0000-0000-FD9D-0C221AD6569B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-10-10T00:00:00", null, "7003", "Computer Associate (Technical Support)", null, null, "DCAS" ]
  , [ "row-rmg2-4s2b_2rdz", "00000000-0000-0000-8E96-72297C05C784", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-10-10T00:00:00", "2017-11-29T00:00:00", "7003", "Computer Associate (Technical Support)", null, null, "DCAS" ]
  , [ "row-jy32-xhiy~g342", "00000000-0000-0000-C433-2ACE4CDCABFE", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-10-10T00:00:00", null, "5522", "Associate Job Opportunity Specialist", "2021-03-22T00:00:00", null, "DCAS" ]
  , [ "row-ubic.dmcj~rvjr", "00000000-0000-0000-2A70-120CF8DD6EC3", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Eligibility", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-10-10T00:00:00", "2017-10-31T00:00:00", "7544", "Promotion to Captain (Police)", null, null, "DCAS" ]
  , [ "row-cicn.mth3_zsry", "00000000-0000-0000-AE28-E06333462E88", 0, 1515534308, null, 1515534308, null, "{ }", "Duplicate Filing", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-10-10T00:00:00", "2017-10-23T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-3p5u.g73d~2jsj", "00000000-0000-0000-1462-34C11D7FD32C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-10-10T00:00:00", null, "7003", "Computer Associate (Technical Support)", null, null, "DCAS" ]
  , [ "row-mxx3~ahjp_zf54", "00000000-0000-0000-BDFC-1EABC6E0CEEA", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for Appeal Request", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-10-10T00:00:00", "2017-12-08T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-r25u-ahv9.54am", "00000000-0000-0000-4444-BA7E87AF78E1", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-10-10T00:00:00", null, "3311", "Police Officer", "2019-06-29T00:00:00", null, "NYPD" ]
  , [ "row-z8da.5au9-ysmt", "00000000-0000-0000-137C-96EA8144ADE8", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Open", "2017-10-10T00:00:00", null, "2304", "Correction Officer", "2018-11-12T00:00:00", null, "DOC" ]
  , [ "row-mzmm~ueq8_ujxy", "00000000-0000-0000-E0D6-353215CBD4C5", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Eligibility", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-10-10T00:00:00", "2017-10-31T00:00:00", "7544", "Promotion to Captain (Police)", null, null, "DCAS" ]
  , [ "row-6s2c~k595.s7tv", "00000000-0000-0000-0495-FF82F03B7A07", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Termination", "Department of Correction - DOC", "Open", "2017-10-10T00:00:00", null, null, null, null, null, "DOC" ]
  , [ "row-sqbx~pzkc~7s9b", "00000000-0000-0000-2F88-EB4AE7AF205C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-10-09T00:00:00", null, "7003", "Computer Associate (Technical Support)", null, null, "DCAS" ]
  , [ "row-4h9r-a9dg_visu", "00000000-0000-0000-2BF1-62968913EF2B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Eligibility", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-10-06T00:00:00", "2017-10-31T00:00:00", "7544", "Promotion to Captain (Police)", null, null, "DCAS" ]
  , [ "row-63cj-e8qi_uzcw", "00000000-0000-0000-DF09-D7D6757AD684", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-10-06T00:00:00", null, "7029", "Statistician", null, null, "DCAS" ]
  , [ "row-ep3z.mfzu-g4x6", "00000000-0000-0000-92C5-2D356C74FA7A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-10-06T00:00:00", "2017-11-08T00:00:00", "6502", "Promotional Police Officer", "2020-06-22T00:00:00", null, "NYPD" ]
  , [ "row-mq9c~4r6b_sfb5", "00000000-0000-0000-4DA2-C343E6FF1438", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-10-05T00:00:00", "2017-11-02T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-qjvz~ca2b.mj4n", "00000000-0000-0000-B5A8-663FDB41A68C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-10-05T00:00:00", null, "4330", "School Safety Agent", "2020-04-29T00:00:00", null, "NYPD" ]
  , [ "row-6kxg_s42m~92f2", "00000000-0000-0000-D566-51F5C29B95F7", 0, 1515534308, null, 1515534308, null, "{ }", "Other", null, "Police Department - NYPD", "Closed", "2017-10-04T00:00:00", "2017-10-05T00:00:00", null, null, null, null, "NYPD" ]
  , [ "row-ircg-4y7z-4km3", "00000000-0000-0000-F9E9-0E2593EC5BFF", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-10-03T00:00:00", "2017-10-20T00:00:00", "6033", "Maintenance Worker", "2021-05-10T00:00:00", null, "DCAS" ]
  , [ "row-6tmy.88k3_4q3g", "00000000-0000-0000-4761-3A00DF2B790F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-10-03T00:00:00", null, "6012", "Auto Mechanic", "2021-09-06T00:00:00", null, "DCAS" ]
  , [ "row-ch2d_k4n7.4maz", "00000000-0000-0000-CA0F-5D2E82366B11", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-10-03T00:00:00", "2017-11-28T00:00:00", "2302", "Police Officer", "2018-04-30T00:00:00", null, "NYPD" ]
  , [ "row-yij5.gvu3_hdw5", "00000000-0000-0000-AC8B-325E3BD967EA", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Unauthorized Substance", "Police Department - NYPD", "Open", "2017-10-03T00:00:00", null, "6321", "Police Communications Technician", "2021-02-01T00:00:00", null, "NYPD" ]
  , [ "row-nkbj.fhrq~sjwy", "00000000-0000-0000-32A9-AA06E7C700B3", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-10-02T00:00:00", "2017-11-27T00:00:00", "7004", "Computer Programmer Analyst", null, null, "DCAS" ]
  , [ "row-nptx.4zsw~vbiy", "00000000-0000-0000-F834-0902262241EA", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-10-02T00:00:00", null, "6524", "Assistant Resident Buildings Superintendent", "2021-07-05T00:00:00", null, "DCAS" ]
  , [ "row-vi9w-pa7u-drwn", "00000000-0000-0000-C055-BC28CB38DA52", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "MTA New York City Transit - NYCT", "Closed", "2017-10-02T00:00:00", "2017-11-27T00:00:00", "6617", "Revenue Equipment Maintainer", null, null, "NYCT" ]
  , [ "row-459k~6tjp_x6hf", "00000000-0000-0000-45D1-D2E04AAC8A07", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Eligibility", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-10-02T00:00:00", "2017-10-31T00:00:00", "7544", "Promotion to Captain (Police)", null, null, "DCAS" ]
  , [ "row-iawt_q6ac_9qt4", "00000000-0000-0000-70CC-E3B3D4922A39", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Police Department - NYPD", "Open", "2017-10-02T00:00:00", null, "7303", "Traffic Enforcement Agent", "2021-03-08T00:00:00", null, "NYPD" ]
  , [ "row-emr5~tbb5.a3as", "00000000-0000-0000-926C-6D862B355CE2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Open", "2017-10-02T00:00:00", null, "7004", "Computer Programmer Analyst", null, null, "DCAS" ]
  , [ "row-kcuj_cbik.4frx", "00000000-0000-0000-FDD2-ACE7E696157B", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Police Department - NYPD", "Closed", "2017-09-29T00:00:00", "2017-11-02T00:00:00", null, null, null, null, "NYPD" ]
  , [ "row-kvag_4tf2-dr42", "00000000-0000-0000-23C8-4262EA1F6AE1", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Eligibility", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-09-29T00:00:00", "2017-10-31T00:00:00", "7544", "Promotion to Captain (Police)", null, null, "DCAS" ]
  , [ "row-i2fd.x3qe_h4t3", "00000000-0000-0000-953A-38A6C0CAEF05", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-09-29T00:00:00", null, "4312", "Police Officer", "2020-06-22T00:00:00", null, "NYPD" ]
  , [ "row-3jrx~9eey~pica", "00000000-0000-0000-B829-2A4A549D5759", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-09-29T00:00:00", "2017-10-19T00:00:00", "5003", "Emergency Medical Specialist - EMT", "2019-02-18T00:00:00", null, "FDNY" ]
  , [ "row-9ju2_nzzy.xcdu", "00000000-0000-0000-4FB4-78CFFFD83370", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-28T00:00:00", null, "7004", "Computer Programmer Analyst", null, null, "DCAS" ]
  , [ "row-rwth-z3n9_bxz5", "00000000-0000-0000-140E-FC199C2F5E22", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-09-28T00:00:00", null, "3310", "Police Officer", "2019-06-25T00:00:00", null, "NYPD" ]
  , [ "row-p6kz-h3dd~4qvy", "00000000-0000-0000-D531-03E56B56A868", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-28T00:00:00", null, "7004", "Computer Programmer Analyst", null, null, "DCAS" ]
  , [ "row-s6cx_n69m_jdgz", "00000000-0000-0000-369A-4AA53F88D264", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-28T00:00:00", null, "7004", "Computer Programmer Analyst", null, null, "DCAS" ]
  , [ "row-7tii_xmh7~sehh", "00000000-0000-0000-C211-ADA1D7A5889C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-28T00:00:00", null, "6524", "Assistant Resident Buildings Superintendent", null, null, "DCAS" ]
  , [ "row-mwis-w6fw.hher", "00000000-0000-0000-1335-198541642E4D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-28T00:00:00", null, "7029", "Statistician", null, null, "DCAS" ]
  , [ "row-9vf3_6s4b.w4rf", "00000000-0000-0000-7E64-24191F9946D3", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-28T00:00:00", null, "6012", "Auto Mechanic", "2021-09-06T00:00:00", null, "DCAS" ]
  , [ "row-23fy~gx6n.9b88", "00000000-0000-0000-82C5-44B33709ABB9", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Open", "2017-09-28T00:00:00", null, "6315", "Correction Officer", "2020-06-15T00:00:00", null, "DOC" ]
  , [ "row-d3pe_fx2n_arcn", "00000000-0000-0000-D36F-282FCA1B1FB8", 0, 1515534308, null, 1515534308, null, "{ }", "Duplicate Filing", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-09-27T00:00:00", "2017-09-28T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-4yzh_2ic3.grp5", "00000000-0000-0000-C2E8-3AC634BB98BD", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-27T00:00:00", null, "7004", "Computer Programmer Analyst", null, null, "DCAS" ]
  , [ "row-ukkm_gwm9.8zid", "00000000-0000-0000-31E3-880643909180", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-09-27T00:00:00", null, "3315", "Police Officer", "2019-12-10T00:00:00", null, "NYPD" ]
  , [ "row-5drg.7pye-87tw", "00000000-0000-0000-62C1-B6E8C31F56A5", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-09-27T00:00:00", "2017-12-15T00:00:00", "2326", "Police Officer", "2018-07-02T00:00:00", null, "NYPD" ]
  , [ "row-p63n~4fdh-kutw", "00000000-0000-0000-51F7-C4590BA21AB7", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-09-27T00:00:00", "2017-12-20T00:00:00", "2344", "Police Officer", "2019-06-19T00:00:00", null, "NYPD" ]
  , [ "row-6e2z~h5im-xkuy", "00000000-0000-0000-C8F6-F12F771F3568", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-27T00:00:00", null, "6014", "Auto Mechanic (Diesel)", null, null, "DCAS" ]
  , [ "row-8ugm~b6c9_eyhh", "00000000-0000-0000-0C16-E37350869E17", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-09-27T00:00:00", "2017-12-29T00:00:00", "6012", "Auto Mechanic", "2021-09-06T00:00:00", null, "DCAS" ]
  , [ "row-evsw_fsyp~3xeq", "00000000-0000-0000-44A6-3828710726CB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-27T00:00:00", null, "7004", "Computer Programmer Analyst", null, null, "DCAS" ]
  , [ "row-mrxb-psiv-yjdu", "00000000-0000-0000-1CEF-A671161C9705", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-09-27T00:00:00", null, "4312", "Police Officer", "2020-06-22T00:00:00", null, "NYPD" ]
  , [ "row-rutb-bi64_6wkc", "00000000-0000-0000-414B-388814C7BC95", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-27T00:00:00", null, "5039", "Principal Administrative Associate", "2021-07-19T00:00:00", null, "DCAS" ]
  , [ "row-8fj5_vy56-vzey", "00000000-0000-0000-15A9-602A6DD31726", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-26T00:00:00", null, "6012", "Auto Mechanic", "2021-09-06T00:00:00", null, "DCAS" ]
  , [ "row-5jq7_jffq~32v3", "00000000-0000-0000-9526-4CA7B798CBB9", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-25T00:00:00", null, "7004", "Computer Programmer Analyst", null, null, "DCAS" ]
  , [ "row-cuxx_hj85_d85c", "00000000-0000-0000-8E11-B55E096D0B1F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "MTA New York City Transit - NYCT", "Open", "2017-09-25T00:00:00", null, "6612", "Car Inspector", null, null, "NYCT" ]
  , [ "row-bfhg_69cx.bwj6", "00000000-0000-0000-8821-996133CD713A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-09-25T00:00:00", null, "3309", "Police Officer", "2019-09-23T00:00:00", null, "NYPD" ]
  , [ "row-esdq-wmyh~pvbu", "00000000-0000-0000-9377-0C5C3EEA1D6B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Unauthorized Substance", "Fire Department - FDNY", "Open", "2017-09-25T00:00:00", null, "7000", "Emergency Medical Specialist - EMT", "2021-03-29T00:00:00", null, "FDNY" ]
  , [ "row-ghn7-kvtv.rcw7", "00000000-0000-0000-B3CC-FCC69379D6C0", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-22T00:00:00", null, "6012", "Auto Mechanic", "2021-09-06T00:00:00", null, "DCAS" ]
  , [ "row-pdrx~d4rp_sevh", "00000000-0000-0000-BFC1-6ECE5E9417C6", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", null, "Department of Buildings - DOB", "Closed", "2017-09-22T00:00:00", "2017-09-27T00:00:00", null, null, null, null, "DOB" ]
  , [ "row-d459~7dhr-7u8r", "00000000-0000-0000-B8B5-889A1FEB7033", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-09-22T00:00:00", "2017-09-22T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-mpqi_qqyf~8bky", "00000000-0000-0000-4828-DDE661927E81", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for Appeal Request", null, "Transit Authority - NYCTA", "Closed", "2017-09-22T00:00:00", "2017-10-19T00:00:00", null, null, null, null, "NYCTA" ]
  , [ "row-a458.haye.yd5b", "00000000-0000-0000-956D-56BAEECC57F9", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for Appeal Request", null, "Police Department - NYPD", "Open", "2017-09-22T00:00:00", null, null, null, null, null, "NYPD" ]
  , [ "row-bu45_kqk4_kh4r", "00000000-0000-0000-3B63-5919BDCB6E0F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-09-22T00:00:00", null, "4323", "Police Officer", "2020-08-26T00:00:00", null, "NYPD" ]
  , [ "row-f59q-e2ff~66cc", "00000000-0000-0000-F04E-8B6250204270", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Police Department - NYPD", "Open", "2017-09-22T00:00:00", null, "5329", "Police Officer", "2021-07-07T00:00:00", null, "NYPD" ]
  , [ "row-i243~3qy4-zg9d", "00000000-0000-0000-0930-DBCB489ECD60", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Eligibility", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-22T00:00:00", null, "7532", "Promotion to Lieutenant (Police)", null, null, "DCAS" ]
  , [ "row-rrh4.35b6_ptsv", "00000000-0000-0000-90C0-E3D65E885FFF", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Open", "2017-09-22T00:00:00", null, "7322", "Correction Officer", "2021-05-17T00:00:00", null, "DOC" ]
  , [ "row-icji~6i5d-tm8p", "00000000-0000-0000-E291-ED4049BD6CD6", 0, 1515534308, null, 1515534308, null, "{ }", "Other", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-09-22T00:00:00", "2017-10-11T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-x2rq_iaz3.6wat", "00000000-0000-0000-F382-1C68E7D2DB5C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", null, "Department of Investigation - DOI", "Open", "2017-09-21T00:00:00", null, null, null, null, null, "DOI" ]
  , [ "row-cy9d-gher.ghyi", "00000000-0000-0000-C983-C23589038900", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-09-21T00:00:00", "2017-11-02T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-xbf6-wwif_zrcd", "00000000-0000-0000-208A-DA7ACCB6A5F6", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-21T00:00:00", null, "6012", "Auto Mechanic", "2021-09-06T00:00:00", null, "DCAS" ]
  , [ "row-we9m~epq4~iagb", "00000000-0000-0000-62CF-C9F950B7D780", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-21T00:00:00", null, "7004", "Computer Programmer Analyst", null, null, "DCAS" ]
  , [ "row-tjbe-9ydb~ew7y", "00000000-0000-0000-3BFB-0FA4ADCA755D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-09-21T00:00:00", "2017-11-08T00:00:00", "4300", "Police Officer", "2019-12-22T00:00:00", null, "NYPD" ]
  , [ "row-qzed_8bk6-vuip", "00000000-0000-0000-832E-1D20BBF88D78", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-09-20T00:00:00", null, null, null, null, null, "DCAS" ]
  , [ "row-hbbe_bari.nhhu", "00000000-0000-0000-FA44-BDFBE6C4D524", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-09-20T00:00:00", "2017-11-02T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-z7q3_6sci~yyhd", "00000000-0000-0000-01A1-2999C1CC640E", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-09-20T00:00:00", "2017-09-21T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-wzav_awhg_r2gd", "00000000-0000-0000-56FA-4B4C846AC4F3", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-20T00:00:00", null, "7004", "Computer Programmer Analyst", null, null, "DCAS" ]
  , [ "row-8sgc-89je~99if", "00000000-0000-0000-55CF-34A6F3F9DA2C", 0, 1515534308, null, 1515534308, null, "{ }", "Jurisdictional Issue", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-09-19T00:00:00", null, null, null, null, null, "DCAS" ]
  , [ "row-r7hf~utst.uxre", "00000000-0000-0000-CEE3-9F788F7239FC", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-09-18T00:00:00", "2017-10-13T00:00:00", "5307", "School Safety Agent", "2020-08-17T00:00:00", null, "NYPD" ]
  , [ "row-me5a~nchs_z5d2", "00000000-0000-0000-1EDC-921CCCBCAD4F", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-09-18T00:00:00", "2017-11-02T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-buti~5q35-fsbb", "00000000-0000-0000-AA8F-88765265EE8C", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-09-18T00:00:00", "2017-11-02T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-8k5i~tjbq_ny44", "00000000-0000-0000-6333-91196F13E120", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-09-18T00:00:00", "2017-10-12T00:00:00", "8098", "Train Operator", "2017-09-19T00:00:00", null, "DCAS" ]
  , [ "row-uery~bvzc.mfkd", "00000000-0000-0000-416F-5CA8D6747D16", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-09-18T00:00:00", "2017-11-21T00:00:00", "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-7ig3~xbp4-28jw", "00000000-0000-0000-8A03-07B31A8FFD6C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Open", "2017-09-18T00:00:00", null, "7322", "Correction Officer", "2021-05-17T00:00:00", null, "DOC" ]
  , [ "row-d57m-qgva~m6g8", "00000000-0000-0000-2784-C81694763172", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Suspension", "Department of Correction - DOC", "Closed", "2017-09-18T00:00:00", "2017-12-21T00:00:00", null, null, null, null, "DOC" ]
  , [ "row-bek9~y39k~ky83", "00000000-0000-0000-CCC2-6C05EE62BCC8", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Open", "2017-09-18T00:00:00", null, "7322", "Correction Officer", "2021-05-17T00:00:00", null, "DOC" ]
  , [ "row-v8qi_n6gh~jf69", "00000000-0000-0000-2FA5-1E4BB6BAA090", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-09-15T00:00:00", "2017-11-02T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-28qs.zb9j-emsj", "00000000-0000-0000-DB27-F09484A2F1E2", 0, 1515534308, null, 1515534308, null, "{ }", "Duplicate Filing", null, "Civil Service Commission - NYCCSC", "Closed", "2017-09-15T00:00:00", null, null, null, null, null, "NYCCSC" ]
  , [ "row-juk2_g4qg-abf9", "00000000-0000-0000-890B-86D3B4E3756F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-15T00:00:00", null, "7004", "Computer Programmer Analyst", null, null, "DCAS" ]
  , [ "row-zub8.jjwh.qxsk", "00000000-0000-0000-F2BC-FC1B27DAC997", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-09-15T00:00:00", "2017-11-21T00:00:00", "6014", "Auto Mechanic (Diesel)", null, null, "DCAS" ]
  , [ "row-438y.expp_gmrq", "00000000-0000-0000-8E9C-C471D2BC12CB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-09-15T00:00:00", "2017-11-27T00:00:00", "6012", "Auto Mechanic", "2021-09-06T00:00:00", null, "DCAS" ]
  , [ "row-ndbg.2kx9-nqbd", "00000000-0000-0000-F467-A9A65679EFE6", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Open", "2017-09-15T00:00:00", null, "4311", "Correction Officer", "2019-09-24T00:00:00", null, "DOC" ]
  , [ "row-wskv~eqwy-hsec", "00000000-0000-0000-C522-15ABEFFC0D7B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Suspension", "Police Department - NYPD", "Open", "2017-09-15T00:00:00", null, null, null, null, null, "NYPD" ]
  , [ "row-i79r-7m8p-e4cj", "00000000-0000-0000-D8D9-4294094AD74C", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-14T00:00:00", null, null, null, null, null, "DCAS" ]
  , [ "row-kbdu-ajdb~vcuy", "00000000-0000-0000-9A8B-FCED43148F4D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Termination", "Housing Authority - NYCHA", "Open", "2017-09-14T00:00:00", null, null, null, null, null, "NYCHA" ]
  , [ "row-7kgx.xaee.f685", "00000000-0000-0000-E5D1-3B10D4BD0BE6", 0, 1515534308, null, 1515534308, null, "{ }", "Other", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-09-14T00:00:00", "2017-09-14T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-ft4q_2tpm~4ykd", "00000000-0000-0000-B46C-713091084712", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Open", "2017-09-14T00:00:00", null, "6315", "Correction Officer", "2020-06-15T00:00:00", null, "DOC" ]
  , [ "row-hsqt.py5u_9bm5", "00000000-0000-0000-F00F-06F8AF89047F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-09-14T00:00:00", "2017-10-23T00:00:00", "4313", "Police Officer", "2020-06-23T00:00:00", null, "NYPD" ]
  , [ "row-tw5h~yrtt-vw6j", "00000000-0000-0000-F7EA-52CE540F4FD2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-09-14T00:00:00", null, "4313", "Police Officer", "2020-06-23T00:00:00", null, "NYPD" ]
  , [ "row-4fd9~dyuh~jmug", "00000000-0000-0000-C7AC-F2A319ABBFBA", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-14T00:00:00", null, "7329", "Correction Officer", "2021-02-15T00:00:00", null, "DCAS" ]
  , [ "row-aetx-fwig~c797", "00000000-0000-0000-F1E9-CF40225BF911", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Eligibility", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-14T00:00:00", null, "5537", "Promotion to Principal Administrative Associate", "2021-02-22T00:00:00", null, "DCAS" ]
  , [ "row-6f6s_8auq-2sph", "00000000-0000-0000-12AA-367A0B2326E3", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-14T00:00:00", null, "8098", "Train Operator", "2017-09-19T00:00:00", null, "DCAS" ]
  , [ "row-jmv9-6rri~hhtx", "00000000-0000-0000-FE77-2EBA4ACDF28A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Open", "2017-09-14T00:00:00", null, "7322", "Correction Officer", "2021-05-17T00:00:00", null, "DOC" ]
  , [ "row-k67r~kcxp.vd3h", "00000000-0000-0000-4AAA-141BE010C316", 0, 1515534308, null, 1515534308, null, "{ }", "Other", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-09-13T00:00:00", null, null, null, null, null, "DCAS" ]
  , [ "row-sq9t.5w9i-csu3", "00000000-0000-0000-5543-DFD33E204348", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Police Department - NYPD", "Open", "2017-09-13T00:00:00", null, "5311", "Police Officer", "2021-04-12T00:00:00", null, "NYPD" ]
  , [ "row-gfqv~gfyz-b6ir", "00000000-0000-0000-58D1-6FE1708052E8", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Police Department - NYPD", "Closed", "2017-09-13T00:00:00", "2017-11-02T00:00:00", null, null, null, null, "NYPD" ]
  , [ "row-6nc5_qdew_wyx5", "00000000-0000-0000-3B4A-AF9DBE15E872", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Open", "2017-09-13T00:00:00", null, "7320", "Correction Officer", "2021-01-11T00:00:00", null, "DOC" ]
  , [ "row-6zbb-c9pd_cmrj", "00000000-0000-0000-8DB2-09EE5A399A79", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-13T00:00:00", null, "6044", "Fraud Investigator", null, null, "DCAS" ]
  , [ "row-weuz~cegg-9z3w", "00000000-0000-0000-5033-2D59B6382276", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Open", "2017-09-13T00:00:00", null, "7329", "Correction Officer", "2021-02-15T00:00:00", null, "DOC" ]
  , [ "row-naie~dhhm~qjkj", "00000000-0000-0000-70E9-69112A520A82", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Unauthorized Substance", "Police Department - NYPD", "Open", "2017-09-12T00:00:00", null, "5320", "Police Officer", "2021-06-30T00:00:00", null, "NYPD" ]
  , [ "row-pcab_e37g_5f84", "00000000-0000-0000-02C1-B4AFF5753C1B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-12T00:00:00", null, "6012", "Auto Mechanic", "2021-09-06T00:00:00", null, "DCAS" ]
  , [ "row-w4y6~593v_rg6m", "00000000-0000-0000-6191-DF8F561EE784", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-09-12T00:00:00", "2017-12-12T00:00:00", "7035", "Administrative Director of Social Services", "2021-07-19T00:00:00", null, "DCAS" ]
  , [ "row-ffi5.6yf9~s7ir", "00000000-0000-0000-3661-0330F38B4796", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-09-11T00:00:00", "2017-11-02T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-havy_3rvc-9utm", "00000000-0000-0000-1223-7AF9DFE37B63", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-09-11T00:00:00", "2017-10-10T00:00:00", "7003", "Computer Associate (Technical Support)", null, null, "DCAS" ]
  , [ "row-utyk.qpuv-87cv", "00000000-0000-0000-2EA7-A290806C64CA", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-09-11T00:00:00", "2017-11-03T00:00:00", "4300", "Police Officer", "2019-12-22T00:00:00", null, "NYPD" ]
  , [ "row-77xd~e9dk~zth2", "00000000-0000-0000-68C2-20C12AD6E89A", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "MTA New York City Transit - NYCT", "Closed", "2017-09-11T00:00:00", "2017-11-02T00:00:00", null, null, null, null, "NYCT" ]
  , [ "row-3g9w.ebrn.zvy3", "00000000-0000-0000-8224-23D6ABD4FDB9", 0, 1515534308, null, 1515534308, null, "{ }", "Other", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-09-08T00:00:00", "2017-09-08T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-pwge.xf4r~x83y", "00000000-0000-0000-7ABE-72A150A1F1AD", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-08T00:00:00", null, "7004", "Computer Programmer Analyst", null, null, "DCAS" ]
  , [ "row-h25v-965c.7x4c", "00000000-0000-0000-C1C0-1F4CA07CDE85", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-09-08T00:00:00", null, "5319", "Traffic Enforcement Agent", "2019-10-28T00:00:00", null, "NYPD" ]
  , [ "row-453s.cw77-s9ud", "00000000-0000-0000-CF40-9F0772701D3F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-08T00:00:00", null, "7004", "Computer Programmer Analyst", null, null, "DCAS" ]
  , [ "row-w5jy_m32e~j78j", "00000000-0000-0000-F1C6-39F17DC19EC8", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Suspension", "Department of Correction - DOC", "Closed", "2017-09-08T00:00:00", "2017-12-21T00:00:00", null, null, null, null, "DOC" ]
  , [ "row-ihxb~ajbu_sa8m", "00000000-0000-0000-37FD-37F1E31001F8", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-09-08T00:00:00", "2017-11-28T00:00:00", "3322", "School Safety Agent", "2018-05-28T00:00:00", null, "NYPD" ]
  , [ "row-kd34-jte9-6x5f", "00000000-0000-0000-49A0-5E76C56063F9", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-09-07T00:00:00", "2017-09-06T00:00:00", "6016", "High Pressure Plant Tender", "2020-12-21T00:00:00", null, "DCAS" ]
  , [ "row-25wu.5dre-hych", "00000000-0000-0000-5A8A-06BDAA7C0A70", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "MTA New York City Transit - NYCT", "Open", "2017-09-07T00:00:00", null, "6612", "Car Inspector", null, null, "NYCT" ]
  , [ "row-w6hz~tqee.vf8i", "00000000-0000-0000-6802-E5316D984702", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-09-07T00:00:00", "2017-09-22T00:00:00", "4335", "Police Communications Technician", "2017-11-14T00:00:00", null, "NYPD" ]
  , [ "row-m9jd.6nfc-xi3t", "00000000-0000-0000-9F7A-22468A5EC518", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Police Department - NYPD", "Closed", "2017-09-07T00:00:00", "2017-11-02T00:00:00", null, null, null, null, "NYPD" ]
  , [ "row-bgdn.tv37_gdqu", "00000000-0000-0000-088D-F56D70138444", 0, 1515534308, null, 1515534308, null, "{ }", "Other", null, "Police Department - NYPD", "Closed", "2017-09-06T00:00:00", "2017-09-07T00:00:00", null, null, null, null, "NYPD" ]
  , [ "row-gq26~nhmc-i85e", "00000000-0000-0000-657F-6FFC33C7C914", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-09-06T00:00:00", null, "6307", "Traffic Enforcement Agent", "2020-06-16T00:00:00", null, "NYPD" ]
  , [ "row-fgx8.3mkx~wncr", "00000000-0000-0000-5FD8-A2DDA56465D8", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-06T00:00:00", null, "6012", "Auto Mechanic", "2021-09-06T00:00:00", null, "DCAS" ]
  , [ "row-bvu2~k2q9-izdp", "00000000-0000-0000-3311-FDAA4E439488", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-06T00:00:00", null, "6014", "Auto Mechanic (Diesel)", null, null, "DCAS" ]
  , [ "row-6zxh-kv3z-jmha", "00000000-0000-0000-D35D-B99EAC9F4A30", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-05T00:00:00", null, "5511", "Promotion to Captain (Correction)", "2020-05-11T00:00:00", null, "DCAS" ]
  , [ "row-k982-4fdy_49nz", "00000000-0000-0000-0B65-84EC83D4CBC5", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-09-05T00:00:00", null, "7020", "Public Health Nurse (School Health)", "2021-05-24T00:00:00", null, "DCAS" ]
  , [ "row-u2nn.g32u-hrfd", "00000000-0000-0000-6C7C-CFD48EEB84D2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-09-05T00:00:00", "2017-10-25T00:00:00", "7004", "Computer Programmer Analyst", null, null, "DCAS" ]
  , [ "row-agtg-b38w.j9cp", "00000000-0000-0000-DB3D-37B721E31294", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-09-05T00:00:00", "2017-12-06T00:00:00", "7035", "Administrative Director of Social Services", "2021-07-19T00:00:00", null, "DCAS" ]
  , [ "row-2mvv.v2fh~8qc7", "00000000-0000-0000-665F-4534A63E40A5", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-09-01T00:00:00", null, "4300", "Police Officer", "2019-12-22T00:00:00", null, "NYPD" ]
  , [ "row-2bim~5smg_g2gq", "00000000-0000-0000-962C-3612A503025D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-09-01T00:00:00", "2017-12-11T00:00:00", "7263", "Associate Public Records Officer", "2018-08-30T00:00:00", null, "DCAS" ]
  , [ "row-i72n~hwrb_3urz", "00000000-0000-0000-0193-962D618A38E4", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "MTA New York City Transit - NYCT", "Closed", "2017-09-01T00:00:00", "2017-11-02T00:00:00", null, null, null, null, "NYCT" ]
  , [ "row-2hgv.iw7a~tgdu", "00000000-0000-0000-5CD1-B155B756E3A0", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-09-01T00:00:00", null, "4307", "School Safety Agent", "2020-01-07T00:00:00", null, "NYPD" ]
  , [ "row-ebu6_ypeu-irah", "00000000-0000-0000-3418-36E33072FF2A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Unauthorized Substance", "Police Department - NYPD", "Open", "2017-09-01T00:00:00", null, "6310", "Police Communications Technician", "2020-12-28T00:00:00", null, "NYPD" ]
  , [ "row-p4wk.rvg4-6kvd", "00000000-0000-0000-6A1B-FB24F8CB0C66", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Open", "2017-09-01T00:00:00", null, "7329", "Correction Officer", "2021-02-15T00:00:00", null, "DOC" ]
  , [ "row-p8dd-3cdi-348m", "00000000-0000-0000-D6D9-ED352205CEF4", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Police Department - NYPD", "Closed", "2017-08-31T00:00:00", "2017-10-05T00:00:00", null, null, null, null, "NYPD" ]
  , [ "row-bnse-cvuj.qpaj", "00000000-0000-0000-3609-0CF88049383D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-08-31T00:00:00", null, "6012", "Auto Mechanic", "2021-09-06T00:00:00", null, "DCAS" ]
  , [ "row-54a4.5y9h.7q5v", "00000000-0000-0000-8BEC-8F63E0E58901", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-08-31T00:00:00", null, "4320", "Police Officer", "2020-08-25T00:00:00", null, "NYPD" ]
  , [ "row-xyj7_hz72.7fk7", "00000000-0000-0000-8B4D-E45281D7318A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-31T00:00:00", "2017-10-04T00:00:00", "6012", "Auto Mechanic", null, null, "DCAS" ]
  , [ "row-sfa2~ppvs-g2j6", "00000000-0000-0000-0419-C5580DF9AFC3", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-30T00:00:00", "2017-10-03T00:00:00", "6012", "Auto Mechanic", null, null, "DCAS" ]
  , [ "row-agav~zpkc-74b9", "00000000-0000-0000-CB1D-8931C3903E4A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-30T00:00:00", "2017-09-27T00:00:00", "6012", "Auto Mechanic", null, null, "DCAS" ]
  , [ "row-sx7w_bahn-in7i", "00000000-0000-0000-7D99-65AD06A479A2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Eligibility", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-30T00:00:00", "2017-11-02T00:00:00", "6033", "Maintenance Worker", "2021-05-10T00:00:00", null, "DCAS" ]
  , [ "row-tmz7_7nay_ybhc", "00000000-0000-0000-8FE8-9A618059EA58", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-30T00:00:00", "2017-10-31T00:00:00", "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-dj9x-n43k-xa56", "00000000-0000-0000-D253-CA157BCBE508", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-08-29T00:00:00", "2017-10-16T00:00:00", "5331", "Police Communications Technician", "2020-09-28T00:00:00", null, "NYPD" ]
  , [ "row-dp6n~5fq6.7snx", "00000000-0000-0000-FDCE-842059D311EC", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-08-29T00:00:00", null, "3316", "Police Officer", "2019-12-14T00:00:00", null, "NYPD" ]
  , [ "row-acdj_x4vv~8ty8", "00000000-0000-0000-985D-A0BD42193287", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-08-29T00:00:00", null, "6047", "Health Services Manager", "2021-05-24T00:00:00", null, "DCAS" ]
  , [ "row-gtsy~wfqz_nm37", "00000000-0000-0000-1135-9888220D4ED5", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-08-28T00:00:00", null, "6012", "Auto Mechanic", "2021-09-06T00:00:00", null, "DCAS" ]
  , [ "row-szch_nwh8.y4nh", "00000000-0000-0000-6CCE-278819F99FAB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-08-28T00:00:00", null, "4307", "School Safety Agent", "2020-01-07T00:00:00", null, "NYPD" ]
  , [ "row-pn7r.rf4q.h8vs", "00000000-0000-0000-7BE3-E4DA4E0C64EC", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-08-28T00:00:00", null, "4310", "Police Officer", "2019-12-28T00:00:00", null, "NYPD" ]
  , [ "row-fdem_pu45.yr7t", "00000000-0000-0000-3B2B-AAEB9C060614", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-08-28T00:00:00", "2017-12-22T00:00:00", "3308", "Police Officer", "2019-06-22T00:00:00", null, "NYPD" ]
  , [ "row-kccx_rvfh~uyyk", "00000000-0000-0000-C26E-B1FD51350041", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Police Department - NYPD", "Closed", "2017-08-25T00:00:00", "2017-11-14T00:00:00", "5311", "Police Officer", "2021-04-12T00:00:00", null, "NYPD" ]
  , [ "row-7q9m_9i65_2usf", "00000000-0000-0000-34BA-6312E1DC7AC7", 0, 1515534308, null, 1515534308, null, "{ }", "Duplicate Filing", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-25T00:00:00", "2017-08-25T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-5ghb_8zpf.ma73", "00000000-0000-0000-1070-AE538221AB0E", 0, 1515534308, null, 1515534308, null, "{ }", "Duplicate Filing", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-25T00:00:00", "2017-08-25T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-jqhf-37wg_2jhc", "00000000-0000-0000-151B-EB7621B28607", 0, 1515534308, null, 1515534308, null, "{ }", "Other", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-25T00:00:00", "2017-08-25T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-2ve4~bhni-k32p", "00000000-0000-0000-E052-0563C3CB3FAB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-08-25T00:00:00", null, "6014", "Auto Mechanic (Diesel)", null, null, "DCAS" ]
  , [ "row-3wbd~ziyz_ba3g", "00000000-0000-0000-BACD-65B149617FD7", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-24T00:00:00", "2017-08-24T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-zc5v-hney.j6qm", "00000000-0000-0000-EE5B-1FAB70543CA8", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for Appeal Request", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-24T00:00:00", "2017-09-08T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-tyjh-s6gq_crxt", "00000000-0000-0000-DF01-2A2EB8957E50", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-08-24T00:00:00", "2017-10-27T00:00:00", "4310", "Police Officer", "2019-12-28T00:00:00", null, "NYPD" ]
  , [ "row-qdx4_x28e~cp6n", "00000000-0000-0000-9EE7-A05BA83C95AF", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-08-24T00:00:00", "2017-11-29T00:00:00", "3327", "School Safety Agent", "2019-09-10T00:00:00", null, "NYPD" ]
  , [ "row-crzy~igfa-f8fv", "00000000-0000-0000-6478-B9D3D7FE67E0", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-08-23T00:00:00", "2017-12-01T00:00:00", "4315", "Traffic Enforcement Agent", "2018-08-23T00:00:00", null, "NYPD" ]
  , [ "row-n38x_w6vi-peqa", "00000000-0000-0000-B814-2FC65966C11F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-08-23T00:00:00", null, "6067", "City Planner", "2021-06-21T00:00:00", null, "DCAS" ]
  , [ "row-va6q.wq8u-rrjt", "00000000-0000-0000-6625-E960306D5B00", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-08-23T00:00:00", null, "5039", "Principal Administrative Associate", "2021-07-19T00:00:00", null, "DCAS" ]
  , [ "row-rbit-i6z4_qbfv", "00000000-0000-0000-B5C6-6B66320621AD", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Open", "2017-08-23T00:00:00", null, "7320", "Correction Officer", "2021-01-11T00:00:00", null, "DOC" ]
  , [ "row-p5b4_svg5~68dp", "00000000-0000-0000-3FEF-09E6F9313BEE", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-08-23T00:00:00", null, "6012", "Auto Mechanic", "2021-09-06T00:00:00", null, "DCAS" ]
  , [ "row-pgeg.cjbz.dved", "00000000-0000-0000-F7F4-6F6F4E56ACB8", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Unauthorized Substance", "Fire Department - FDNY", "Open", "2017-08-23T00:00:00", null, "7000", "Emergency Medical Specialist - EMT", "2021-03-29T00:00:00", null, "FDNY" ]
  , [ "row-nqc9~9i5s-u5yx", "00000000-0000-0000-3313-7D914C6B2DD4", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-08-22T00:00:00", null, "2326", "Police offficer", "2018-07-02T00:00:00", null, "NYPD" ]
  , [ "row-eskj_mrb5~ma49", "00000000-0000-0000-E6F9-AAE016B46B3F", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-22T00:00:00", "2017-08-24T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-3469-vmte~ref7", "00000000-0000-0000-B18B-2AEDDADCC0C6", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Termination", "Police Department - NYPD", "Open", "2017-08-22T00:00:00", null, null, null, null, null, "NYPD" ]
  , [ "row-cgaq_9kc8-ee9x", "00000000-0000-0000-48A8-944ADC928D63", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-22T00:00:00", "2017-10-27T00:00:00", "5022", "Education Officer", null, null, "DCAS" ]
  , [ "row-ft2i-aj2c~8cji", "00000000-0000-0000-FC09-7FF9BFC06B8E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Citywide Administrative Services - DCAS", "Open", "2017-08-22T00:00:00", null, "3317", "Police Officer", "2019-12-16T00:00:00", null, "DCAS" ]
  , [ "row-tehx~ehc2_u54x", "00000000-0000-0000-8C39-77996F33CED8", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-21T00:00:00", "2017-09-27T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-seu6.vuhu~3viu", "00000000-0000-0000-5829-7BFFF7F4CAB8", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-08-21T00:00:00", null, "4316", "Police Officer", "2020-08-24T00:00:00", null, "NYPD" ]
  , [ "row-7yx5~yqnt.bxp8", "00000000-0000-0000-78D3-871C5184F8CB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-08-21T00:00:00", null, "5311", "Police Officer", "2021-04-12T00:00:00", null, "NYPD" ]
  , [ "row-2tda-fzfp.hicc", "00000000-0000-0000-ADB1-34305C3921F3", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-08-21T00:00:00", "2017-11-13T00:00:00", "2053", "Police Officer", "2019-06-17T00:00:00", null, "NYPD" ]
  , [ "row-eyq8_yrrk~h9ej", "00000000-0000-0000-457A-A8BDB1DB143B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-21T00:00:00", "2017-10-30T00:00:00", "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-jkwp~49pz-9d7p", "00000000-0000-0000-AEE6-478193B0A646", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-08-21T00:00:00", "2017-09-06T00:00:00", "5305", "Police Officer", "2021-03-02T00:00:00", null, "NYPD" ]
  , [ "row-6ipu_67yi-ika2", "00000000-0000-0000-A2C4-29623FB07CED", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for Appeal Request", null, "Police Department - NYPD", "Closed", "2017-08-21T00:00:00", "2017-09-27T00:00:00", null, null, null, null, "NYPD" ]
  , [ "row-fvsq-gd3f.wxnt", "00000000-0000-0000-CEF8-CE4F94825A9B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-08-21T00:00:00", null, "3308", "Police Officer", "2019-06-22T00:00:00", null, "NYPD" ]
  , [ "row-h7gx_hiim~fbsg", "00000000-0000-0000-66A3-616D3D6F7B15", 0, 1515534308, null, 1515534308, null, "{ }", "Other", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-21T00:00:00", "2017-08-29T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-tjbx~ca9v_f2vv", "00000000-0000-0000-F1A7-1817FDD29F4B", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Education - DOE", "Closed", "2017-08-18T00:00:00", "2017-09-27T00:00:00", null, null, null, null, "DOE" ]
  , [ "row-3z63_vvwr.3stv", "00000000-0000-0000-AA61-9CBAADBDA462", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-08-18T00:00:00", null, "6012", "Auto Mechanic", "2021-09-06T00:00:00", null, "DCAS" ]
  , [ "row-rpkw~98bu-e4tu", "00000000-0000-0000-59FE-1415817B5378", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-08-18T00:00:00", "2017-12-27T00:00:00", "4059", "Police Administrative Aide", "2019-08-05T00:00:00", null, "NYPD" ]
  , [ "row-pqgj.ws9z_wxzy", "00000000-0000-0000-E9CB-A2C130516913", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-18T00:00:00", "2017-11-09T00:00:00", "6012", "Auto Mechanic", "2021-09-06T00:00:00", null, "DCAS" ]
  , [ "row-x277_d8vf_p3x6", "00000000-0000-0000-17FC-5F719219149F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-18T00:00:00", "2017-10-25T00:00:00", "6012", "Auto Mechanic", null, null, "DCAS" ]
  , [ "row-8ujc-mu96.zery", "00000000-0000-0000-0D48-57917FA381C5", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-08-18T00:00:00", "2017-12-15T00:00:00", "4310", "Police Officer", "2019-12-28T00:00:00", null, "NYPD" ]
  , [ "row-crzk-656f_xzm2", "00000000-0000-0000-8BED-42621D41566F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-08-18T00:00:00", null, "5323", "Traffic Enforcement Agent", "2019-10-29T00:00:00", null, "NYPD" ]
  , [ "row-9mnq-ff56~qca6", "00000000-0000-0000-901A-79DD687A721A", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-17T00:00:00", "2017-09-27T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-sd2m_hrww_djt9", "00000000-0000-0000-868C-DE56E50A9F12", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-08-17T00:00:00", "2017-08-21T00:00:00", "3521", "Police Officer", "2017-12-11T00:00:00", null, "NYPD" ]
  , [ "row-5gzc-ffsi.rp4r", "00000000-0000-0000-0190-45A4305199D3", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-17T00:00:00", "2017-11-03T00:00:00", "6012", "Auto Mechanic", null, null, "DCAS" ]
  , [ "row-amvq-f92y~cadg", "00000000-0000-0000-8C6E-E928A7859889", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-17T00:00:00", "2017-09-27T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-xhbq-hgm9~wshu", "00000000-0000-0000-4C4F-23AB3B7EA705", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-17T00:00:00", "2017-12-05T00:00:00", "6012", "Auto Mechanic", "2021-09-06T00:00:00", null, "DCAS" ]
  , [ "row-xdpv-wnfq.3qrt", "00000000-0000-0000-8D9F-577105D3C27C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Open", "2017-08-17T00:00:00", null, "6308", "Correction Officer", "2020-03-02T00:00:00", null, "DOC" ]
  , [ "row-iahu~27tb-bp4v", "00000000-0000-0000-C3D4-7130AA2587B9", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-08-17T00:00:00", null, "6014", "Auto Mechanic (Diesel)", null, null, "DCAS" ]
  , [ "row-rzvf.2xmd.yfif", "00000000-0000-0000-8FA0-5F52327E9A6B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-08-17T00:00:00", null, "7011", "Administrative Community Relations Specialist", "2021-09-21T00:00:00", null, "DCAS" ]
  , [ "row-4idu~e8d5_4kzx", "00000000-0000-0000-76D4-E44D6DDACF17", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", null, "Fire Department - FDNY", "Closed", "2017-08-16T00:00:00", "2017-08-17T00:00:00", null, null, null, null, "FDNY" ]
  , [ "row-h3tg-6n5f_ntp3", "00000000-0000-0000-93C5-17FA123A8E6C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", null, "Police Department - NYPD", "Open", "2017-08-16T00:00:00", null, null, null, null, null, "NYPD" ]
  , [ "row-ki49_unak-tmar", "00000000-0000-0000-0588-15D7E5CFCF12", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-16T00:00:00", "2017-08-17T00:00:00", "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-yu8u-4gey~yh8z", "00000000-0000-0000-85D0-E6E227CCD2C0", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-08-16T00:00:00", "2017-10-27T00:00:00", "4306", "Police Officer", "2019-12-23T00:00:00", null, "NYPD" ]
  , [ "row-dw9s.wtca~dzym", "00000000-0000-0000-E7FF-A22A8354717B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-08-16T00:00:00", null, "4306", "Police Officer", "2019-12-23T00:00:00", null, "NYPD" ]
  , [ "row-c76a-jpf6~pmy2", "00000000-0000-0000-3CE7-F3A6D1F02DF2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-08-16T00:00:00", "2017-10-19T00:00:00", "4310", "Police Officer", "2019-12-28T00:00:00", null, "NYPD" ]
  , [ "row-4g3j-kaun~4x7j", "00000000-0000-0000-E731-27447E242093", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Eligibility", "Department of Citywide Administrative Services - DCAS", "Open", "2017-08-16T00:00:00", null, "6704", "Promotion to Train Operator", "2021-06-21T00:00:00", null, "DCAS" ]
  , [ "row-sthj~qrpg-auew", "00000000-0000-0000-4515-3C48D86A9127", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Correction - DOC", "Open", "2017-08-16T00:00:00", null, "6308", "Correction Officer", "2020-03-02T00:00:00", null, "DOC" ]
  , [ "row-fbn2_6tf7.5gnt", "00000000-0000-0000-1D0E-B56E6AFC14DB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-08-16T00:00:00", "2017-08-28T00:00:00", "4335", "Police Communications Technician", "2017-11-14T00:00:00", null, "NYPD" ]
  , [ "row-z3ag.dhsr-9gq9", "00000000-0000-0000-E842-A341958D783C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-08-16T00:00:00", "2017-12-18T00:00:00", "7320", "Correction Officer", "2021-01-11T00:00:00", null, "DOC" ]
  , [ "row-ev38~rmxm_mx6v", "00000000-0000-0000-7F3E-A4408CD4F47B", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-15T00:00:00", "2017-09-13T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-qedu_inqi_uv8u", "00000000-0000-0000-2464-E03A460E2066", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Eligibility", "Department of Citywide Administrative Services - DCAS", "Open", "2017-08-15T00:00:00", null, "6704", "Promotion to Train Operator", "2021-06-21T00:00:00", null, "DCAS" ]
  , [ "row-3c7i.899y_dsph", "00000000-0000-0000-F9F7-6474AA7E2BE0", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-08-14T00:00:00", null, "5018", "Computer Service Technician", "2021-06-14T00:00:00", null, "DCAS" ]
  , [ "row-a2v8~eiru_ufzw", "00000000-0000-0000-0F30-C0A77901B2AD", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "MTA New York City Transit - NYCT", "Closed", "2017-08-14T00:00:00", "2017-09-29T00:00:00", "7600", "Structure Maintainer Group G", null, null, "NYCT" ]
  , [ "row-ntqb~cfiv~fvrf", "00000000-0000-0000-9898-3A9F718E4279", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Correction - DOC", "Open", "2017-08-14T00:00:00", null, "6029", "Probation Officer", "2020-09-14T00:00:00", null, "DOC" ]
  , [ "row-9d6q-urj4.bmbv", "00000000-0000-0000-8362-C8B845A0CABB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Eligibility", "Department of Citywide Administrative Services - DCAS", "Open", "2017-08-14T00:00:00", null, "6704", "Promotion to Train Operator", "2021-06-21T00:00:00", null, "DCAS" ]
  , [ "row-q3jy_x537~jhsh", "00000000-0000-0000-A76A-965C027673F8", 0, 1515534308, null, 1515534308, null, "{ }", "Jurisdictional Issue", null, "Police Department - NYPD", "Closed", "2017-08-14T00:00:00", "2017-08-16T00:00:00", null, null, null, null, "NYPD" ]
  , [ "row-3qxh_ad8u_wntf", "00000000-0000-0000-3082-BFE29655F5EF", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-14T00:00:00", "2017-08-17T00:00:00", "5011", "Administrative Staff Analyst", "2020-09-28T00:00:00", null, "DCAS" ]
  , [ "row-f8w9~idc3~zesx", "00000000-0000-0000-7FA0-C033B8827F6A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-08-13T00:00:00", null, "6047", "Health Services Manager", "2021-05-24T00:00:00", null, "DCAS" ]
  , [ "row-9iwh_97pa_v9xn", "00000000-0000-0000-3FE2-5F22F45ACF2E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-13T00:00:00", "2017-10-24T00:00:00", "6012", "Auto Mechanic", null, null, "DCAS" ]
  , [ "row-gmkm-5459-yci2", "00000000-0000-0000-860C-3CDFA2D6EC23", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-11T00:00:00", "2017-10-17T00:00:00", "5022", "Education Officer", "2021-07-05T00:00:00", null, "DCAS" ]
  , [ "row-rjk5_pygp-ejxs", "00000000-0000-0000-0D2E-23386314616C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-11T00:00:00", "2017-09-07T00:00:00", "7000", "Emergency Medical Specialist - EMT (Fire)", "2021-03-29T00:00:00", null, "DCAS" ]
  , [ "row-2c8g~9eyj-vpfe", "00000000-0000-0000-FEB8-066DBF61E8B1", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-08-11T00:00:00", null, "3309", "Police Officer", "2019-06-23T00:00:00", null, "NYPD" ]
  , [ "row-4xmm.2stg_f67n", "00000000-0000-0000-8F44-44CE4CAF13BD", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-08-11T00:00:00", null, "4310", "Police Officer", "2019-12-28T00:00:00", null, "NYPD" ]
  , [ "row-xm24.tfxh-3jyc", "00000000-0000-0000-D383-5C27C1279198", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-10T00:00:00", "2017-08-31T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-8awq_syry.wrud", "00000000-0000-0000-1216-24292662414A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-08-10T00:00:00", "2017-08-30T00:00:00", "4335", "Police Communications Technician", "2017-11-14T00:00:00", null, "NYPD" ]
  , [ "row-j72a~fr9c.xqty", "00000000-0000-0000-8489-C29EF0E3EBEE", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Correction - DOC", "Open", "2017-08-10T00:00:00", null, "6308", "Correction Officer", "2020-03-02T00:00:00", null, "DOC" ]
  , [ "row-4fwa_tpm4_8b3q", "00000000-0000-0000-55A1-4F6CDD8A037B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "MTA New York City Transit - NYCT", "Open", "2017-08-10T00:00:00", null, "5800", "Signal Maintainer Helper", null, null, "NYCT" ]
  , [ "row-vf4f~3b5v-6tq6", "00000000-0000-0000-037D-198CBEE59167", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-09T00:00:00", "2017-08-29T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-affe-xu6z.5zy9", "00000000-0000-0000-A895-0CCC22C84986", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-08-09T00:00:00", null, "6066", "Juvenile Counselor", "2021-05-10T00:00:00", null, "DCAS" ]
  , [ "row-z8tz.t63u-y6s9", "00000000-0000-0000-E3A3-EB05964F45EC", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-08-08T00:00:00", null, "3048", "Police Officer", "2019-12-11T00:00:00", null, "NYPD" ]
  , [ "row-qica_wzi7.9tt6", "00000000-0000-0000-2807-4DC5AA30BC83", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-08-08T00:00:00", null, "3315", "Police Officer", "2019-12-10T00:00:00", null, "NYPD" ]
  , [ "row-x6ce.uwef.jgd4", "00000000-0000-0000-BCF3-60AC44EF02FE", 0, 1515534308, null, 1515534308, null, "{ }", "Other", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-08T00:00:00", "2017-08-08T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-97cz.rcnr_a99i", "00000000-0000-0000-C714-9ECCCDF85656", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-08T00:00:00", "2017-11-08T00:00:00", "6043", "Construction Project Manager Intern", null, null, "DCAS" ]
  , [ "row-q9xh_teng_6zx5", "00000000-0000-0000-A93E-D6400BE4CF97", 0, 1515534308, null, 1515534308, null, "{ }", "Other", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-07T00:00:00", "2017-08-07T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-wn6c.45gs~fuf4", "00000000-0000-0000-C781-AEDA76AB1263", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-08-07T00:00:00", "2017-12-15T00:00:00", "3316", "Police Officer", "2019-12-14T00:00:00", null, "NYPD" ]
  , [ "row-89qj~vhic_r8pp", "00000000-0000-0000-491D-379D413697AF", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-08-07T00:00:00", null, "3310", "Police Officer", "2020-06-25T00:00:00", null, "NYPD" ]
  , [ "row-ky2t~j8fx~75eu", "00000000-0000-0000-E72A-9BD776FCC86F", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Probation - DOP", "Closed", "2017-08-07T00:00:00", "2017-09-13T00:00:00", null, null, null, null, "DOP" ]
  , [ "row-hzn7-7p6h~88mm", "00000000-0000-0000-37B7-FACE29C9735A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Veterans Credits", "Department of Citywide Administrative Services - DCAS", "Open", "2017-08-04T00:00:00", null, "7006", "Deputy City Sheriff", null, null, "DCAS" ]
  , [ "row-5kj8_bz3k_96fp", "00000000-0000-0000-DB81-1F7BC1CE398A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-04T00:00:00", "2017-10-05T00:00:00", "7003", "Computer Associate (Technical Support)", null, null, "DCAS" ]
  , [ "row-awwb_gc5k~8yt6", "00000000-0000-0000-1315-8E8EC8CBE695", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-08-04T00:00:00", null, "6033", "Maintenance Worker", "2021-05-10T00:00:00", null, "DCAS" ]
  , [ "row-q7wv_fczy.yjej", "00000000-0000-0000-238D-B83583D97AC8", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-08-03T00:00:00", "2017-10-18T00:00:00", "2311", "Police Officer", "2018-05-01T00:00:00", null, "NYPD" ]
  , [ "row-64nq~cdk2.vztd", "00000000-0000-0000-2B3C-43C6B54B5F78", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-03T00:00:00", "2017-11-21T00:00:00", "7004", "Computer Programmer Analyst", null, null, "DCAS" ]
  , [ "row-h5qe_y4ui~z8xa", "00000000-0000-0000-CF43-D60ED0EB1CFD", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Health and Mental Hygiene - DOHMH", "Open", "2017-08-03T00:00:00", null, "3328", "Special Officer", "2019-10-14T00:00:00", null, "DOHMH" ]
  , [ "row-88rs~566y_aub7", "00000000-0000-0000-174D-437A075E9566", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-03T00:00:00", "2017-08-23T00:00:00", "6527", "Associate Fraud Investigator (PROM)", "2021-05-17T00:00:00", null, "DCAS" ]
  , [ "row-adcc~bse2-8fny", "00000000-0000-0000-33B4-0747D16A2ED6", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "MTA New York City Transit - NYCT", "Closed", "2017-08-03T00:00:00", "2017-09-28T00:00:00", "7600", "Structure Maintainer Group G", null, null, "NYCT" ]
  , [ "row-szrk_nw9x~39kn", "00000000-0000-0000-6512-D91DB658BDA3", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "MTA New York City Transit - NYCT", "Closed", "2017-08-03T00:00:00", "2017-09-05T00:00:00", "7600", "Structure Maintainer Group G", null, null, "NYCT" ]
  , [ "row-z8jc_w4bm_nfzx", "00000000-0000-0000-BF4C-773F82D29B27", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-03T00:00:00", "2017-10-17T00:00:00", "6033", "Maintenance Worker", "2021-05-10T00:00:00", null, "DCAS" ]
  , [ "row-5n8r_7fsz_cue3", "00000000-0000-0000-F351-050C6D52CE06", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Eligibility", "Department of Citywide Administrative Services - DCAS", "Open", "2017-08-02T00:00:00", null, "7244", "Marine Oiler", "2018-06-28T00:00:00", null, "DCAS" ]
  , [ "row-u2hs_prud-9ui3", "00000000-0000-0000-AEE4-904D4DB06423", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-08-02T00:00:00", "2017-08-22T00:00:00", "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-6gt6~yibe.s6kw", "00000000-0000-0000-D242-15AE660A6F3A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-08-02T00:00:00", null, "5537", "Promotion to Principal Administrative Associate", "2021-02-22T00:00:00", null, "DCAS" ]
  , [ "row-4if9.j7v6-u6uh", "00000000-0000-0000-4C80-68CE5A8A7964", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Termination", "Housing Authority - NYCHA", "Closed", "2017-08-02T00:00:00", "2017-10-17T00:00:00", null, null, null, null, "NYCHA" ]
  , [ "row-rz7f_xd74~k2di", "00000000-0000-0000-0406-79407216860B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-08-01T00:00:00", "2017-10-24T00:00:00", "3314", "Police Officer", "2019-12-09T00:00:00", null, "NYPD" ]
  , [ "row-rb97_c642.ee76", "00000000-0000-0000-DE47-0C397D0FFDDE", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-07-31T00:00:00", null, "7011", "Administrative Community Relations Specialist", "2021-09-20T00:00:00", null, "DCAS" ]
  , [ "row-isdx_xpen_8ynj", "00000000-0000-0000-6E99-C9D7E04F51FF", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-07-31T00:00:00", "2017-11-28T00:00:00", "4310", "Police Officer", "2019-12-28T00:00:00", null, "NYPD" ]
  , [ "row-wrxs~n34d_f5cu", "00000000-0000-0000-F54D-FB2C3F86960E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Open", "2017-07-31T00:00:00", null, "7329", "Correction Officer", "2021-02-15T00:00:00", null, "DOC" ]
  , [ "row-gzh4-gjvg.a2t6", "00000000-0000-0000-15CC-61D9E1797EEF", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Open", "2017-07-31T00:00:00", null, "7329", "Correction Officer", "2021-02-15T00:00:00", null, "DOC" ]
  , [ "row-bxxm~xtfj_e3ss", "00000000-0000-0000-3E8B-605C89722074", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-07-31T00:00:00", null, "5039", "Principal Administrative Associate", "2021-07-19T00:00:00", null, "DCAS" ]
  , [ "row-6dph-eqws.c5ke", "00000000-0000-0000-CB8E-55C45A2AE05B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "MTA New York City Transit - NYCT", "Closed", "2017-07-31T00:00:00", "2017-10-10T00:00:00", "7600", "Structure Maintainer Group G", null, null, "NYCT" ]
  , [ "row-9375~7ex5-je9f", "00000000-0000-0000-A331-069117328482", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-31T00:00:00", "2017-09-06T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-tc7p-kmxi~9saf", "00000000-0000-0000-0A86-7475AD8FF633", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Administration for Children's Services - ACS", "Open", "2017-07-31T00:00:00", null, "5019", "Congregate Care Specialist", "2020-05-11T00:00:00", null, "ACS" ]
  , [ "row-7pjd~8zmx-ma4s", "00000000-0000-0000-A88C-646B39D1FE71", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-07-28T00:00:00", "2017-10-23T00:00:00", "4310", "Police Officer", "2019-12-28T00:00:00", null, "NYPD" ]
  , [ "row-p4ay_ngsu_wwvw", "00000000-0000-0000-FC08-2333234D14E7", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-28T00:00:00", null, null, null, null, null, "DCAS" ]
  , [ "row-4nbh~y4wk_izz2", "00000000-0000-0000-0397-FCAD42232E53", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-27T00:00:00", "2017-09-25T00:00:00", "6047", "Health Services Manager", "2021-05-24T00:00:00", null, "DCAS" ]
  , [ "row-2i6i~v4pm_jcdk", "00000000-0000-0000-0823-05C62CDFECAB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-27T00:00:00", "2017-08-17T00:00:00", "6043", "Construction Project Manager Intern", null, null, "DCAS" ]
  , [ "row-pm6r-x3pc.kree", "00000000-0000-0000-D1CF-FB41776CC3A2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Unauthorized Substance", "Police Department - NYPD", "Closed", "2017-07-27T00:00:00", "2017-10-17T00:00:00", "5327", "School Safety Agent", "2020-10-06T00:00:00", null, "NYPD" ]
  , [ "row-v3mb-4x56-3fda", "00000000-0000-0000-F69B-2278E46494D5", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-26T00:00:00", "2017-07-27T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-qfgf_ts5r-jvad", "00000000-0000-0000-029D-5D07AF80B908", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Open", "2017-07-26T00:00:00", null, "6003", "Emegency Medical Specialist - EMT", "2020-02-24T00:00:00", null, "FDNY" ]
  , [ "row-gi5e-4u7s.qfmb", "00000000-0000-0000-9068-487DF32E32D4", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-26T00:00:00", "2017-11-08T00:00:00", "7035", "Administrative Director of Social Services", "2021-07-19T00:00:00", null, "DCAS" ]
  , [ "row-n77i.cjk3-qrdg", "00000000-0000-0000-CD9C-EC4BB647455A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-07-26T00:00:00", "2017-12-18T00:00:00", "7329", "Correction Officer", "2021-02-15T00:00:00", null, "DOC" ]
  , [ "row-zvnc.wvfj-xkrp", "00000000-0000-0000-7F0C-0F234E908017", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Open", "2017-07-26T00:00:00", null, "7320", "Correction Officer", "2021-01-11T00:00:00", null, "DOC" ]
  , [ "row-ystm-hq4w~8uf4", "00000000-0000-0000-762C-8B7B779071E9", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-07-26T00:00:00", null, "6033", "Maintenance Worker", "2021-05-10T00:00:00", null, "DCAS" ]
  , [ "row-pndw-3xjw-mm3f", "00000000-0000-0000-54B5-3BD3077063A3", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-25T00:00:00", "2017-07-27T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-ng82_7rju-7d9u", "00000000-0000-0000-AD3D-FFE0D34A152E", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-25T00:00:00", "2017-07-25T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-icmf~aykx-fme4", "00000000-0000-0000-458D-71E502F32D8B", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-25T00:00:00", "2017-07-25T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-h288~5z9h_qxpk", "00000000-0000-0000-4C8B-2F34BAF9250C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-07-25T00:00:00", null, "5537", "Promotion to Principal Administrative Associate", "2021-02-22T00:00:00", null, "DCAS" ]
  , [ "row-38bu~av6x~38sp", "00000000-0000-0000-B03B-87F5DB944C86", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-07-25T00:00:00", null, "5537", "Principal Administrative Associate (Promotion)", "2021-02-22T00:00:00", null, "DCAS" ]
  , [ "row-adct-57b8_5uz2", "00000000-0000-0000-CAC8-E3DC71395675", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Citywide Administrative Services - DCAS", "Open", "2017-07-25T00:00:00", null, "6333", "Special Officer", "2021-02-01T00:00:00", null, "DCAS" ]
  , [ "row-cgie~2njv.mrrn", "00000000-0000-0000-2922-F1D45EC5BF91", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Correction - DOC", "Closed", "2017-07-24T00:00:00", "2017-08-22T00:00:00", null, null, null, null, "DOC" ]
  , [ "row-p4jd_dkgt_cx3c", "00000000-0000-0000-E954-779AA9A72E03", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Open", "2017-07-24T00:00:00", "2017-07-24T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-pbtt_uxic_t8yn", "00000000-0000-0000-34B9-E657E925B717", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-24T00:00:00", "2017-07-24T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-izzw~p2fy_ua66", "00000000-0000-0000-0835-87735B7FDC13", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-24T00:00:00", "2017-08-01T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-ru7s_gbeb.sgi9", "00000000-0000-0000-2E74-0099FA533760", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-24T00:00:00", "2017-08-01T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-95ub~8bk9~f262", "00000000-0000-0000-22FC-A9B895E31256", 0, 1515534308, null, 1515534308, null, "{ }", "Other", null, "Department of Citywide Administrative Services - DCAS", "Open", "2017-07-24T00:00:00", "2017-08-01T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-8u6m-xpha-x76a", "00000000-0000-0000-3A2E-446699E492BA", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-07-24T00:00:00", "2017-12-18T00:00:00", "2344", "Police Officer", "2019-06-19T00:00:00", null, "NYPD" ]
  , [ "row-9jz7~3yhs_hrgn", "00000000-0000-0000-A224-95AD41C0030C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-24T00:00:00", "2017-11-08T00:00:00", "7035", "Administrative Director of Social Services", null, null, "DCAS" ]
  , [ "row-ujxe-ui7y~2u7f", "00000000-0000-0000-AA7D-C195D2EC782F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-24T00:00:00", "2017-12-06T00:00:00", "7035", "Administrative Director of Social Services", "2021-07-19T00:00:00", null, "DCAS" ]
  , [ "row-rty3~2vui-wqrx", "00000000-0000-0000-531A-BAD4C0E694D4", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-24T00:00:00", "2017-12-06T00:00:00", "7035", "Administrative Director of Social Services", "2021-07-19T00:00:00", null, "DCAS" ]
  , [ "row-yups~tjdb~fnz7", "00000000-0000-0000-69A6-17C729D3D6FD", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-24T00:00:00", "2017-09-13T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-pkdj~rcpa_jrcj", "00000000-0000-0000-205C-895E852707D2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-24T00:00:00", "2017-09-07T00:00:00", "8098", "Train Operator", "2017-09-19T00:00:00", null, "DCAS" ]
  , [ "row-rmke.8sm8~nekw", "00000000-0000-0000-FCAF-745B88659ADB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Police Department - NYPD", "Closed", "2017-07-24T00:00:00", "2017-12-07T00:00:00", "4310", "Police Officer", "2019-12-28T00:00:00", null, "NYPD" ]
  , [ "row-q72b-wguq~y5nf", "00000000-0000-0000-8A1A-C636B2A191A0", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-24T00:00:00", "2017-07-25T00:00:00", "7004", "Computer Programmer Analyst", null, null, "DCAS" ]
  , [ "row-wyn8_srbm~9uvp", "00000000-0000-0000-3C22-EF313C58938A", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Police Department - NYPD", "Closed", "2017-07-24T00:00:00", "2017-09-06T00:00:00", null, null, null, null, "NYPD" ]
  , [ "row-geb6~2gzw~arwu", "00000000-0000-0000-53C3-ACE41E22C9D4", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Veterans Credits", "Department of Citywide Administrative Services - DCAS", "Open", "2017-07-24T00:00:00", null, "7006", "Deputy City Sheriff", null, null, "DCAS" ]
  , [ "row-zz5m-v6i8.vmx5", "00000000-0000-0000-ABB3-10F47F2FB51A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-24T00:00:00", "2017-09-11T00:00:00", "6047", "Health Services Manager", "2021-05-24T00:00:00", null, "DCAS" ]
  , [ "row-69zh.qstx-3pfp", "00000000-0000-0000-B8B6-6600136A6F6E", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-22T00:00:00", "2017-08-01T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-62q6_uhuz~md52", "00000000-0000-0000-1F86-4C1F02E23F5C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-07-21T00:00:00", null, "7011", "Administrative Community Relations Specialist", "2021-09-20T00:00:00", null, "DCAS" ]
  , [ "row-fji3-t55t-y3h4", "00000000-0000-0000-19AF-7F90D38DCAB4", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Suspension", "Housing Authority - NYCHA", "Closed", "2017-07-21T00:00:00", "2017-10-06T00:00:00", null, null, null, null, "NYCHA" ]
  , [ "row-gxn4.8gru~nyqd", "00000000-0000-0000-0855-2C6DC96BB926", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-21T00:00:00", "2017-09-11T00:00:00", "6043", "Construction Project Manager Intern", null, null, "DCAS" ]
  , [ "row-kywa~96zi_zrka", "00000000-0000-0000-2E36-5A0C30B6C525", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-21T00:00:00", "2017-07-24T00:00:00", "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-y5ar~5fei-kr5r", "00000000-0000-0000-7955-F6CF4EDBD93F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-07-20T00:00:00", "2017-11-14T00:00:00", "3318", "Police Officer", "2019-12-17T00:00:00", null, "NYPD" ]
  , [ "row-u6eu_23qw-ws4t", "00000000-0000-0000-3F8C-14FAD4EA874B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Open", "2017-07-20T00:00:00", null, "6315", "Correction Officer", "2020-06-15T00:00:00", null, "DOC" ]
  , [ "row-4mq4~cf49_f57j", "00000000-0000-0000-A9F1-CCEDF5A36498", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-20T00:00:00", "2017-10-30T00:00:00", "8011", "Station Agent", "2017-08-22T00:00:00", null, "DCAS" ]
  , [ "row-5san.b4ht~c2j7", "00000000-0000-0000-502E-5FAC96EB9042", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-07-20T00:00:00", null, "7011", "Administrative Community Relations Specialist", "2021-09-20T00:00:00", null, "DCAS" ]
  , [ "row-yj3r~4vak~xsa7", "00000000-0000-0000-3BBD-F2443D62FC57", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-19T00:00:00", "2017-08-22T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-ugb7-yfde-chaj", "00000000-0000-0000-1606-8E7A5165C985", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-07-19T00:00:00", "2017-12-18T00:00:00", "5003", "Emergency Medical Specialist - EMT", "2019-02-18T00:00:00", null, "FDNY" ]
  , [ "row-6fpd.cdnz~kh7x", "00000000-0000-0000-13E7-D0A8660ADAE3", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-07-19T00:00:00", null, "7011", "Administrative Community Relations Specialist", "2021-09-20T00:00:00", null, "DCAS" ]
  , [ "row-7bin-6yku~rdgi", "00000000-0000-0000-AC79-077B7EAB0177", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-07-19T00:00:00", null, "6527", "Prom. to Associate Fraud Investigator", "2021-05-17T00:00:00", null, "DCAS" ]
  , [ "row-67y2~7hbd_7w85", "00000000-0000-0000-60B6-63F00656C26C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Termination", "Housing Authority - NYCHA", "Closed", "2017-07-18T00:00:00", "2017-09-28T00:00:00", null, null, null, null, "NYCHA" ]
  , [ "row-5n2d.8hy2_jani", "00000000-0000-0000-9695-98DD046737CB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-18T00:00:00", "2017-09-25T00:00:00", "6047", "Health Services Manager", "2021-05-24T00:00:00", null, "DCAS" ]
  , [ "row-rfgj_cha8~dptd", "00000000-0000-0000-31D4-EC30C66DF492", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-18T00:00:00", "2017-10-18T00:00:00", "6029", "Probation Officer", "2020-09-14T00:00:00", null, "DCAS" ]
  , [ "row-gayy.kd38~99tr", "00000000-0000-0000-F51A-2EFF08B138E7", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Correction - DOC", "Closed", "2017-07-17T00:00:00", "2017-12-06T00:00:00", "7320", "Correction Officer", "2021-01-11T00:00:00", null, "DOC" ]
  , [ "row-kckk~zhde.vu6i", "00000000-0000-0000-F784-7FE3E9FDDC05", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-07-17T00:00:00", "2017-09-11T00:00:00", "4069", "Auto Service Worker", "2019-05-27T00:00:00", null, "NYPD" ]
  , [ "row-8m9k-6fgu_2vzr", "00000000-0000-0000-2A63-747DA620DE87", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-07-17T00:00:00", "2017-08-22T00:00:00", "2311", "Police Officer", "2018-05-01T00:00:00", null, "NYPD" ]
  , [ "row-rv66~z57c-qsyx", "00000000-0000-0000-8FD1-D4480EBF7C41", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-07-17T00:00:00", null, "5044", "Research Assistant", "2021-02-01T00:00:00", null, "DCAS" ]
  , [ "row-fty5~aiti-pqwt", "00000000-0000-0000-7927-68AA3EE59D9E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-07-17T00:00:00", "2017-10-23T00:00:00", "2054", "Police Officer", "2019-06-18T00:00:00", null, "NYPD" ]
  , [ "row-br8p~8qur-84f3", "00000000-0000-0000-E1D5-9406260419F1", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-17T00:00:00", "2017-09-29T00:00:00", "6033", "Maintenance Worker", "2021-05-10T00:00:00", null, "DCAS" ]
  , [ "row-dx8m-3trt.jxz9", "00000000-0000-0000-9DA6-235B53C46847", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Open", "2017-07-17T00:00:00", null, "7329", "Correction Officer", "2021-02-15T00:00:00", null, "DOC" ]
  , [ "row-5fry_hn3v-ctey", "00000000-0000-0000-5BA9-D16FE96D9631", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-07-17T00:00:00", "2017-10-20T00:00:00", "4323", "Police Officer", "2020-08-26T00:00:00", null, "NYPD" ]
  , [ "row-wetw.f26w-jkme", "00000000-0000-0000-0055-4328A40168F8", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Eligibility", "Department of Citywide Administrative Services - DCAS", "Open", "2017-07-17T00:00:00", null, "7211", "Real Property Manager", "2018-04-26T00:00:00", null, "DCAS" ]
  , [ "row-4shz.kzzd.vzqz", "00000000-0000-0000-1603-C0AE06FB0668", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Unauthorized Substance", "Police Department - NYPD", "Closed", "2017-07-17T00:00:00", "2017-10-30T00:00:00", "6318", "School Safety Agent", "2021-02-01T00:00:00", null, "NYPD" ]
  , [ "row-urej~iyrc-yhfk", "00000000-0000-0000-D2C3-B62188AAFB0F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-07-17T00:00:00", "2017-09-01T00:00:00", "2053", "Police Officer", "2019-06-17T00:00:00", null, "NYPD" ]
  , [ "row-dtdn-6y27-yzp8", "00000000-0000-0000-4810-B8D7BE883CB7", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Termination", "Department of Transportation - DOT", "Open", "2017-07-17T00:00:00", null, null, null, null, null, "DOT" ]
  , [ "row-jbgn~ck9v-utep", "00000000-0000-0000-2E47-E8F2B04D23E8", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-17T00:00:00", "2017-12-06T00:00:00", "7035", "Administrative Director of Social Services", "2021-07-19T00:00:00", null, "DCAS" ]
  , [ "row-qbm9-3f69-nzze", "00000000-0000-0000-B66E-FBEA300A6629", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-17T00:00:00", "2017-08-22T00:00:00", "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-k7wu_vxh2-z5i5", "00000000-0000-0000-717B-745424379D30", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-17T00:00:00", "2017-09-26T00:00:00", "6047", "Health Services Manager", "2021-05-24T00:00:00", null, "DCAS" ]
  , [ "row-ns5g_iuz6_cddc", "00000000-0000-0000-6B8E-FF610C88A285", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-07-17T00:00:00", "2017-07-19T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-nyi9~3wdt_t7sn", "00000000-0000-0000-6DA4-6EA52B232D8A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "MTA New York City Transit - NYCT", "Closed", "2017-07-14T00:00:00", "2017-09-06T00:00:00", "6602", "Light Maintainer", null, null, "NYCT" ]
  , [ "row-bg35_6j5g.6wvc", "00000000-0000-0000-C3AF-90170A365053", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-07-14T00:00:00", "2017-10-02T00:00:00", "5330", "Police Communications Technician", "2020-09-15T00:00:00", null, "NYPD" ]
  , [ "row-vyvm~m5v3-z6ig", "00000000-0000-0000-2ED3-5440446D5CF1", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-14T00:00:00", "2017-07-17T00:00:00", "7002", "Computer Associate (Software)", null, null, "DCAS" ]
  , [ "row-2bs3-ns93_kysh", "00000000-0000-0000-0C38-CE1794262D80", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Unauthorized Substance", "Police Department - NYPD", "Closed", "2017-07-14T00:00:00", "2017-10-30T00:00:00", "5303", "School Safety Agent", "2020-07-20T00:00:00", null, "NYPD" ]
  , [ "row-h66q.878w-hkxp", "00000000-0000-0000-3CF7-C13187D44879", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-07-14T00:00:00", null, "3314", "Police Officer", "2019-12-09T00:00:00", null, "NYPD" ]
  , [ "row-2mp6-b5sj~g5jx", "00000000-0000-0000-408F-F8C45DDFBD1B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-07-14T00:00:00", null, "6502", "Promotional Police Officer", "2020-06-22T00:00:00", null, "NYPD" ]
  , [ "row-syws~4fch.i2un", "00000000-0000-0000-4DC0-CAEF1900CAC5", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-13T00:00:00", "2017-07-14T00:00:00", "7003", "Computer Associate(Technical Support)", null, null, "DCAS" ]
  , [ "row-tds5_h8zp-2ip4", "00000000-0000-0000-1613-6A17A10955E2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-13T00:00:00", "2017-09-11T00:00:00", "6055", "Project Manager Intern", "2021-01-11T00:00:00", null, "DCAS" ]
  , [ "row-e4mr.kdv6.2v9p", "00000000-0000-0000-B249-CBDC3116450C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Police Department - NYPD", "Closed", "2017-07-13T00:00:00", "2017-08-30T00:00:00", "5329", "Police Officer", null, null, "NYPD" ]
  , [ "row-5q3q-v38n~mv5q", "00000000-0000-0000-DABF-3DD2B5CF1675", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-12T00:00:00", "2017-09-18T00:00:00", "5039", "Principal Administrative Associate", null, null, "DCAS" ]
  , [ "row-q4u6-d2w5~tgbe", "00000000-0000-0000-0CA4-C71615BD6F6E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Suspension", "Department of Correction - DOC", "Closed", "2017-07-12T00:00:00", "2017-12-04T00:00:00", null, null, null, null, "DOC" ]
  , [ "row-cqf6_e9pu-8qax", "00000000-0000-0000-BD18-BD7CA5C6668B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-07-11T00:00:00", null, "7011", "Administrative Community Relations Specialist", "2021-09-20T00:00:00", null, "DCAS" ]
  , [ "row-i2ih.bm6e_ijue", "00000000-0000-0000-7696-3CC20102EB9E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-07-11T00:00:00", null, "7011", "Administrative Community Relations Specialist", "2021-09-20T00:00:00", null, "DCAS" ]
  , [ "row-qh26~grut-av5y", "00000000-0000-0000-FD73-87BC65E3C8E1", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-10T00:00:00", "2017-09-06T00:00:00", "5537", "Principal Administrative Associate", "2021-02-22T00:00:00", null, "DCAS" ]
  , [ "row-3b4g_fz7j~suzq", "00000000-0000-0000-B4E2-E500038CB27F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-07-10T00:00:00", "2017-07-11T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-c5qi~b4fe~sdjd", "00000000-0000-0000-AA6B-D1258CFABB74", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Finance - DOF", "Closed", "2017-07-09T00:00:00", "2017-07-10T00:00:00", "3021", "Deputy City Sheriff", "2017-07-10T00:00:00", null, "DOF" ]
  , [ "row-ea5i~86mx-d44b", "00000000-0000-0000-FD26-2EC51371319C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Citywide Administrative Services - DCAS", "Open", "2017-07-06T00:00:00", null, "1017", "Housing Assistant", "2018-02-01T00:00:00", null, "DCAS" ]
  , [ "row-7fpu.ppya~3t4c", "00000000-0000-0000-784A-AF6752F06B4C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-06T00:00:00", "2017-09-19T00:00:00", "7012", "Administrative Engineer", null, null, "DCAS" ]
  , [ "row-brma-kjxw_24c7", "00000000-0000-0000-64B1-9A93450DBE14", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-07-06T00:00:00", "2017-07-20T00:00:00", "7320", "Correction Officer", "2021-01-11T00:00:00", null, "DOC" ]
  , [ "row-h9kc-9h42.rxrm", "00000000-0000-0000-79A7-F87D24CFC850", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-07-06T00:00:00", null, "3316", "Police Officer", "2019-12-14T00:00:00", null, "NYPD" ]
  , [ "row-24xv_vgxd_88zr", "00000000-0000-0000-1FC6-8506BB277536", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-07-05T00:00:00", "2017-12-29T00:00:00", "6067", "City Planner", "2021-06-21T00:00:00", null, "DCAS" ]
  , [ "row-zxms_g3i3.ikut", "00000000-0000-0000-4A1F-4A8172B61648", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Housing Authority - NYCHA", "Open", "2017-07-05T00:00:00", null, "5029", "Elevator Mechanic's Helper", "2020-09-14T00:00:00", null, "NYCHA" ]
  , [ "row-z4qd.3mas_fpn5", "00000000-0000-0000-1570-745DB32063BD", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-07-03T00:00:00", "2017-07-20T00:00:00", "2326", "Police Officer", "2018-07-02T00:00:00", null, "NYPD" ]
  , [ "row-c9eq~chea_9j8p", "00000000-0000-0000-5418-FC4324DB191D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Termination", "Housing Authority - NYCHA", "Closed", "2017-06-29T00:00:00", "2017-12-04T00:00:00", null, null, null, null, "NYCHA" ]
  , [ "row-7r3m-ag5u_d3fr", "00000000-0000-0000-E236-91D503FE6CC0", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Finance - DOF", "Closed", "2017-06-28T00:00:00", "2017-06-28T00:00:00", "3021", "Deputy City Sheriff", "2017-07-10T00:00:00", null, "DOF" ]
  , [ "row-ibun.hxnt_54r2", "00000000-0000-0000-FB60-3E20D6B615E6", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-06-28T00:00:00", null, "7035", "Administrative Director of Social Services", null, null, "DCAS" ]
  , [ "row-e86u-rpav_rnnq", "00000000-0000-0000-5788-4EB2E0910F44", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-06-28T00:00:00", "2017-10-25T00:00:00", "6033", "Maintenance Worker", "2021-05-10T00:00:00", null, "DCAS" ]
  , [ "row-hst7-48zt.xk8s", "00000000-0000-0000-5563-19744B541CAA", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Closed", "2017-06-27T00:00:00", "2017-11-13T00:00:00", "4318", "Correction Officer", "2019-11-04T00:00:00", null, "DOC" ]
  , [ "row-23kt~8kx5~qge8", "00000000-0000-0000-0C45-D8CAB3586174", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-06-26T00:00:00", "2017-11-14T00:00:00", "5047", "Police Officer", null, null, "NYPD" ]
  , [ "row-3v75_jffp-b7yu", "00000000-0000-0000-D710-B6D6F34D1E92", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Eligibility", "Human Resources Administration - HRA", "Closed", "2017-06-26T00:00:00", "2017-06-29T00:00:00", "5537", "Principal Administrative Associate PROM", "2021-02-22T00:00:00", null, "HRA" ]
  , [ "row-enbx.dawd_zu5g", "00000000-0000-0000-11D6-C66D02A4F075", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-06-26T00:00:00", "2017-09-26T00:00:00", "6033", "Maintenance Worker", "2021-05-10T00:00:00", null, "DCAS" ]
  , [ "row-5e5b.ubz2_pbvg", "00000000-0000-0000-004E-DEA8EB99AFEA", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Police Department - NYPD", "Closed", "2017-06-26T00:00:00", "2017-12-06T00:00:00", "5320", "Police Officer", "2021-06-30T00:00:00", null, "NYPD" ]
  , [ "row-8tjt-vagk.scwp", "00000000-0000-0000-7CEE-A5E829D61784", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Unauthorized Substance", "Fire Department - FDNY", "Open", "2017-06-23T00:00:00", null, "7000", "EMS-EMT", "2021-03-29T00:00:00", null, "FDNY" ]
  , [ "row-k672-v68i~v7x6", "00000000-0000-0000-C26A-44FEBA98F03F", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-06-23T00:00:00", "2017-07-19T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-suph~avs8.uy9j", "00000000-0000-0000-CDC1-DB1348FA1D92", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-06-23T00:00:00", "2017-11-13T00:00:00", "4306", "New York Police Officer", "2019-12-23T00:00:00", null, "NYPD" ]
  , [ "row-94q2-z7wx~vddd", "00000000-0000-0000-BEDE-371920A4AB8F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Fire Department - FDNY", "Closed", "2017-06-23T00:00:00", "2017-06-27T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-z85p.quaz_pp5z", "00000000-0000-0000-40A9-F9E55F9FE313", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Fire Department - FDNY", "Closed", "2017-06-22T00:00:00", "2017-06-27T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-4tt6_fqnf.rtrp", "00000000-0000-0000-80A3-8CBAD60B6629", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Fire Department - FDNY", "Closed", "2017-06-22T00:00:00", "2017-06-27T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-mbdf-9yb4_5jf9", "00000000-0000-0000-ABF2-9827F3C1DEFB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Fire Department - FDNY", "Closed", "2017-06-22T00:00:00", "2017-06-27T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-bd2q_dt5z.dmk8", "00000000-0000-0000-ED91-43BE8BB9BE3A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Fire Department - FDNY", "Closed", "2017-06-22T00:00:00", "2017-06-20T00:00:00", "2000", "FIREFIGHTER(Group 1)", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-ziw2_g55s_p9d2", "00000000-0000-0000-CFB3-60E7C4BF645D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-06-22T00:00:00", "2017-07-20T00:00:00", "5328", "Traffic Enforcement Agent", "2020-01-06T00:00:00", null, "NYPD" ]
  , [ "row-zz9t.36k4_gpaq", "00000000-0000-0000-5EEC-920C72256F88", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-06-21T00:00:00", "2017-07-19T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-ba8e~4q2f-7g8e", "00000000-0000-0000-B6E3-CB7260BB3BA2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Citywide Administrative Services - DCAS", "Open", "2017-06-21T00:00:00", null, "6066", "Juvenile Counselor", "2021-05-20T00:00:00", null, "DCAS" ]
  , [ "row-iran~bgw9.qtax", "00000000-0000-0000-98E5-C1F9D57BB55E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-06-21T00:00:00", "2017-11-09T00:00:00", "6315", "Correction Officer", "2020-06-15T00:00:00", null, "DOC" ]
  , [ "row-ifbx~uzsz.zm5r", "00000000-0000-0000-5F4A-06F9449CCFA2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Fire Department - FDNY", "Closed", "2017-06-21T00:00:00", "2017-06-22T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-bf99~cuie~9drp", "00000000-0000-0000-0779-C3C00146DC00", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-06-21T00:00:00", "2017-07-20T00:00:00", "4059", "Police Administrative Aide", "2019-08-05T00:00:00", null, "NYPD" ]
  , [ "row-j48j.e2zi_d6xk", "00000000-0000-0000-2F08-F1AB1F3932B7", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-06-21T00:00:00", "2017-11-14T00:00:00", null, null, null, null, "FDNY" ]
  , [ "row-8byc.f6sy~9m9i", "00000000-0000-0000-A8EA-38890ABA18A1", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-06-20T00:00:00", null, "6033", "Maintenance Worker", "2021-05-10T00:00:00", null, "DCAS" ]
  , [ "row-55uz.ss36_4zyb", "00000000-0000-0000-663A-0C85B7C22CC9", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Fire Department - FDNY", "Closed", "2017-06-20T00:00:00", "2017-06-20T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-fkhm.wec7.gsbp", "00000000-0000-0000-BE76-B10708F7873E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-06-19T00:00:00", "2017-10-19T00:00:00", "4306", "Police Officer", "2019-12-23T00:00:00", null, "NYPD" ]
  , [ "row-5wb7.wvj3-63hq", "00000000-0000-0000-0E15-2F8C084F5512", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-06-19T00:00:00", "2017-06-28T00:00:00", "7035", "Addministrative Director of Social Sevices", null, null, "DCAS" ]
  , [ "row-3yhd~axp5-t4t3", "00000000-0000-0000-19BF-BEEA888EBE42", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-06-19T00:00:00", "2017-06-30T00:00:00", "5330", "Police Communications Technician", "2020-09-15T00:00:00", null, "NYPD" ]
  , [ "row-8q2v-h6pq.qjev", "00000000-0000-0000-0012-09EAFB08F301", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Fire Department - FDNY", "Closed", "2017-06-19T00:00:00", "2017-06-20T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-zamv-ngcd-776n", "00000000-0000-0000-C296-1505A48D75B7", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Citywide Administrative Services - DCAS", "Open", "2017-06-19T00:00:00", null, "6333", "Special Officer", "2021-02-01T00:00:00", null, "DCAS" ]
  , [ "row-nryp.4eea-66kp", "00000000-0000-0000-89D0-20786244ADE6", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-06-19T00:00:00", "2017-09-29T00:00:00", "5026", "Electricians Helper", "2021-01-04T00:00:00", null, "DCAS" ]
  , [ "row-qw85.tvby_eadu", "00000000-0000-0000-169B-F5C665917970", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Closed", "2017-06-19T00:00:00", "2017-12-07T00:00:00", "7320", "Correction Officer", "2021-01-11T00:00:00", null, "DOC" ]
  , [ "row-6eby~zy4b_zf2e", "00000000-0000-0000-2C84-0D7239286C98", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-06-19T00:00:00", "2017-07-26T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-y2cy.dzwt.7qjb", "00000000-0000-0000-B99A-B4AA48DDE024", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-06-19T00:00:00", "2017-12-01T00:00:00", "4306", "Police Officer", "2019-12-23T00:00:00", null, "NYPD" ]
  , [ "row-r5ex~nrmg-n2yf", "00000000-0000-0000-9F69-2040992BD707", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-06-19T00:00:00", "2017-07-25T00:00:00", "4335", "Police Communications Technician", "2017-11-14T00:00:00", null, "NYPD" ]
  , [ "row-79cd-m68s-4gaq", "00000000-0000-0000-20AA-2E724B036CE2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-06-19T00:00:00", "2017-06-27T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-pty8_e95j.zgsx", "00000000-0000-0000-FB6A-C7A7FDD579B2", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-06-16T00:00:00", "2017-06-22T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-eaja.qujx_94nm", "00000000-0000-0000-44B3-71AE26C1CC68", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Open", "2017-06-16T00:00:00", "2017-06-22T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-usab~b7x3.mqhz", "00000000-0000-0000-FE5C-2B60CB967DAE", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Open", "2017-06-16T00:00:00", "2017-06-22T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-ep29_7y54_tbcm", "00000000-0000-0000-62E5-64D99C2AA40F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Fire Department - FDNY", "Closed", "2017-06-16T00:00:00", "2017-06-19T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-w48e_fc68~tcci", "00000000-0000-0000-79AA-3322DEEC13A7", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-06-16T00:00:00", "2017-06-19T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-79zw.6cww_ktec", "00000000-0000-0000-7EF2-973E3613A123", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-06-15T00:00:00", "2017-07-26T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-xurj~zj97-jitv", "00000000-0000-0000-7E10-E7730D704E7F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-06-13T00:00:00", "2017-11-13T00:00:00", "6308", "Correction Officer", "2020-03-02T00:00:00", null, "DOC" ]
  , [ "row-rjnm_pq6z_q9iw", "00000000-0000-0000-F1EC-49E9D6348915", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-06-13T00:00:00", "2017-07-06T00:00:00", "8098", "Train Operator", "2017-09-19T00:00:00", null, "DCAS" ]
  , [ "row-r3yd.hs2e~adcj", "00000000-0000-0000-26D8-BE725FC037F3", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-06-12T00:00:00", "2017-10-19T00:00:00", "4300", "Police Officer", "2019-12-22T00:00:00", null, "NYPD" ]
  , [ "row-bm8a-s8e2.tzdw", "00000000-0000-0000-7670-90CAD937863D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Demotion", "Housing Authority - NYCHA", "Closed", "2017-06-12T00:00:00", "2017-07-28T00:00:00", null, null, null, null, "NYCHA" ]
  , [ "row-3ceg.zmzi_bkuj", "00000000-0000-0000-7EE9-8D1ADD002032", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-06-12T00:00:00", "2017-07-13T00:00:00", "7035", "Administrative Director of Social Services", null, null, "DCAS" ]
  , [ "row-8xjj_pztq_qama", "00000000-0000-0000-0C26-1EA515AF9AFE", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Correction - DOC", "Open", "2017-06-12T00:00:00", null, "6315", "Correction Officer", "2020-06-15T00:00:00", null, "DOC" ]
  , [ "row-8cnp-xtai.zcpr", "00000000-0000-0000-4ABD-9D1DA4E3EE1A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-06-12T00:00:00", null, "3327", "School Safety Agent", "2019-09-10T00:00:00", null, "NYPD" ]
  , [ "row-epyd.p3cy~d2jd", "00000000-0000-0000-0F85-FF9ABCFCE0B9", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-06-09T00:00:00", "2017-09-21T00:00:00", "2326", "Police Officer", "2018-07-02T00:00:00", null, "NYPD" ]
  , [ "row-5254~9q5t.w9ky", "00000000-0000-0000-60A3-5D0564C244FE", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Fire Department - FDNY", "Closed", "2017-06-09T00:00:00", "2017-06-12T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-mp2i~rxia_x4nz", "00000000-0000-0000-7F57-8C7DDE531698", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Fire Department - FDNY", "Closed", "2017-06-09T00:00:00", "2017-06-12T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-3ck7~f3y8_w62i", "00000000-0000-0000-FD59-860D48C6C605", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-06-09T00:00:00", "2017-10-04T00:00:00", "3308", "Police Officer", "2019-06-22T00:00:00", null, "NYPD" ]
  , [ "row-kyye.5iue.uw5h", "00000000-0000-0000-F2EA-82F39981A01A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Unauthorized Substance", "Police Department - NYPD", "Closed", "2017-06-09T00:00:00", "2017-08-18T00:00:00", "6318", "School Safety Agent", "2021-02-01T00:00:00", null, "NYPD" ]
  , [ "row-rqv8_7h5v_jf7c", "00000000-0000-0000-A83C-353A7A9F1E7A", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Police Department - NYPD", "Closed", "2017-06-09T00:00:00", "2017-07-19T00:00:00", null, null, null, null, "NYPD" ]
  , [ "row-tzhe~k9bu_x37x", "00000000-0000-0000-88A2-63AF2CC8563B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-06-09T00:00:00", "2017-11-16T00:00:00", "4307", "School Safety Agent", "2020-01-07T00:00:00", null, "NYPD" ]
  , [ "row-2hg3~bteu-ueyy", "00000000-0000-0000-9D2B-23AC3AC37858", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-06-09T00:00:00", null, "4300", "Police Officer", "2019-12-22T00:00:00", null, "NYPD" ]
  , [ "row-mugh_5rzr.wiy3", "00000000-0000-0000-8392-EC7272424A01", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-06-09T00:00:00", "2017-09-21T00:00:00", "4312", "Police Officer", "2020-06-22T00:00:00", null, "NYPD" ]
  , [ "row-5kct_98x5.2gfa", "00000000-0000-0000-3E3C-A2847FB97976", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Closed", "2017-06-09T00:00:00", "2017-11-13T00:00:00", "6332", "Correction Officer", "2020-09-22T00:00:00", null, "DOC" ]
  , [ "row-wrby_h2ha-frqt", "00000000-0000-0000-456A-3CB71C613101", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Closed", "2017-06-09T00:00:00", "2017-12-14T00:00:00", "4311", "Correction Officer", "2019-09-24T00:00:00", null, "DOC" ]
  , [ "row-bgcr~vrra.ajkh", "00000000-0000-0000-1BAB-37BF3363A191", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Fire Department - FDNY", "Closed", "2017-06-08T00:00:00", "2017-06-12T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-i8ay~uygg-n5ur", "00000000-0000-0000-EF44-C2C001DC262E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-06-08T00:00:00", null, "7011", "Administrative Community Relations", "2021-09-20T00:00:00", null, "DCAS" ]
  , [ "row-eykc.ev3t~v9rr", "00000000-0000-0000-FB32-E44C3F0C3CFC", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Demotion", "Housing Authority - NYCHA", "Closed", "2017-06-08T00:00:00", "2017-10-30T00:00:00", null, null, null, null, "NYCHA" ]
  , [ "row-xj97.kvmg-vfhf", "00000000-0000-0000-6F0F-10FBF173861C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-06-08T00:00:00", "2017-08-24T00:00:00", "6033", "Maintenance Worker", "2021-05-10T00:00:00", null, "DCAS" ]
  , [ "row-b6pn.745k~dc9s", "00000000-0000-0000-8B7C-F819517F7EA2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Correction - DOC", "Open", "2017-06-08T00:00:00", null, "6315", "Correction Officer", "2020-06-15T00:00:00", null, "DOC" ]
  , [ "row-4j74-64ck-dx4n", "00000000-0000-0000-D7F3-DBA861AF46DB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Suspension", "Human Resources Administration - HRA", "Closed", "2017-06-08T00:00:00", "2017-08-09T00:00:00", null, null, null, null, "HRA" ]
  , [ "row-hckg_n6mk_2yn7", "00000000-0000-0000-1A85-BD310384ADDE", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-06-08T00:00:00", "2017-07-19T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-y5wf_rkrw-4fdw", "00000000-0000-0000-D52C-C147EF7F621D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-06-07T00:00:00", "2017-10-27T00:00:00", "3319", "Police Officer", "2019-12-21T00:00:00", null, "NYPD" ]
  , [ "row-hiwh~4n6i.6cmt", "00000000-0000-0000-CDAB-646D678D25A2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-06-07T00:00:00", null, "3004", "Administrative Investigator", "2019-09-30T00:00:00", null, "DCAS" ]
  , [ "row-bbrw.6psb-4m7f", "00000000-0000-0000-5C56-C14A8CEA9892", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Unauthorized Substance", "Police Department - NYPD", "Closed", "2017-06-07T00:00:00", "2017-11-13T00:00:00", "6310", "Police Communications Technician", "2020-12-28T00:00:00", null, "NYPD" ]
  , [ "row-7c6i_cj4w.kf4m", "00000000-0000-0000-E5A5-4EE2DAF93F63", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Fire Department - FDNY", "Closed", "2017-06-06T00:00:00", "2017-06-12T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-6db7.rb5e.b2hv", "00000000-0000-0000-88E4-C18D17D658A9", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-06-06T00:00:00", "2017-06-21T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-8989-7rkj.35ud", "00000000-0000-0000-7C42-52EE7C8276E2", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-06-06T00:00:00", "2017-06-13T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-eu79_y96q_6x4v", "00000000-0000-0000-301E-413A3F66C02E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Police Department - NYPD", "Open", "2017-06-06T00:00:00", null, "5317", "Police Officer", null, null, "NYPD" ]
  , [ "row-sny2.xuua_wsjs", "00000000-0000-0000-32DE-C0DA1BA96F18", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-06-06T00:00:00", "2017-06-06T00:00:00", "7045", "School Computer Technology Specialist DOE", null, null, "DCAS" ]
  , [ "row-a49e_wtpc-5bfs", "00000000-0000-0000-492D-FC4383E3E78F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Open", "2017-06-06T00:00:00", null, "7329", "Correction Officer", "2021-02-15T00:00:00", null, "DOC" ]
  , [ "row-chjv.m8dv-w4wa", "00000000-0000-0000-3FFD-F4357EFEAD6A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-06-05T00:00:00", "2017-12-05T00:00:00", "2053", "Police Officer", "2019-06-17T00:00:00", null, "NYPD" ]
  , [ "row-bigb_gd88_k2fz", "00000000-0000-0000-8ED5-13A2F25874BA", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-06-05T00:00:00", "2017-09-28T00:00:00", "5013", "Associate Project Manager", "2020-10-05T00:00:00", null, "DCAS" ]
  , [ "row-swex~67n7-ieyd", "00000000-0000-0000-A676-FCA3C481DD3D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-06-05T00:00:00", "2017-08-10T00:00:00", "6033", "Maintenance Worker", "2021-05-10T00:00:00", null, "DCAS" ]
  , [ "row-zhrr~j8xp~amyw", "00000000-0000-0000-92AE-CA50CE97FD32", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-06-02T00:00:00", "2017-06-21T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-4agb_ataw.8pkt", "00000000-0000-0000-CEB2-A67EA6295294", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-06-02T00:00:00", "2017-11-14T00:00:00", "5502", "Promotional Police Officer", "2019-06-17T00:00:00", null, "NYPD" ]
  , [ "row-fzqm_9ivq-9aup", "00000000-0000-0000-FB39-574F72AB6D69", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-06-02T00:00:00", "2017-10-27T00:00:00", "4300", "Police Officer", "2019-12-22T00:00:00", null, "NYPD" ]
  , [ "row-6fkq~r3dt.hv9j", "00000000-0000-0000-3F16-A135876BC0E4", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-06-02T00:00:00", "2017-10-23T00:00:00", "3313", "Police Officer", "2019-09-24T00:00:00", null, "NYPD" ]
  , [ "row-ai53~pc3p_9izn", "00000000-0000-0000-D93D-9F3E5D212A42", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-06-02T00:00:00", "2017-07-27T00:00:00", "2302", "Police Officer", "2018-04-30T00:00:00", null, "NYPD" ]
  , [ "row-yrd4.htxh.rkki", "00000000-0000-0000-0106-9F89636A0963", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-06-01T00:00:00", "2017-10-03T00:00:00", "4064", "Mason's Helper", "2019-12-23T00:00:00", null, "DCAS" ]
  , [ "row-8ycv~pydi_frwc", "00000000-0000-0000-AB27-B03312CADA0D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-06-01T00:00:00", "2017-09-19T00:00:00", "6047", "Health Services Manager", "2021-05-24T00:00:00", null, "DCAS" ]
  , [ "row-nwg2-aarp-i69i", "00000000-0000-0000-5E70-5939950AA68A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-05-31T00:00:00", "2017-10-12T00:00:00", "3315", "Police Officer", "2019-12-10T00:00:00", null, "NYPD" ]
  , [ "row-5vjg-468v~qvd2", "00000000-0000-0000-95D9-846262AFDA0B", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-30T00:00:00", "2017-06-13T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-4i85~fbxf.qyfb", "00000000-0000-0000-0852-ADD83FF2BC3B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Fire Department - FDNY", "Closed", "2017-05-30T00:00:00", "2017-06-08T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-2hts.vswt-zs2r", "00000000-0000-0000-99C1-A5FE8A25AD8E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Fire Department - FDNY", "Closed", "2017-05-30T00:00:00", "2017-06-08T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-973i_9efh~b5rc", "00000000-0000-0000-378F-B83B14B57B38", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-30T00:00:00", "2017-08-31T00:00:00", "6067", "City Planner", null, null, "DCAS" ]
  , [ "row-qkun.9kz5.h22b", "00000000-0000-0000-9CF3-3F554E33884F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Fire Department - FDNY", "Closed", "2017-05-30T00:00:00", "2017-06-08T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-pzfg~xvqt.946n", "00000000-0000-0000-E67A-997287BABB6F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-05-30T00:00:00", "2017-10-12T00:00:00", "2344", "Police Officer", "2019-06-19T00:00:00", null, "NYPD" ]
  , [ "row-jqab_48dt.r5ac", "00000000-0000-0000-DA84-9C3A13888E39", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-30T00:00:00", "2017-10-20T00:00:00", "6047", "Health Services Manager", "2021-05-24T00:00:00", null, "DCAS" ]
  , [ "row-jruw~xcxy_hnur", "00000000-0000-0000-29D3-E7E5CAC13259", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Closed", "2017-05-30T00:00:00", "2017-10-20T00:00:00", "4318", "Correction Officer", "2019-11-04T00:00:00", null, "DOC" ]
  , [ "row-2pxz~js27.pby8", "00000000-0000-0000-411C-5FB81437450A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-05-30T00:00:00", null, "5517", "Promotion to Administrative Staff Analyst", "2020-08-17T00:00:00", null, "DCAS" ]
  , [ "row-iqt6_d4q5~yb7i", "00000000-0000-0000-1788-037DEFA457F1", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-05-30T00:00:00", "2017-08-14T00:00:00", "4300", "Police Officer", "2019-12-22T00:00:00", null, "NYPD" ]
  , [ "row-8snu_i6b7.f2aj", "00000000-0000-0000-19D7-9C46C763784A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-05-26T00:00:00", null, "6066", "Juvenile Counselor", "2021-05-10T00:00:00", null, "DCAS" ]
  , [ "row-jtwu.kqqf-6wsc", "00000000-0000-0000-F7E2-FA99267DC91B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-26T00:00:00", "2017-08-17T00:00:00", "7011", "Administrative Community  Relations Specialist", null, null, "DCAS" ]
  , [ "row-7qkb-4pfe~ec76", "00000000-0000-0000-6BE3-5B2E4FADB3B6", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Closed", "2017-05-26T00:00:00", "2017-10-13T00:00:00", "6315", "Correction Officer", "2020-06-15T00:00:00", null, "DOC" ]
  , [ "row-swkh~c47i~p462", "00000000-0000-0000-29B7-352CFD2C00D6", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-05-26T00:00:00", "2017-09-08T00:00:00", "3318", "Police Officer", "2019-12-17T00:00:00", null, "NYPD" ]
  , [ "row-r2hf-p6es_juh5", "00000000-0000-0000-7955-11E056113B2A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-26T00:00:00", "2017-05-31T00:00:00", "5522", "Associate Job Opportunity Specialist (PROM)", "2021-03-22T00:00:00", null, "DCAS" ]
  , [ "row-pmn5-7grn-imdf", "00000000-0000-0000-69B6-DF96B76104ED", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-25T00:00:00", "2017-08-24T00:00:00", "5032", "Gardener", "2020-10-26T00:00:00", null, "DCAS" ]
  , [ "row-4sv4_kbp5_k8vi", "00000000-0000-0000-F513-ADF458D323D2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Fire Department - FDNY", "Closed", "2017-05-25T00:00:00", "2017-06-08T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-j35p.pbeq.qqb3", "00000000-0000-0000-786F-0B5BA84E925B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-05-25T00:00:00", "2017-10-03T00:00:00", "4300", "Police Officer", "2019-12-22T00:00:00", null, "NYPD" ]
  , [ "row-3xt4.vqdj~kc8p", "00000000-0000-0000-D904-FD4BC58E6A54", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Police Department - NYPD", "Closed", "2017-05-25T00:00:00", "2017-08-30T00:00:00", "5305", "Police Officer", "2021-03-02T00:00:00", null, "NYPD" ]
  , [ "row-wur3~5ddf-3u3f", "00000000-0000-0000-C295-BFC427A7C673", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Closed", "2017-05-25T00:00:00", "2017-09-01T00:00:00", "4311", "Correction Officer", "2019-09-24T00:00:00", null, "DOC" ]
  , [ "row-rmvs.6kw9_6wta", "00000000-0000-0000-3B27-7803C51D05AC", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Correction - DOC", "Open", "2017-05-25T00:00:00", null, "3329", "Special Officer", "2020-05-18T00:00:00", null, "DOC" ]
  , [ "row-c64e~ybzf.a8bn", "00000000-0000-0000-ADBD-C20728C519C5", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-05-24T00:00:00", null, "6502", "Police Officer", "2020-06-22T00:00:00", null, "NYPD" ]
  , [ "row-8xzn~j2ch.nkcn", "00000000-0000-0000-BF30-C022AE87A5E2", 0, 1515534308, null, 1515534308, null, "{ }", "Duplicate Filing", null, "Police Department - NYPD", "Closed", "2017-05-24T00:00:00", null, null, null, null, null, "NYPD" ]
  , [ "row-pkec_5v9p_vawf", "00000000-0000-0000-50EA-4487C935DA5C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-24T00:00:00", "2017-05-25T00:00:00", "5537", "Principal Administrative Associate", "2021-02-22T00:00:00", null, "DCAS" ]
  , [ "row-47ek~uc4x~qxta", "00000000-0000-0000-6BF3-16C488230DDB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Police Department - NYPD", "Closed", "2017-05-24T00:00:00", "2017-10-10T00:00:00", "4324", "Police Officer", "2020-09-14T00:00:00", null, "NYPD" ]
  , [ "row-kp9w-n3dk.rhff", "00000000-0000-0000-1403-B1A1138D4A1C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-23T00:00:00", "2017-07-24T00:00:00", "6067", "City Planner", null, null, "DCAS" ]
  , [ "row-irv4~vkas~se8k", "00000000-0000-0000-AF29-A934F89D3298", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Police Department - NYPD", "Closed", "2017-05-23T00:00:00", "2017-06-20T00:00:00", "5322", "School Safety Agent", "2020-10-05T00:00:00", null, "NYPD" ]
  , [ "row-yy8t-32se_6cit", "00000000-0000-0000-A3D3-2372B3FD10B4", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for Appeal Request", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-23T00:00:00", "2017-07-07T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-idyt_qn38.recd", "00000000-0000-0000-CACA-6A1ECCDC7867", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-05-22T00:00:00", "2017-12-01T00:00:00", "4000", "Police Officer", "2019-12-24T00:00:00", null, "NYPD" ]
  , [ "row-e8ub.crxr-9pyp", "00000000-0000-0000-FEC3-B641FE9C9BB6", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-22T00:00:00", "2017-08-24T00:00:00", "6055", "Project Manager Intern", "2021-01-11T00:00:00", null, "DCAS" ]
  , [ "row-ktfr_nhv7.2efh", "00000000-0000-0000-4AB3-2A376AEAE377", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Correction - DOC", "Open", "2017-05-22T00:00:00", null, "6315", "Correction Officer", "2020-06-15T00:00:00", null, "DOC" ]
  , [ "row-8sej_apun_c2ck", "00000000-0000-0000-81E9-5B1BE356288A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-05-22T00:00:00", "2017-06-29T00:00:00", "3319", "Police Officer", "2019-12-21T00:00:00", null, "NYPD" ]
  , [ "row-e25x-mvuh~qhky", "00000000-0000-0000-781D-2EA954925972", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-22T00:00:00", "2017-07-07T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-wdt8_69av.7t4y", "00000000-0000-0000-C0CE-AD438D3A1B97", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-22T00:00:00", "2017-07-19T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-6vuu-ftkp~2uh9", "00000000-0000-0000-6A9D-46489E76667D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-22T00:00:00", "2017-12-20T00:00:00", "6067", "City Planner", "2021-06-21T00:00:00", null, "DCAS" ]
  , [ "row-x34n~axvc~cd5w", "00000000-0000-0000-D319-3DBED15E6220", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-05-22T00:00:00", "2017-08-11T00:00:00", "3318", "Police Officer", "2019-12-17T00:00:00", null, "NYPD" ]
  , [ "row-uiem_dta3~ps8z", "00000000-0000-0000-5EA7-77C02F9A2CE1", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-05-22T00:00:00", null, "4325", "School Safety Agent", "2020-04-28T00:00:00", null, "NYPD" ]
  , [ "row-6jrs~qchp-snkq", "00000000-0000-0000-949F-91E5A1020BED", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Closed", "2017-05-19T00:00:00", "2017-12-27T00:00:00", "3302", "Correction Officer", "2019-05-29T00:00:00", null, "DOC" ]
  , [ "row-4sjt~tdbg_53n5", "00000000-0000-0000-7C21-A65A1A3D9CEC", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-16T00:00:00", "2017-06-09T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-bxbp.7y8e-6dxg", "00000000-0000-0000-16DB-1465A1231334", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-19T00:00:00", "2017-12-07T00:00:00", "7011", "Administrative Community Relations Specialist", "2021-09-20T00:00:00", null, "DCAS" ]
  , [ "row-6kvi~6xmm-uk84", "00000000-0000-0000-CA57-D75F361F339E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-19T00:00:00", "2017-12-05T00:00:00", "6067", "City Planner", "2021-06-21T00:00:00", null, "DCAS" ]
  , [ "row-4kfc_un4j-7xec", "00000000-0000-0000-486E-E2E753B2DB0F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-05-19T00:00:00", "2017-10-03T00:00:00", "4300", "Police Officer", "2019-12-22T00:00:00", null, "NYPD" ]
  , [ "row-9u9j~wyp3.f3xn", "00000000-0000-0000-0EBE-8CB7E4B2C750", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-19T00:00:00", "2017-12-05T00:00:00", "7011", "Administrative Community Relations Specialist", "2021-09-20T00:00:00", null, "DCAS" ]
  , [ "row-8yp7.arvr-6j2a", "00000000-0000-0000-4EFB-5B6B7B11E3A9", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-05-19T00:00:00", null, "5010", "Administrative Manager", "2020-09-28T00:00:00", null, "DCAS" ]
  , [ "row-useq-t2u5-zxbm", "00000000-0000-0000-9AD2-0EC4451611C4", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-19T00:00:00", "2017-11-21T00:00:00", "6047", "Health Services Manager", "2021-05-24T00:00:00", null, "DCAS" ]
  , [ "row-67uw-ffwk.rqwx", "00000000-0000-0000-F3D7-25AB09472786", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Termination", "Transit Authority - NYCTA", "Closed", "2017-05-19T00:00:00", "2017-06-13T00:00:00", null, null, null, null, "NYCTA" ]
  , [ "row-zi63-2prh-527h", "00000000-0000-0000-BC50-01776D456325", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-05-18T00:00:00", "2017-09-28T00:00:00", "2326", "Police Officer", "2018-07-02T00:00:00", null, "NYPD" ]
  , [ "row-9h6z_5bza.4ra2", "00000000-0000-0000-F7CA-F54CCE5AE9B1", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-18T00:00:00", "2017-10-04T00:00:00", "6007", "Investigator", "2020-10-26T00:00:00", null, "DCAS" ]
  , [ "row-ieb3_uax3-qtx6", "00000000-0000-0000-E2CD-CA0AE41EEBF0", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-05-18T00:00:00", "2017-10-04T00:00:00", "3319", "Police Officer", "2019-12-21T00:00:00", null, "NYPD" ]
  , [ "row-xgu8-6quf-jw3y", "00000000-0000-0000-763B-8DED895CDE7D", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for Appeal Request", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-18T00:00:00", "2017-06-21T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-erce-p3wx~kza9", "00000000-0000-0000-C96C-5A5B063605AB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-18T00:00:00", "2017-08-10T00:00:00", "7011", "Administrative Community Relations Specialist", null, null, "DCAS" ]
  , [ "row-7957.5mxd~euk5", "00000000-0000-0000-3D09-D94F898F8494", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-05-18T00:00:00", "2017-08-29T00:00:00", "3318", "Police Officer", "2019-12-17T00:00:00", null, "NYPD" ]
  , [ "row-dnyf_u4qu.9ejb", "00000000-0000-0000-FBB9-D07D23C8366E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-05-18T00:00:00", null, "5018", "Computer Service Technician", "2021-06-14T00:00:00", null, "DCAS" ]
  , [ "row-98c9~wf5s-dt8a", "00000000-0000-0000-8A5D-C4764AA276A6", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-05-18T00:00:00", null, "6067", "City Planner", "2021-06-21T00:00:00", null, "DCAS" ]
  , [ "row-vrsu.vj9i_qq3w", "00000000-0000-0000-1847-A29E948B107E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-18T00:00:00", "2017-08-02T00:00:00", "6067", "City Planner", null, null, "DCAS" ]
  , [ "row-bkcr-kg4q.eq5p", "00000000-0000-0000-F7AA-BCFE0409AD9F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-05-18T00:00:00", null, "6067", "City Planner", "2021-06-21T00:00:00", null, "DCAS" ]
  , [ "row-fwj8_4yex-npgi", "00000000-0000-0000-B354-5180BEB82D7D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-05-17T00:00:00", null, "6057", "Call Center Representative", "2021-07-12T00:00:00", null, "DCAS" ]
  , [ "row-5tgp-ewqu~qqee", "00000000-0000-0000-4933-4AF416ECFF02", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-05-17T00:00:00", null, "5039", "Principal Administrative Associate", "2021-07-19T00:00:00", null, "DCAS" ]
  , [ "row-9c7y_zejw_c7qs", "00000000-0000-0000-DAAE-96D404B7D720", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-17T00:00:00", "2017-07-20T00:00:00", "7035", "Administrative Director of Social Services", null, null, "DCAS" ]
  , [ "row-y3jz~kemc~vv2t", "00000000-0000-0000-BAAA-B88BCE19C6C0", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-05-17T00:00:00", null, "3020", "Customer Information Representative", "2018-12-17T00:00:00", null, "DCAS" ]
  , [ "row-896y-idfg.rzr2", "00000000-0000-0000-E8F6-D3CFC76A77B0", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-17T00:00:00", "2017-05-18T00:00:00", "5537", "Principal Administrative Associate (PROM)", "2021-02-22T00:00:00", null, "DCAS" ]
  , [ "row-uugq~eiic.25d3", "00000000-0000-0000-3FAD-8AE69F9B66EA", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-05-17T00:00:00", "2017-06-06T00:00:00", "2326", "Police Officer", "2018-07-02T00:00:00", null, "NYPD" ]
  , [ "row-wbkh~vggx_vgr5", "00000000-0000-0000-D3D9-DFA794ADA025", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-05-17T00:00:00", null, "7035", "Administrative Director of Social Services", "2021-07-19T00:00:00", null, "DCAS" ]
  , [ "row-hh5j-ut2r.yh27", "00000000-0000-0000-A7DA-1191C64FF166", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-05-17T00:00:00", null, "6067", "City Planner", "2021-06-21T00:00:00", null, "DCAS" ]
  , [ "row-imyu~7pct-i7wk", "00000000-0000-0000-A24D-1E0EA4B6E11E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-17T00:00:00", "2017-08-31T00:00:00", "6067", "City Planner", null, null, "DCAS" ]
  , [ "row-vrvg_trz5_xdp7", "00000000-0000-0000-6C7A-A570E5E6AB2C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Eligibility", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-17T00:00:00", "2017-12-14T00:00:00", "5537", "Promotion to Principal Administrative Associate", "2021-02-22T00:00:00", null, "DCAS" ]
  , [ "row-nkff~b9ny_8d6j", "00000000-0000-0000-B34B-6BAA4D65A5CE", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-05-16T00:00:00", "2017-08-21T00:00:00", "4316", "Police Officer", "2020-08-24T00:00:00", null, "NYPD" ]
  , [ "row-3w5z_7gu3-gnhk", "00000000-0000-0000-316F-839937CD5780", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-16T00:00:00", "2017-06-09T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-7zrz~7qhd-cd6b", "00000000-0000-0000-BD96-E20D6424B8EF", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-05-16T00:00:00", null, "5018", "Computer Service Technician", "2021-06-14T00:00:00", null, "DCAS" ]
  , [ "row-kbfr-v3ge-vkzy", "00000000-0000-0000-7157-8C52CF1C3237", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-05-16T00:00:00", "2017-06-01T00:00:00", "4313", "Police Officer", "2020-06-23T00:00:00", null, "NYPD" ]
  , [ "row-rnuf_bds3-uvz8", "00000000-0000-0000-BCA5-7E20784AD837", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-16T00:00:00", "2017-06-07T00:00:00", "6067", "City Planner", null, null, "DCAS" ]
  , [ "row-rbur.nfp2.fi42", "00000000-0000-0000-73F0-09F64424C6CE", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-05-16T00:00:00", null, "5516", "Promotion to Administrative Manager", "2020-08-17T00:00:00", null, "DCAS" ]
  , [ "row-abd6~798n.x8mv", "00000000-0000-0000-C83A-A8010BB2C9FA", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-05-15T00:00:00", "2017-09-22T00:00:00", "3317", "Police Officer", "2019-12-16T00:00:00", null, "NYPD" ]
  , [ "row-a9tq.t3s7.kdvy", "00000000-0000-0000-0FA6-539F9684A9F2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-05-15T00:00:00", "2017-06-08T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-uyii-8sjq~fi2q", "00000000-0000-0000-F529-126B1023FB65", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-05-15T00:00:00", null, "5517", "Promotion to Administrative Staff Analyst", "2020-08-17T00:00:00", null, "DCAS" ]
  , [ "row-8wf6~3xtx~d478", "00000000-0000-0000-8390-DBADD84E745C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-05-15T00:00:00", null, "6067", "City Planner", "2021-06-21T00:00:00", null, "DCAS" ]
  , [ "row-ymem_wb9z~32nw", "00000000-0000-0000-3536-8EC4799FCA29", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Unauthorized Substance", "Police Department - NYPD", "Closed", "2017-05-15T00:00:00", "2017-08-07T00:00:00", "6306", "School Safety Agent", "2020-10-20T00:00:00", null, "NYPD" ]
  , [ "row-jte8~5mhc_q8y6", "00000000-0000-0000-1091-57D1504AAB77", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-05-15T00:00:00", "2017-06-26T00:00:00", "3309", "Police Officer", "2019-06-23T00:00:00", null, "NYPD" ]
  , [ "row-tba8~g68i_ijs6", "00000000-0000-0000-CE2D-70B9B881E8C4", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-15T00:00:00", "2017-06-13T00:00:00", "8098", "Train Operator", "2017-09-19T00:00:00", null, "DCAS" ]
  , [ "row-h6i7-q9zp~zf6h", "00000000-0000-0000-2032-B342D9838402", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-05-15T00:00:00", "2017-08-14T00:00:00", "4300", "Police Officer", "2019-12-22T00:00:00", null, "NYPD" ]
  , [ "row-ejm5-nr5h-ydkp", "00000000-0000-0000-F4D5-EDFE31544CDD", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Closed", "2017-05-15T00:00:00", "2017-12-15T00:00:00", "6332", "Correction Officer", "2020-09-22T00:00:00", null, "DOC" ]
  , [ "row-n5qq_9khw.4e7p", "00000000-0000-0000-9ADF-60FE25C17AF4", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-05-15T00:00:00", "2017-08-09T00:00:00", "3309", "Police Officer", "2019-06-23T00:00:00", null, "NYPD" ]
  , [ "row-xusn~yvkf-5nrn", "00000000-0000-0000-0B13-E5B7965FE240", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-15T00:00:00", "2017-07-07T00:00:00", "8098", "Train Operator", "2017-09-19T00:00:00", null, "DCAS" ]
  , [ "row-sm7f_mzqq_xj2s", "00000000-0000-0000-F890-08A9C8603B93", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-05-15T00:00:00", "2017-08-30T00:00:00", "3319", "Police Officer", "2019-12-21T00:00:00", null, "NYPD" ]
  , [ "row-5ps3-a7v8_2v5q", "00000000-0000-0000-0EE2-E874E7994455", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Termination", "Human Resources Administration - HRA", "Closed", "2017-05-15T00:00:00", "2017-10-10T00:00:00", null, null, null, null, "HRA" ]
  , [ "row-igbe~p5vp~rw56", "00000000-0000-0000-0131-2AEA1398BD7E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-05-12T00:00:00", null, "6067", "City Planner", "2021-06-21T00:00:00", null, "DCAS" ]
  , [ "row-d8ew_spqb~tbti", "00000000-0000-0000-2CCC-7DD5D319AE60", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-05-12T00:00:00", "2017-06-08T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-2s5i~ejde-ybzj", "00000000-0000-0000-1D18-82AC0287B928", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Police Department - NYPD", "Closed", "2017-05-12T00:00:00", "2017-08-11T00:00:00", "4312", "Police Officer", "2020-06-22T00:00:00", null, "NYPD" ]
  , [ "row-7rp8-ptma_jngr", "00000000-0000-0000-4FCA-ACBEB77EE405", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Closed", "2017-05-12T00:00:00", "2017-08-28T00:00:00", "6332", "Correction Officer", "2020-09-22T00:00:00", null, "DOC" ]
  , [ "row-mkf8~x9pm-qerh", "00000000-0000-0000-E286-13BEB4832022", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Transit Authority - NYCTA", "Closed", "2017-05-11T00:00:00", "2017-07-26T00:00:00", "5612", "Transit Electrical Helper", null, null, "NYCTA" ]
  , [ "row-nsn4-sp62_ra8d", "00000000-0000-0000-E0B0-DB786663CE7D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-11T00:00:00", "2017-06-08T00:00:00", "8098", "Train Operator", "2017-09-19T00:00:00", null, "DCAS" ]
  , [ "row-cxge-4q6i.d2u6", "00000000-0000-0000-86A8-85E1777E88BA", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-05-11T00:00:00", "2017-08-09T00:00:00", "3324", "School Safety Agent", "2018-05-30T00:00:00", null, "NYPD" ]
  , [ "row-t9qe~rg54~23wb", "00000000-0000-0000-4ED7-FECB4D195445", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-05-11T00:00:00", "2017-08-29T00:00:00", "3319", "Police Officer", "2019-12-21T00:00:00", null, "NYPD" ]
  , [ "row-ysmp-i6p8-qaie", "00000000-0000-0000-6D59-959FC880789A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-10T00:00:00", "2017-12-08T00:00:00", "5018", "Computer Service Technician", "2021-06-14T00:00:00", null, "DCAS" ]
  , [ "row-7xek~f6x4~kj87", "00000000-0000-0000-8BEE-5ABF5252151F", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-10T00:00:00", "2017-06-13T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-4pd7_7rqc-anwi", "00000000-0000-0000-F2A5-BD20DCE80753", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-05-10T00:00:00", "2017-07-17T00:00:00", "4059", "Police Administrative Aide", "2019-08-05T00:00:00", null, "NYPD" ]
  , [ "row-drvf_xpw2~ygnz", "00000000-0000-0000-1114-7ABAFD4CE919", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Termination", "Housing Authority - NYCHA", "Closed", "2017-05-08T00:00:00", "2017-11-27T00:00:00", null, null, null, null, "NYCHA" ]
  , [ "row-tamm-pf5c_yrrx", "00000000-0000-0000-3BDF-F7FDDF2E7AA6", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Closed", "2017-05-08T00:00:00", "2017-10-26T00:00:00", "7320", "Correction Officer", "2021-01-11T00:00:00", null, "DOC" ]
  , [ "row-zsce-un2i_rmjs", "00000000-0000-0000-E3A0-D3D7802EDA40", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-08T00:00:00", "2017-08-21T00:00:00", "8098", "Train Operator", "2017-09-19T00:00:00", null, "DCAS" ]
  , [ "row-2kfj-5qjg.rjpw", "00000000-0000-0000-F1D8-24E8D53D3908", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-08T00:00:00", "2017-06-13T00:00:00", "8098", "Train Operator", "2017-09-19T00:00:00", null, "DCAS" ]
  , [ "row-a6ph_wb57.z9we", "00000000-0000-0000-B114-EF1F685C705D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-08T00:00:00", "2017-08-11T00:00:00", "6067", "City Planner", "2021-06-21T00:00:00", null, "DCAS" ]
  , [ "row-j3i9-9396~8nsn", "00000000-0000-0000-39D3-6F27AB15945D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-05-05T00:00:00", "2017-06-27T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-3du9.n5ip_dmjv", "00000000-0000-0000-0610-E66A46EAD99B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-05-05T00:00:00", "2017-07-26T00:00:00", "3312", "Police Officer", "2019-09-23T00:00:00", null, "NYPD" ]
  , [ "row-xnyf~ea7q~ycwn", "00000000-0000-0000-B9FC-230A959DF227", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-05-05T00:00:00", "2017-06-09T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-5atr.hiqh~dkyi", "00000000-0000-0000-6FE7-6335E4C11D8D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-05T00:00:00", "2017-11-29T00:00:00", "5018", "Computer Service Technician", "2021-06-14T00:00:00", null, "DCAS" ]
  , [ "row-pyqi~744h-cjun", "00000000-0000-0000-DE6C-8A8B8267E04D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-05-05T00:00:00", "2017-09-18T00:00:00", "5018", "Computer Service Technician", null, null, "DCAS" ]
  , [ "row-guph.sgkf-7vta", "00000000-0000-0000-0A0D-3B44D301D3CA", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-05-05T00:00:00", null, "5517", "Promotion to Adminstrative Staff Analyst", "2020-08-17T00:00:00", null, "DCAS" ]
  , [ "row-2bhi_za3f-mb2y", "00000000-0000-0000-60D1-2FC9F5787C5B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-05-04T00:00:00", "2017-08-15T00:00:00", "4312", "Police Officer", "2020-06-22T00:00:00", null, "NYPD" ]
  , [ "row-7m99_e746.vfaw", "00000000-0000-0000-D2F8-A392841B6B15", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-05-04T00:00:00", "2017-08-14T00:00:00", "3318", "Police Officer", "2019-12-17T00:00:00", null, "NYPD" ]
  , [ "row-tg25.4vmw-ijq3", "00000000-0000-0000-8706-85200F2A7393", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-05-04T00:00:00", "2017-08-16T00:00:00", "3319", "Police Officer", "2019-12-21T00:00:00", null, "NYPD" ]
  , [ "row-pw6w~muta.uszi", "00000000-0000-0000-CF9F-6B3237B240C8", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-05-04T00:00:00", null, "3315", "Police Officer", "2019-12-10T00:00:00", null, "NYPD" ]
  , [ "row-5sve_5ee6-gvam", "00000000-0000-0000-6CBF-50CA3E1B1435", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-05-04T00:00:00", "2017-06-21T00:00:00", "3318", "Police Officer", "2019-12-17T00:00:00", null, "NYPD" ]
  , [ "row-5m65-cgct.k59c", "00000000-0000-0000-5E8C-5A5CBBC69D14", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-05-04T00:00:00", "2017-08-15T00:00:00", "4300", "Police Officer", "2019-12-22T00:00:00", null, "NYPD" ]
  , [ "row-vynx~hc47-b58z", "00000000-0000-0000-5AF4-19C2DB1FA436", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Suspension", "Department of Correction - DOC", "Closed", "2017-05-04T00:00:00", "2017-12-14T00:00:00", null, null, null, null, "DOC" ]
  , [ "row-w4ei-cbed-rita", "00000000-0000-0000-BB40-3291569CAAB0", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-05-03T00:00:00", "2017-07-06T00:00:00", "4300", "Police Officer", "2019-12-22T00:00:00", null, "NYPD" ]
  , [ "row-d2cw-phrc_gqum", "00000000-0000-0000-1DC9-CBF3BC0A7C1A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-05-03T00:00:00", "2017-08-16T00:00:00", "3318", "Police Officer", "2019-12-17T00:00:00", null, "NYPD" ]
  , [ "row-3at9.8c4s.gppp", "00000000-0000-0000-C0D4-BCA9EE5B6EDE", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "MTA New York City Transit - NYCT", "Closed", "2017-05-03T00:00:00", "2017-09-06T00:00:00", "5604", "Structure Maintainer Group G", "2021-05-10T00:00:00", null, "NYCT" ]
  , [ "row-x9vh~6pj4_6x9x", "00000000-0000-0000-F1B4-F49F6BAE88FE", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-05-02T00:00:00", "2017-08-11T00:00:00", "4300", "Police Officer", "2019-12-22T00:00:00", null, "NYPD" ]
  , [ "row-8aih_9b4g.b7xa", "00000000-0000-0000-56EE-B217F5EC813D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-05-02T00:00:00", null, "5026", "Electrician's Helper", "2021-01-04T00:00:00", null, "DCAS" ]
  , [ "row-9cxm.4wbj.w9jf", "00000000-0000-0000-B2E6-57B1009CF3C0", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Suspension", "Human Resources Administration - HRA", "Closed", "2017-05-02T00:00:00", "2017-09-25T00:00:00", null, null, null, null, "HRA" ]
  , [ "row-4ru6.tevp~drci", "00000000-0000-0000-6D7B-770F26421455", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Environmental Protection - DEP", "Closed", "2017-05-01T00:00:00", "2017-08-25T00:00:00", "5332", "Environmental Police Officer", "2019-11-19T00:00:00", null, "DEP" ]
  , [ "row-bi2b-itz6_9y28", "00000000-0000-0000-FE84-0515158A2EA1", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-05-01T00:00:00", "2017-06-27T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-5ajs~ng9r~9xup", "00000000-0000-0000-E41B-8E97F85BF935", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Fire Department - FDNY", "Closed", "2017-05-01T00:00:00", "2017-06-07T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-rs2i_ne9m-iude", "00000000-0000-0000-25E0-573013717595", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Correction - DOC", "Closed", "2017-05-01T00:00:00", "2017-12-19T00:00:00", "6315", "Correction Officer", "2020-06-15T00:00:00", null, "DOC" ]
  , [ "row-5qs9-ynx2-un7m", "00000000-0000-0000-2A66-F5F587642353", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "MTA New York City Transit - NYCT", "Closed", "2017-05-01T00:00:00", "2017-08-09T00:00:00", "5604", "Structure Maintainer Group G", "2021-05-10T00:00:00", null, "NYCT" ]
  , [ "row-j8up_daf5_hpjk", "00000000-0000-0000-F990-3B4D0C0FAAAC", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-05-01T00:00:00", "2017-10-26T00:00:00", "6003", "Emergency Medical Specialist - EMT", "2020-02-24T00:00:00", null, "FDNY" ]
  , [ "row-7txz~8sig_45zj", "00000000-0000-0000-AABA-E19133F0AD26", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "MTA New York City Transit - NYCT", "Closed", "2017-05-01T00:00:00", "2017-09-18T00:00:00", "6610", "Power Electronic Technician", "2021-06-07T00:00:00", null, "NYCT" ]
  , [ "row-7uvc_223c~5f64", "00000000-0000-0000-0019-030D40F579F1", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-05-01T00:00:00", null, "5018", "Computer Service Technician", "2021-06-14T00:00:00", null, "DCAS" ]
  , [ "row-f2v9.wpjc~wywq", "00000000-0000-0000-46D0-8FA8554DF0C3", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-04-28T00:00:00", "2017-08-16T00:00:00", "3316", "Police Officer", "2019-12-14T00:00:00", null, "NYPD" ]
  , [ "row-hiyf~6cft-yxjn", "00000000-0000-0000-305E-B4314B00B673", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-04-28T00:00:00", null, "2312", "School Safety Agent", "2018-01-31T00:00:00", null, "NYPD" ]
  , [ "row-2ndc.zge4_zvwh", "00000000-0000-0000-A437-237A99C09E16", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-04-28T00:00:00", "2017-05-08T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-tuty_frib.r64n", "00000000-0000-0000-BFF9-41C404F17546", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-04-28T00:00:00", "2017-06-02T00:00:00", "8098", "Train Operator", "2017-09-19T00:00:00", null, "DCAS" ]
  , [ "row-dd84_3mgh_6h6s", "00000000-0000-0000-5F3E-D4460FBE2755", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-04-28T00:00:00", "2017-06-16T00:00:00", "3315", "Police Officer", "2019-12-10T00:00:00", null, "NYPD" ]
  , [ "row-4si5-dibs_7izj", "00000000-0000-0000-4D95-BAC9426D345D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Seniority", "Department of Citywide Administrative Services - DCAS", "Open", "2017-04-28T00:00:00", null, "5537", "Promotion to Principal Administrative Associate", "2021-02-22T00:00:00", null, "DCAS" ]
  , [ "row-idef~pmfe.yyh2", "00000000-0000-0000-D480-ED47ED229380", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "MTA New York City Transit - NYCT", "Closed", "2017-04-28T00:00:00", "2017-09-06T00:00:00", "5604", "Structure Maintainer Group G", "2021-05-10T00:00:00", null, "NYCT" ]
  , [ "row-6gvw-bs7y~xksq", "00000000-0000-0000-E5DB-06AC1DC88B4A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Police Department - NYPD", "Closed", "2017-04-27T00:00:00", "2017-08-21T00:00:00", "3308", "Police Officer", "2019-06-22T00:00:00", null, "NYPD" ]
  , [ "row-v8xc_26r3-ij74", "00000000-0000-0000-24D1-C658740BA849", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Unauthorized Substance", "Police Department - NYPD", "Closed", "2017-04-27T00:00:00", "2017-08-09T00:00:00", "5327", "School Safety Agent", "2020-10-06T00:00:00", null, "NYPD" ]
  , [ "row-i4nc~jmcf_v3b5", "00000000-0000-0000-56BD-2B299B593CB0", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-04-27T00:00:00", null, "5011", "Administrative Staff Analyst", "2020-09-28T00:00:00", null, "DCAS" ]
  , [ "row-eac7~mwca~i889", "00000000-0000-0000-1DA3-238D03C69B21", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-04-27T00:00:00", "2017-09-18T00:00:00", "6006", "Heating Plant Technician (Housing Authority)", "2021-01-04T00:00:00", null, "DCAS" ]
  , [ "row-qra2~cvds_f93g", "00000000-0000-0000-5C50-92CB38E18D37", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Police Department - NYPD", "Closed", "2017-04-27T00:00:00", "2017-10-30T00:00:00", "3324", "School Safety Agent", "2018-05-30T00:00:00", null, "NYPD" ]
  , [ "row-tu2a.sjx3.qker", "00000000-0000-0000-636B-FD489761C655", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-04-26T00:00:00", null, "5018", "Computer Service Technician", "2021-06-14T00:00:00", null, "DCAS" ]
  , [ "row-jfge-4xsd.csrv", "00000000-0000-0000-C97A-CF8242698990", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-04-25T00:00:00", "2017-06-26T00:00:00", "6050", "Estimator(General Construction)", "2021-02-01T00:00:00", null, "DCAS" ]
  , [ "row-hfmg_qvvv.epcg", "00000000-0000-0000-DFC9-DEE569F73D1E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-04-25T00:00:00", "2017-06-26T00:00:00", "6067", "City Planner", null, null, "DCAS" ]
  , [ "row-jsrt~9adc-3g6a", "00000000-0000-0000-D80D-EFC6319A1D8B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-04-25T00:00:00", "2017-11-09T00:00:00", "5018", "Computer Service Technician", "2021-06-14T00:00:00", null, "DCAS" ]
  , [ "row-u8nm~v3bd.635b", "00000000-0000-0000-7539-D8D83DFE69A3", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-04-25T00:00:00", null, "5010", "Administrative Manager", "2020-09-28T00:00:00", null, "DCAS" ]
  , [ "row-kmmb~q4b6~id9c", "00000000-0000-0000-837B-501314DDE7FF", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-04-25T00:00:00", null, "5516", "Promotion to Administrative Manager", "2020-08-17T00:00:00", null, "DCAS" ]
  , [ "row-etra.wvux-eyr7", "00000000-0000-0000-B772-26AF733A9A48", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Termination", "Housing Authority - NYCHA", "Closed", "2017-04-24T00:00:00", "2017-10-13T00:00:00", null, null, null, null, "NYCHA" ]
  , [ "row-9kf5_ej5d.a7he", "00000000-0000-0000-34FD-765BF7D766B2", 0, 1515534308, null, 1515534308, null, "{ }", "Duplicate Filing", null, "Housing Authority - NYCHA", "Closed", "2017-04-24T00:00:00", "2017-04-24T00:00:00", null, null, null, null, "NYCHA" ]
  , [ "row-h3es-8z7c~dqw5", "00000000-0000-0000-558F-6479561CD4BD", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-04-24T00:00:00", "2017-06-06T00:00:00", "8098", "Train Operator", "2017-09-19T00:00:00", null, "DCAS" ]
  , [ "row-bd7s~ytia~8xqf", "00000000-0000-0000-CF3F-1C663889BF07", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-04-24T00:00:00", "2017-06-09T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-pzhv.z9qy.fk2x", "00000000-0000-0000-3C34-A32F20BADC12", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Police Department - NYPD", "Closed", "2017-04-24T00:00:00", "2017-08-15T00:00:00", "6319", "Traffic Enforcement Agent", "2020-10-19T00:00:00", null, "NYPD" ]
  , [ "row-2ay3~qvn4~gig6", "00000000-0000-0000-B7D8-59C29FFC7130", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-04-24T00:00:00", null, "5011", "Administrative Staff Analyst", "2020-09-28T00:00:00", null, "DCAS" ]
  , [ "row-nc8z~d6cq.bpnw", "00000000-0000-0000-BD9C-3397403EEB21", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-04-24T00:00:00", "2017-05-05T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-ja67-m8xq-g6z9", "00000000-0000-0000-3757-E6BCCA165D10", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Unauthorized Substance", "Police Department - NYPD", "Closed", "2017-04-24T00:00:00", "2017-08-15T00:00:00", "6306", "School Safety Agent", "2020-10-20T00:00:00", null, "NYPD" ]
  , [ "row-fv2e_pexi~f5hg", "00000000-0000-0000-F4D7-7CE958ECBE5C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Police Department - NYPD", "Closed", "2017-04-24T00:00:00", "2017-08-09T00:00:00", "6303", "Traffic Enforcement Agent", "2020-06-15T00:00:00", null, "NYPD" ]
  , [ "row-69x2_j4xc.n32a", "00000000-0000-0000-F6A8-97EB0428766A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-04-24T00:00:00", "2017-06-02T00:00:00", "4335", "Police Communications Technician", "2017-11-14T00:00:00", null, "NYPD" ]
  , [ "row-ivvf-c5an_yd4s", "00000000-0000-0000-0B62-617BEA397690", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-04-24T00:00:00", "2017-05-23T00:00:00", "8098", "Train Operator", "2017-09-19T00:00:00", null, "DCAS" ]
  , [ "row-9yde~pg9h.retz", "00000000-0000-0000-23F1-E10C69790C66", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-04-23T00:00:00", "2017-10-27T00:00:00", "2054", "Police Officer", "2019-06-18T00:00:00", null, "NYPD" ]
  , [ "row-jtnk_wudc-tir6", "00000000-0000-0000-0AA7-555082EF991E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-04-21T00:00:00", "2017-11-02T00:00:00", "3308", "Police Officer", "2019-06-22T00:00:00", null, "NYPD" ]
  , [ "row-zfi4-djrs-c2pv", "00000000-0000-0000-68C5-A2D921A9A1BB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-04-21T00:00:00", "2017-09-11T00:00:00", "5010", "Administrative Manager", "2020-09-28T00:00:00", null, "DCAS" ]
  , [ "row-fdgk_4c7i~b2gj", "00000000-0000-0000-FDB3-3A365784F598", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-04-21T00:00:00", "2017-07-31T00:00:00", "5330", "Police Communications Technician", "2020-09-15T00:00:00", null, "NYPD" ]
  , [ "row-jhsu_d2wj_6rp3", "00000000-0000-0000-8634-356EB492A12C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-04-20T00:00:00", "2017-09-01T00:00:00", "6044", "Fraud Investigator", null, null, "DCAS" ]
  , [ "row-x6w9_kgup-yy35", "00000000-0000-0000-DED3-90280C2A471D", 0, 1515534308, null, 1515534308, null, "{ }", "Duplicate Filing", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-04-20T00:00:00", "2017-04-21T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-sch9.a5ji_seni", "00000000-0000-0000-D079-D3D9802ABB83", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-04-20T00:00:00", "2017-09-11T00:00:00", "6043", "Construction Project Manager Intern", null, null, "DCAS" ]
  , [ "row-g2w2-twce~2q5e", "00000000-0000-0000-E298-79D876A7CCFC", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "MTA New York City Transit - NYCT", "Closed", "2017-04-20T00:00:00", "2017-06-29T00:00:00", "5604", "Structure Maintainer Group G", null, null, "NYCT" ]
  , [ "row-rj4u_sj7y_snsd", "00000000-0000-0000-891A-AA3945C2A44C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-04-20T00:00:00", null, "5516", "Promotion to Administrative Manager", "2020-08-17T00:00:00", null, "DCAS" ]
  , [ "row-pu63-kth6~s9nq", "00000000-0000-0000-0C7F-661B3E413B70", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-04-19T00:00:00", "2017-08-08T00:00:00", "3316", "Police Officer", "2019-12-14T00:00:00", null, "NYPD" ]
  , [ "row-eg5y_xvfh_u3xn", "00000000-0000-0000-304A-8691ABB36C40", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-04-19T00:00:00", "2017-07-13T00:00:00", "2326", "Police Officer", "2018-07-02T00:00:00", null, "NYPD" ]
  , [ "row-efuf~8dm2.y6sc", "00000000-0000-0000-3A88-30316C830843", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-04-19T00:00:00", "2017-11-16T00:00:00", "2326", "Police Officer", "2018-07-02T00:00:00", null, "NYPD" ]
  , [ "row-rqaf.rasr~g8pw", "00000000-0000-0000-0A66-5EB504927C9A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Sanitation - DSNY", "Open", "2017-04-19T00:00:00", null, "5001", "Sanitation Worker", "2020-03-16T00:00:00", null, "DSNY" ]
  , [ "row-wugz-drdj~t88j", "00000000-0000-0000-F2D6-DD9364D4757F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-04-19T00:00:00", null, "5517", "Promotion to Administrative Staff Analyst", "2020-08-17T00:00:00", null, "DCAS" ]
  , [ "row-nwww~zwmj.4iw9", "00000000-0000-0000-BE29-2864F82C3DC6", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-04-19T00:00:00", "2017-06-26T00:00:00", "4335", "Police Communications Technician", "2017-11-14T00:00:00", null, "NYPD" ]
  , [ "row-gfby~kfra~69i8", "00000000-0000-0000-0D46-D01BAF5C0514", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-04-19T00:00:00", null, "5517", "Promotion to Administrative Staff Analyst", "2020-08-17T00:00:00", null, "DCAS" ]
  , [ "row-8phy_9cmv~krjs", "00000000-0000-0000-575E-6FF7016A167B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-04-19T00:00:00", "2017-05-10T00:00:00", "2311", "Police Officer", "2018-05-01T00:00:00", null, "NYPD" ]
  , [ "row-re8t~23x5.rqhv", "00000000-0000-0000-0AB6-10F9C8D23709", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-20T00:00:00", "2017-03-24T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-rui4~bjda.rcbe", "00000000-0000-0000-5652-BBCDF61654A8", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-04-18T00:00:00", "2017-05-22T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-k9rw~s7tr_5ybz", "00000000-0000-0000-42A9-75BF85A6EC66", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Transit Authority - NYCTA", "Closed", "2017-04-17T00:00:00", "2017-06-14T00:00:00", "5612", "Transit Electrical Helper", null, null, "NYCTA" ]
  , [ "row-cbcp_ktii~y7d6", "00000000-0000-0000-E719-92636E9AFE74", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Police Department - NYPD", "Closed", "2017-04-16T00:00:00", "2017-06-09T00:00:00", null, null, null, null, "NYPD" ]
  , [ "row-fubj.wg8y~5c98", "00000000-0000-0000-4832-2AFFA481721D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-04-14T00:00:00", "2017-08-09T00:00:00", "7320", "Correction Officer", "2021-01-11T00:00:00", null, "DOC" ]
  , [ "row-u2nk.d98b~5uri", "00000000-0000-0000-820D-86BF3F021F56", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-04-13T00:00:00", "2017-09-01T00:00:00", "3319", "Police Officer", "2019-12-21T00:00:00", null, "NYPD" ]
  , [ "row-qcuz~gnse-gd9r", "00000000-0000-0000-AC18-765588C605D5", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-04-13T00:00:00", "2017-06-22T00:00:00", "4335", "Police Communications Technician", "2017-11-14T00:00:00", null, "NYPD" ]
  , [ "row-h3qv-94bf~qxvi", "00000000-0000-0000-051B-5FC4EDD5DCA6", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Correction - DOC", "Closed", "2017-04-13T00:00:00", "2017-09-07T00:00:00", "6308", "Correction Officer", "2020-03-02T00:00:00", null, "DOC" ]
  , [ "row-6cun-hjay.rkqx", "00000000-0000-0000-DBD5-264CE8C67263", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-04-13T00:00:00", null, "5011", "Administrative Staff Analyst", "2020-09-28T00:00:00", null, "DCAS" ]
  , [ "row-urda~b5qt_kdcx", "00000000-0000-0000-2C44-822CA15CEF79", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-04-11T00:00:00", "2017-04-24T00:00:00", "113", "Custodian", "2017-05-04T00:00:00", null, "DCAS" ]
  , [ "row-q59y~dd2a-s9w7", "00000000-0000-0000-4566-D337CD3591DD", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-04-11T00:00:00", "2017-12-07T00:00:00", "5010", "Administrative Manager", "2020-09-28T00:00:00", null, "DCAS" ]
  , [ "row-dh86_wz84-giks", "00000000-0000-0000-0C1F-16E7649BCEDE", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-04-10T00:00:00", "2017-06-13T00:00:00", "4334", "Police Communications Technician", "2017-11-13T00:00:00", null, "NYPD" ]
  , [ "row-32uv.9j7d_eguc", "00000000-0000-0000-9443-05948C48D43D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-04-10T00:00:00", "2017-07-20T00:00:00", "3316", "Police Officer", "2019-12-14T00:00:00", null, "NYPD" ]
  , [ "row-verq-qmrb.txqj", "00000000-0000-0000-1BA3-170BEAA20EC8", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-04-10T00:00:00", "2017-06-29T00:00:00", "3318", "Police Officer", "2019-12-17T00:00:00", null, "NYPD" ]
  , [ "row-8w3s-w2rx.hpgc", "00000000-0000-0000-95C4-037F7B7297AD", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-04-10T00:00:00", "2017-08-30T00:00:00", "3313", "Police Officer", "2019-09-24T00:00:00", null, "NYPD" ]
  , [ "row-6gc9~6e8y~vn54", "00000000-0000-0000-3EE2-EC6FE5DF0643", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-04-10T00:00:00", "2017-08-28T00:00:00", "3318", "Police Officer", "2019-12-17T00:00:00", null, "NYPD" ]
  , [ "row-xhdx_pbs3.rae6", "00000000-0000-0000-598D-EB9BEFA82621", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-04-10T00:00:00", "2017-05-04T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-ymap.rm5k~kyb3", "00000000-0000-0000-B0BC-6DDF15169EFB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-04-10T00:00:00", "2017-05-18T00:00:00", "7035", "Administrative Director of Social Services", null, null, "DCAS" ]
  , [ "row-u2gw.8t72.vqvn", "00000000-0000-0000-674D-0D294D4425B2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-04-07T00:00:00", "2017-06-30T00:00:00", "4312", "Police Officer", "2020-06-22T00:00:00", null, "NYPD" ]
  , [ "row-7ybk-h3w6~u4ii", "00000000-0000-0000-4793-0518F14DF1B4", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Correction - DOC", "Open", "2017-04-07T00:00:00", null, "6315", "Correction Officer", "2020-06-15T00:00:00", null, "DOC" ]
  , [ "row-57xd~yude_3e6c", "00000000-0000-0000-294B-862AA993C074", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-04-07T00:00:00", "2017-11-02T00:00:00", "6332", "Correction Officer", "2020-09-22T00:00:00", null, "DOC" ]
  , [ "row-mgaw_69aq_9h2j", "00000000-0000-0000-B166-35BD958FA087", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-04-06T00:00:00", "2017-07-26T00:00:00", "4329", "Police Officer", "2020-11-25T00:00:00", null, "NYPD" ]
  , [ "row-6kxs.s3y2.2zc5", "00000000-0000-0000-2CDD-9DCB23527FB6", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-04-06T00:00:00", "2017-11-17T00:00:00", "6332", "Correction Officer", "2020-09-22T00:00:00", null, "DOC" ]
  , [ "row-iq47_a6ne_y24w", "00000000-0000-0000-2F85-763E16E2811D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-04-06T00:00:00", "2017-05-05T00:00:00", "8098", "Train Operator", "2017-09-19T00:00:00", null, "DCAS" ]
  , [ "row-mx43~7j5f_jm6d", "00000000-0000-0000-5AA9-E95347CC6A56", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-04-06T00:00:00", "2017-09-14T00:00:00", "3319", "Police Officer", "2019-11-21T00:00:00", null, "NYPD" ]
  , [ "row-aiwp_yceu_ikpc", "00000000-0000-0000-2EDA-A718474E990F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Finance - DOF", "Closed", "2017-04-06T00:00:00", "2017-04-12T00:00:00", "3021", "Deputy City Sheriff", "2017-07-10T00:00:00", null, "DOF" ]
  , [ "row-2se9_dj6u.h4cm", "00000000-0000-0000-D43A-5C478A58E727", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Transit Authority - NYCTA", "Closed", "2017-04-05T00:00:00", "2017-06-01T00:00:00", "8098", "Train Operator", "2017-09-19T00:00:00", null, "NYCTA" ]
  , [ "row-d5ej-zk9w_9t8q", "00000000-0000-0000-EC56-1CA40A9436F7", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Closed", "2017-04-05T00:00:00", "2017-11-15T00:00:00", "4327", "Correction Officer", "2019-11-05T00:00:00", null, "DOC" ]
  , [ "row-pcbk~496v.mhmp", "00000000-0000-0000-B958-474D9C7924D7", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Fire Department - FDNY", "Closed", "2017-04-04T00:00:00", "2017-05-03T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-mft5-n7ei_wgw2", "00000000-0000-0000-B25D-F82DB033C587", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-04-04T00:00:00", "2017-06-21T00:00:00", "6055", "Project Manager Intern", "2021-01-11T00:00:00", null, "DCAS" ]
  , [ "row-2dkw-tvtd_adjh", "00000000-0000-0000-EC86-EF3078B7E050", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Finance - DOF", "Closed", "2017-04-03T00:00:00", "2017-04-06T00:00:00", "3021", "Deputy City Sheriff", "2017-07-10T00:00:00", null, "DOF" ]
  , [ "row-iys2.ihed_6cnu", "00000000-0000-0000-9FA5-5DCC13536423", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Fire Department - FDNY", "Closed", "2017-04-03T00:00:00", "2017-04-12T00:00:00", null, null, null, null, "FDNY" ]
  , [ "row-2p88.x95j-3ydj", "00000000-0000-0000-E4CC-C98BFE3993CF", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-04-03T00:00:00", "2017-07-11T00:00:00", "3067", "Police Officer", "2019-12-15T00:00:00", null, "NYPD" ]
  , [ "row-9xyp-ajqw-s3jh", "00000000-0000-0000-61B3-9C16070A7BEF", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-04-03T00:00:00", "2017-06-06T00:00:00", "6049", "Certified IT Administrator LAN WAN", "2021-03-01T00:00:00", null, "DCAS" ]
  , [ "row-qiv4_9ynk~72ai", "00000000-0000-0000-5A22-2DAD62FF04AE", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-04-03T00:00:00", "2017-07-06T00:00:00", "7035", "Administrative Director of Social Services", null, null, "DCAS" ]
  , [ "row-qra5.myuq_fvvf", "00000000-0000-0000-D940-69D11EA7FFD6", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-04-03T00:00:00", "2017-05-22T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-kr9a_jemr_w8e7", "00000000-0000-0000-1380-FDD197AC0AFD", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-04-03T00:00:00", "2017-10-25T00:00:00", "7035", "Administrative Director of Social Services", null, null, "DCAS" ]
  , [ "row-f667.mhpc-2pea", "00000000-0000-0000-1662-0A395D79EB18", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-04-03T00:00:00", "2017-12-08T00:00:00", "5011", "Administrative Staff Analyst", "2020-09-28T00:00:00", null, "DCAS" ]
  , [ "row-fewu_sdz7.3nwv", "00000000-0000-0000-2333-69BC31C4F92C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-04-03T00:00:00", "2017-05-04T00:00:00", "3303", "Correction Officer", "2019-06-03T00:00:00", null, "DOC" ]
  , [ "row-bi8t.8xq6_7x2i", "00000000-0000-0000-DD28-4BF84FB77A38", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-04-03T00:00:00", "2017-05-03T00:00:00", "7035", "Administrative Director of Social Services", null, null, "DCAS" ]
  , [ "row-scw9-q42a.8asa", "00000000-0000-0000-6B3D-1A1EFA0C3A85", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Police Department - NYPD", "Closed", "2017-04-03T00:00:00", "2017-08-08T00:00:00", "4332", "Police Officer", "2020-12-21T00:00:00", null, "NYPD" ]
  , [ "row-nner-eqh9.afe9", "00000000-0000-0000-4F1A-5DD51F7DD4BB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-04-03T00:00:00", "2017-11-03T00:00:00", "5010", "Administrative Manager", "2020-09-28T00:00:00", null, "DCAS" ]
  , [ "row-dv5m_p8y8~igja", "00000000-0000-0000-B6CA-F5587638174E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Termination", "Housing Authority - NYCHA", "Closed", "2017-04-03T00:00:00", "2017-06-20T00:00:00", null, null, null, null, "NYCHA" ]
  , [ "row-ta2d~kgca_g44z", "00000000-0000-0000-A499-BBE9BA49418A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-03-31T00:00:00", "2017-04-27T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-n2x8~ttbe~4f3g", "00000000-0000-0000-3F53-B95807017F97", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-03-31T00:00:00", "2017-06-29T00:00:00", "4312", "Police Officer", "2020-06-22T00:00:00", null, "NYPD" ]
  , [ "row-k8bh-2y4k_ss4u", "00000000-0000-0000-18FA-0D941B7E20C3", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Sanitation - DSNY", "Closed", "2017-03-31T00:00:00", "2017-04-12T00:00:00", null, null, null, null, "DSNY" ]
  , [ "row-u5np.acdm.7m59", "00000000-0000-0000-511B-B94EE054B39A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-03-30T00:00:00", "2017-08-08T00:00:00", "3068", "Police Officer", "2019-12-18T00:00:00", null, "NYPD" ]
  , [ "row-cqb8~mz6w-n4ui", "00000000-0000-0000-1269-C7945860B24A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-30T00:00:00", "2017-11-27T00:00:00", "7035", "Administrative Director of Social Services", "2021-07-19T00:00:00", null, "DCAS" ]
  , [ "row-dz9v.thi6~m2me", "00000000-0000-0000-B3FF-0BA57EAD8EFC", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-30T00:00:00", "2017-06-02T00:00:00", "5044", "Research Assistant", "2021-02-01T00:00:00", null, "DCAS" ]
  , [ "row-j7ts-jm38.tauy", "00000000-0000-0000-6366-34B935ADD10D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-30T00:00:00", "2017-11-15T00:00:00", "5011", "Administrative Staff Analyst", "2020-09-28T00:00:00", null, "DCAS" ]
  , [ "row-yejb~w26b-76vt", "00000000-0000-0000-49A2-D2B1DB433C34", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-30T00:00:00", "2017-11-15T00:00:00", "5517", "Promotion to Administrative Staff Analyst", "2020-08-17T00:00:00", null, "DCAS" ]
  , [ "row-gr4x-ejum-9f9b", "00000000-0000-0000-5076-FE4DBB3ED003", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-30T00:00:00", "2017-11-13T00:00:00", "5011", "Administrative Staff Analyst", "2020-09-28T00:00:00", null, "DCAS" ]
  , [ "row-xv6u-dsj5_a38d", "00000000-0000-0000-271A-AD2107CFC0AE", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-30T00:00:00", "2017-06-30T00:00:00", "6055", "Project Manager Intern", "2021-01-11T00:00:00", null, "DCAS" ]
  , [ "row-pyzz~ykuk_4vw6", "00000000-0000-0000-958E-1B61E85C9AC7", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-29T00:00:00", "2017-08-24T00:00:00", "5011", "Administrative Staff Analyst", "2020-09-28T00:00:00", null, "DCAS" ]
  , [ "row-zrii.nm2w_tz5f", "00000000-0000-0000-5A84-19FAFAF0FD76", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-03-28T00:00:00", "2017-08-08T00:00:00", "4300", "Police Officer", "2019-12-22T00:00:00", null, "NYPD" ]
  , [ "row-x8xe-8un6.up2j", "00000000-0000-0000-B02A-5016901DAA86", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-28T00:00:00", "2017-11-03T00:00:00", "5011", "Administrative Staff Analyst", "2020-09-28T00:00:00", null, "DCAS" ]
  , [ "row-avvy.4b22-9wd2", "00000000-0000-0000-2A01-2C5E81B63A97", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Correction - DOC", "Closed", "2017-03-28T00:00:00", "2017-09-07T00:00:00", "6315", "Correction Officer", "2020-06-15T00:00:00", null, "DOC" ]
  , [ "row-ujcm-pusr_52me", "00000000-0000-0000-17BA-2F1D8D84E788", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Termination", "Housing Authority - NYCHA", "Closed", "2017-03-28T00:00:00", "2017-05-24T00:00:00", null, null, null, null, "NYCHA" ]
  , [ "row-ithq.idqy.8a7w", "00000000-0000-0000-1A42-1ADA5405D038", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Suspension", "Housing Authority - NYCHA", "Closed", "2017-03-28T00:00:00", "2017-08-17T00:00:00", null, null, null, null, "NYCHA" ]
  , [ "row-uvw6_9k93~5kcq", "00000000-0000-0000-6F11-4C309467EACB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Suspension", "Human Resources Administration - HRA", "Closed", "2017-03-28T00:00:00", "2017-06-21T00:00:00", null, null, null, null, "HRA" ]
  , [ "row-hjez.j6g2.nhf9", "00000000-0000-0000-2DFA-C225F5988299", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Correction - DOC", "Closed", "2017-03-28T00:00:00", "2017-11-01T00:00:00", "6029", "Probation Officer", "2020-09-14T00:00:00", null, "DOC" ]
  , [ "row-4sfx-n7c3~eb3i", "00000000-0000-0000-7055-03EAC5364A40", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-03-27T00:00:00", "2017-07-06T00:00:00", "3326", "School Safety Agent", "2019-09-09T00:00:00", null, "NYPD" ]
  , [ "row-mx4e.89g9-nvny", "00000000-0000-0000-87A5-70D14696493A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-27T00:00:00", "2017-11-21T00:00:00", "6024", "Plasterer", "2021-02-01T00:00:00", null, "DCAS" ]
  , [ "row-i46u.gxaz.jy7q", "00000000-0000-0000-3878-E879AFF665FC", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-03-27T00:00:00", "2017-05-05T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-j5ki.jbi4_uwkh", "00000000-0000-0000-7E05-C105CDAC0554", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-27T00:00:00", "2017-06-15T00:00:00", "5010", "Administrative Manager", "2020-09-28T00:00:00", null, "DCAS" ]
  , [ "row-fwbz.vj38~46iq", "00000000-0000-0000-C284-BD99361997D6", 0, 1515534308, null, 1515534308, null, "{ }", "Jurisdictional Issue", null, "Fire Department - FDNY", "Closed", "2017-03-24T00:00:00", "2017-03-29T00:00:00", null, null, null, null, "FDNY" ]
  , [ "row-f5jn-887d-wb6h", "00000000-0000-0000-683F-57955CAE0C23", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-03-23T00:00:00", "2017-07-07T00:00:00", "2302", "Police Officer", "2018-04-30T00:00:00", null, "NYPD" ]
  , [ "row-x5fi_ursc-ucyh", "00000000-0000-0000-E16B-A98C74C487CA", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Fire Department - FDNY", "Closed", "2017-03-23T00:00:00", "2017-05-03T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-u7uv_3evp.hj7e", "00000000-0000-0000-D343-2721BFCDE181", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for Appeal Request", null, "Police Department - NYPD", "Closed", "2017-03-23T00:00:00", "2017-06-09T00:00:00", null, null, null, null, "NYPD" ]
  , [ "row-w8ny.q9ej-mr27", "00000000-0000-0000-B7C2-2CAFD1D72CFE", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-03-22T00:00:00", null, "3311", "Police Offficer", "2019-06-29T00:00:00", null, "NYPD" ]
  , [ "row-ncn9-7x2t_p83e", "00000000-0000-0000-1699-E3F273351B8F", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Transit Authority - NYCTA", "Closed", "2017-03-22T00:00:00", "2017-04-05T00:00:00", null, null, null, null, "NYCTA" ]
  , [ "row-f8bf.9zuu_y99p", "00000000-0000-0000-7F3C-EA8A1672AE45", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-03-22T00:00:00", "2017-05-18T00:00:00", "4336", "Police Communications Technician", "2020-03-09T00:00:00", null, "NYPD" ]
  , [ "row-q4t2_wcg6~csnr", "00000000-0000-0000-3A94-D4FBF9AF3A01", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-03-22T00:00:00", "2017-05-04T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-hjub-i5kb_j3a7", "00000000-0000-0000-F96E-B3C3422458EE", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-03-22T00:00:00", "2017-05-26T00:00:00", "3313", "Police Officer", "2019-09-24T00:00:00", null, "NYPD" ]
  , [ "row-u3wz.gwjx-wizr", "00000000-0000-0000-F39F-BDD87EE8201F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-03-22T00:00:00", "2017-08-07T00:00:00", "3314", "Police Officer", "2019-12-09T00:00:00", null, "NYPD" ]
  , [ "row-86tt~fr67.m47w", "00000000-0000-0000-4758-C3E36B8F8C10", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Eligibility", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-22T00:00:00", "2017-10-10T00:00:00", "5710", "Promotion to Assistant Train Dispatcher", null, null, "DCAS" ]
  , [ "row-j9xr-i9wt.4xgc", "00000000-0000-0000-AC7C-DCEA92710937", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Administration for Children's Services - ACS", "Closed", "2017-03-22T00:00:00", "2017-07-05T00:00:00", "4317", "Child Protective Specialist", "2020-05-06T00:00:00", null, "ACS" ]
  , [ "row-6cbc~tcde.d4hy", "00000000-0000-0000-7842-B0047556C4E1", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "MTA New York City Transit - NYCT", "Closed", "2017-03-22T00:00:00", "2017-06-21T00:00:00", "6605", "Structure Maintainer Group C", null, null, "NYCT" ]
  , [ "row-danc_z92f.p8ex", "00000000-0000-0000-55FC-0F8046BE6F34", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-03-22T00:00:00", "2017-06-08T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-ybgk~wxej.a9ym", "00000000-0000-0000-9A49-AE6B1773FB29", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-03-21T00:00:00", "2017-07-07T00:00:00", "3314", "Police Officer", "2019-12-09T00:00:00", null, "NYPD" ]
  , [ "row-bydf~3hyj~iz5j", "00000000-0000-0000-D1DB-596E02F950B2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-03-21T00:00:00", "2017-11-27T00:00:00", "6332", "Correction Officer", "2020-09-22T00:00:00", null, "DOC" ]
  , [ "row-vbds-969a_sw3e", "00000000-0000-0000-6FDC-27FCA9B89117", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-21T00:00:00", "2017-10-10T00:00:00", "6044", "Fraud Investigator", null, null, "DCAS" ]
  , [ "row-ryqm~m3ae.r82u", "00000000-0000-0000-BF7A-97B0009F0E33", 0, 1515534308, null, 1515534308, null, "{ }", "Duplicate Filing", null, "Department of Parks and Recreation - DPR", "Closed", "2017-03-20T00:00:00", null, null, null, null, null, "DPR" ]
  , [ "row-kur9.bazy~rb2s", "00000000-0000-0000-F6A8-36E8A722CC7C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-03-20T00:00:00", "2017-08-25T00:00:00", "4324", "Police Officer", "2020-09-14T00:00:00", null, "NYPD" ]
  , [ "row-5zy3_c5g8.z9gg", "00000000-0000-0000-294B-6942FE4D176F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Open", "2017-03-20T00:00:00", null, "6332", "Correction Officer", "2020-09-22T00:00:00", null, "DOC" ]
  , [ "row-phph-5isx.gq8g", "00000000-0000-0000-E7B4-8B04E6A63EB7", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Fire Department - FDNY", "Open", "2017-03-20T00:00:00", null, "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-ndf3~z5dh-2dna", "00000000-0000-0000-5CAE-1F454623B588", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-03-20T00:00:00", "2017-06-13T00:00:00", "3314", "Police Officer", "2019-12-09T00:00:00", null, "NYPD" ]
  , [ "row-exa3~zzsp.xd3w", "00000000-0000-0000-C7CD-2EC013CB61BA", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-03-20T00:00:00", "2017-04-26T00:00:00", "3313", "Police Officer", "2019-09-24T00:00:00", null, "NYPD" ]
  , [ "row-g8gv_t9xa~rxfn", "00000000-0000-0000-06CC-7E25C7565166", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-03-20T00:00:00", "2017-06-15T00:00:00", "3313", "Police Officer", "2019-09-24T00:00:00", null, "NYPD" ]
  , [ "row-mf5k~ftcq-6fsq", "00000000-0000-0000-7A00-08156681A33E", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-20T00:00:00", "2017-03-27T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-fx78~czpv~dm57", "00000000-0000-0000-F603-8C54F4429A71", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-03-20T00:00:00", "2017-12-19T00:00:00", "3302", "Correction Officer", "2019-05-29T00:00:00", null, "DOC" ]
  , [ "row-jhvc.s8ka_df92", "00000000-0000-0000-9429-DE6D60B7418D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-03-20T00:00:00", "2017-07-07T00:00:00", "3319", "Police Officer", "2019-12-21T00:00:00", null, "NYPD" ]
  , [ "row-u28e~p5c4_aqwn", "00000000-0000-0000-6465-D8270775BD9C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-03-20T00:00:00", "2017-07-05T00:00:00", "3310", "Police Officer", "2019-06-25T00:00:00", null, "NYPD" ]
  , [ "row-kr7x-pnrr.7pe6", "00000000-0000-0000-11D8-3257009382FF", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-20T00:00:00", "2017-06-26T00:00:00", "5018", "Computer Service Technician", null, null, "DCAS" ]
  , [ "row-f84z.btbw~4uh7", "00000000-0000-0000-F2A8-3C6035BFD12F", 0, 1515534308, null, 1515534308, null, "{ }", "Duplicate Filing", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-19T00:00:00", "2017-03-20T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-hiuu-48z3-ak82", "00000000-0000-0000-40A7-34DFA2A17E14", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-03-17T00:00:00", null, "3314", "Police Officer", "2019-12-09T00:00:00", null, "NYPD" ]
  , [ "row-d3t6_zqaa.rpsu", "00000000-0000-0000-BA54-FF0FE6BBBB87", 0, 1515534308, null, 1515534308, null, "{ }", "Duplicate Filing", null, "Civil Service Commission - NYCCSC", "Closed", "2017-03-17T00:00:00", "2017-03-17T00:00:00", null, null, null, null, "NYCCSC" ]
  , [ "row-2s22_i7vr-x9ni", "00000000-0000-0000-52DB-C320C4788FC8", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-17T00:00:00", "2017-10-13T00:00:00", "7035", "Administrative Director of Social Services", null, null, "DCAS" ]
  , [ "row-4fzy.gwbx~wi8z", "00000000-0000-0000-F9C6-D87078E272E2", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Correction - DOC", "Closed", "2017-03-17T00:00:00", "2017-04-17T00:00:00", null, null, null, null, "DOC" ]
  , [ "row-6zp3.webf~7p7v", "00000000-0000-0000-BE5E-B43EC2F912C4", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for Appeal Request", null, "Police Department - NYPD", "Closed", "2017-03-17T00:00:00", "2017-04-17T00:00:00", null, null, null, null, "NYPD" ]
  , [ "row-wrn9~py5k.dbxy", "00000000-0000-0000-B2CC-3E5F62E9CD44", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Closed", "2017-03-17T00:00:00", "2017-06-13T00:00:00", "6325", "Correction Officer", "2020-09-21T00:00:00", null, "DOC" ]
  , [ "row-u6rf-jxdg.pwa4", "00000000-0000-0000-20EB-70A5F220AB1C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Eligibility", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-17T00:00:00", "2017-12-08T00:00:00", "6531", "Promotion to Stationary Engineer (Electric)", null, null, "DCAS" ]
  , [ "row-6zqz~m2ht-3cjz", "00000000-0000-0000-959D-C9C53B3A3C1E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Police Department - NYPD", "Open", "2017-03-16T00:00:00", null, "4300", "Police Officer", "2019-12-22T00:00:00", null, "NYPD" ]
  , [ "row-bejm_zi98~xtnf", "00000000-0000-0000-D186-82B5DC7FE144", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-03-16T00:00:00", "2017-05-05T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-q6ki~txij_meey", "00000000-0000-0000-C4E9-84DAB0B1D781", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-03-15T00:00:00", "2017-10-27T00:00:00", "3318", "Police Officer", "2019-12-17T00:00:00", null, "NYPD" ]
  , [ "row-9isr_7u95_fnvv", "00000000-0000-0000-7C36-AEA38D8F2129", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Correction - DOC", "Closed", "2017-03-13T00:00:00", "2017-09-21T00:00:00", "6325", "Correction Officer", "2020-09-21T00:00:00", null, "DOC" ]
  , [ "row-xhkk~9kgv.8665", "00000000-0000-0000-1645-AD6D59C8F5E5", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-03-13T00:00:00", "2017-07-26T00:00:00", "3308", "Police Officer", "2019-06-22T00:00:00", null, "NYPD" ]
  , [ "row-29w9.qqit-nr5u", "00000000-0000-0000-1904-F9A7883170C8", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-03-13T00:00:00", "2017-05-15T00:00:00", "3313", "Police Officer", "2019-09-24T00:00:00", null, "NYPD" ]
  , [ "row-6ur8.w5qg~4v9w", "00000000-0000-0000-7CEC-DAD4F2412FA6", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-03-13T00:00:00", "2017-06-26T00:00:00", "3313", "Police Officer", "2019-09-24T00:00:00", null, "NYPD" ]
  , [ "row-7fsn~rn2w-hkx3", "00000000-0000-0000-2B8F-C88F7E817ECA", 0, 1515534308, null, 1515534308, null, "{ }", "Jurisdictional Issue", null, "Administration for Children's Services - ACS", "Closed", "2017-03-10T00:00:00", "2017-03-30T00:00:00", null, null, null, null, "ACS" ]
  , [ "row-6k9a-jnas.tk45", "00000000-0000-0000-DA1F-514BA7E54C4E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Closed", "2017-03-10T00:00:00", "2017-07-26T00:00:00", "6325", "Correction Officer", "2020-09-21T00:00:00", null, "DOC" ]
  , [ "row-qehm-6exz~4fne", "00000000-0000-0000-BFE0-0AB67D95FB7C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-03-10T00:00:00", "2017-06-29T00:00:00", "3312", "Police Officer", "2019-09-23T00:00:00", null, "NYPD" ]
  , [ "row-8e6d_54ww~4itx", "00000000-0000-0000-315A-F146796CE9B6", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-09T00:00:00", "2017-10-13T00:00:00", "7012", "Administrative Engineer", null, null, "DCAS" ]
  , [ "row-e8jd.vxrg~gbdr", "00000000-0000-0000-B78E-A37673C8AE1A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-03-09T00:00:00", "2017-06-26T00:00:00", "3309", "Police Officer", "2019-06-23T00:00:00", null, "NYPD" ]
  , [ "row-bsc9.ad9p~kuhz", "00000000-0000-0000-1782-0612258DAE60", 0, 1515534308, null, 1515534308, null, "{ }", "Other", null, "Department of Correction - DOC", "Closed", "2017-03-09T00:00:00", "2017-05-02T00:00:00", null, null, null, null, "DOC" ]
  , [ "row-xta2.smy4_7ptb", "00000000-0000-0000-41C7-2FC48688EAEC", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-03-08T00:00:00", "2017-03-24T00:00:00", "2500", "Firefighter", "2016-12-19T00:00:00", null, "FDNY" ]
  , [ "row-hy4r.8xem-uyvj", "00000000-0000-0000-6377-DD9D6AE15262", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-03-08T00:00:00", "2017-06-21T00:00:00", "3308", "Police Officer", "2019-06-22T00:00:00", null, "NYPD" ]
  , [ "row-g5en~x2gz~fjhh", "00000000-0000-0000-5A44-AADFA4629BE7", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "MTA New York City Transit - NYCT", "Closed", "2017-03-08T00:00:00", "2017-06-21T00:00:00", "6602", "Light Maintainer", null, null, "NYCT" ]
  , [ "row-kdz8.zgb4~c2fk", "00000000-0000-0000-98AB-E63B3EC983DB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-03-08T00:00:00", "2017-12-19T00:00:00", "2053", "Police Officer", "2019-06-17T00:00:00", null, "NYPD" ]
  , [ "row-uvn5.xbjm.swht", "00000000-0000-0000-1C2E-118E75680DB8", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Open", "2017-03-08T00:00:00", null, null, null, null, null, "DCAS" ]
  , [ "row-948i.tmm9-t9hg", "00000000-0000-0000-5256-F3B5FC4C9C5B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-07T00:00:00", "2017-05-22T00:00:00", "7000", "Emergency Medical Specialist - EMT (FIRE)", "2021-03-29T00:00:00", null, "DCAS" ]
  , [ "row-hvq3_4kca_p9wm", "00000000-0000-0000-50B6-87B210D1C19C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-07T00:00:00", "2017-06-09T00:00:00", "6067", "City Planner", null, null, "DCAS" ]
  , [ "row-yg5v-z3pm~gyfn", "00000000-0000-0000-6282-E36F52C48DB1", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Correction - DOC", "Closed", "2017-03-07T00:00:00", "2017-12-14T00:00:00", "6308", "Correction Officer", "2020-03-02T00:00:00", null, "DOC" ]
  , [ "row-2ndh-fnsj_6f4k", "00000000-0000-0000-7FC0-D62D542F24C4", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-07T00:00:00", "2017-06-02T00:00:00", "6067", "City Planner", null, null, "DCAS" ]
  , [ "row-3zhi~ugtn~aq8r", "00000000-0000-0000-BA0B-AA0B8A8A6F21", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-06T00:00:00", "2017-07-06T00:00:00", "5011", "Administrative Staff Analyst", "2020-09-28T00:00:00", null, "DCAS" ]
  , [ "row-p9k3_wtey.wqsi", "00000000-0000-0000-78D3-662E195AC290", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-03-06T00:00:00", "2017-07-20T00:00:00", "3317", "Police Officer", "2019-11-16T00:00:00", null, "NYPD" ]
  , [ "row-7jbf.sfkq-k6qe", "00000000-0000-0000-2213-6863B5E761CD", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-03-06T00:00:00", "2017-07-05T00:00:00", "2326", "Police Officer", "2018-07-02T00:00:00", null, "NYPD" ]
  , [ "row-rh9i~7kya_3yiw", "00000000-0000-0000-22BE-D10ED3C091BC", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Unauthorized Substance", "Police Department - NYPD", "Closed", "2017-03-06T00:00:00", "2017-08-04T00:00:00", "5330", "Police Communications Technician", "2020-09-15T00:00:00", null, "NYPD" ]
  , [ "row-rd47.sif2.qrvq", "00000000-0000-0000-2791-68D15A3F3179", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "MTA New York City Transit - NYCT", "Closed", "2017-03-06T00:00:00", "2017-06-08T00:00:00", "6602", "Light Maintainer", null, null, "NYCT" ]
  , [ "row-pm9i.gs6i_b9jq", "00000000-0000-0000-D216-8B92A95825DC", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-01-12T00:00:00", null, "3311", "Police Officer", "2019-06-29T00:00:00", null, "NYPD" ]
  , [ "row-xun5.se9e_6vps", "00000000-0000-0000-65F3-6301BA7EC431", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-06T00:00:00", "2017-03-16T00:00:00", "7035", "Administrative Director of Social Services", null, null, "DCAS" ]
  , [ "row-62ss~6rad_r8rj", "00000000-0000-0000-FC30-C56838C46E4B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Termination", "Administration for Children's Services - ACS", "Closed", "2017-03-06T00:00:00", "2017-07-06T00:00:00", null, null, null, null, "ACS" ]
  , [ "row-c3ty_ik7c.7agn", "00000000-0000-0000-2654-52AA6294DDDD", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Civil Service Commission - NYCCSC", "Closed", "2017-03-05T00:00:00", "2017-03-06T00:00:00", "5784", "NYS Court Officer-Trainee", null, null, "NYCCSC" ]
  , [ "row-egk7_gnfw_ckd7", "00000000-0000-0000-CD98-7F10B9A5DEF6", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-03-03T00:00:00", "2017-08-17T00:00:00", "4335", "Police Communications Technician", "2017-11-14T00:00:00", null, "NYPD" ]
  , [ "row-itsu~z7nk-34s5", "00000000-0000-0000-8E18-8EDCE8100747", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-03T00:00:00", "2017-10-13T00:00:00", "7012", "Administrative Engineer", null, null, "DCAS" ]
  , [ "row-cmz6.bbre_3kic", "00000000-0000-0000-4C83-622FBA8D2BFA", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-03-02T00:00:00", "2017-04-27T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-9jfn-t4nk-7e9i", "00000000-0000-0000-E434-659B866C1EC4", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Sanitation - DSNY", "Closed", "2017-03-02T00:00:00", "2017-07-26T00:00:00", "5001", "Sanitation Worker", "2020-03-16T00:00:00", null, "DSNY" ]
  , [ "row-7kcp.vfeg.yu68", "00000000-0000-0000-EAF5-7618A9502878", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-03-02T00:00:00", "2017-03-17T00:00:00", "4321", "School Safety Agent", "2020-04-27T00:00:00", null, "NYPD" ]
  , [ "row-gmhe~8vuq_zfh8", "00000000-0000-0000-7DAA-2DD724F3A6E5", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-02T00:00:00", "2017-09-27T00:00:00", "6044", "Fraud Investigator", null, null, "DCAS" ]
  , [ "row-hmze_8xfr_8752", "00000000-0000-0000-B3A3-C08917F521A3", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-03-01T00:00:00", null, "7320", "Correction Officer", "2021-01-11T00:00:00", null, "DCAS" ]
  , [ "row-c9v9_hpxe_fnv4", "00000000-0000-0000-1487-F3E8934D9A9A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-01T00:00:00", "2017-05-01T00:00:00", "6049", "Certified IT Administrator (LAN/WAN)", "2021-03-01T00:00:00", null, "DCAS" ]
  , [ "row-aiv3.jwhb~bni7", "00000000-0000-0000-063A-0C4B18791C6F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Police Department - NYPD", "Closed", "2017-03-01T00:00:00", "2017-09-08T00:00:00", "4336", "Police Communications Technician", "2020-03-09T00:00:00", null, "NYPD" ]
  , [ "row-urui.g4ee-c3kd", "00000000-0000-0000-C94A-C4F5FCB31C02", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-01T00:00:00", "2017-04-12T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-pst5~cvwd.svu4", "00000000-0000-0000-9F54-A6FA6C7BBAED", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Eligibility", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-01T00:00:00", "2017-09-08T00:00:00", "5710", "Promotion to Assistant Train Dispatcher", "2021-02-01T00:00:00", null, "DCAS" ]
  , [ "row-u2um_7hxs-z5k5", "00000000-0000-0000-A64E-7BC2F6E47DF9", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-03-01T00:00:00", "2017-04-12T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-6k8p~kff3-yjd4", "00000000-0000-0000-B88E-6E0F30F167DD", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-28T00:00:00", "2017-06-30T00:00:00", "6044", "Fraud Investigator", null, null, "DCAS" ]
  , [ "row-nzf5~gij8~3ncw", "00000000-0000-0000-29DC-EE1A45ECB724", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-28T00:00:00", "2017-06-30T00:00:00", "6047", "Health Services Manager", null, null, "DCAS" ]
  , [ "row-8r7c~rynv-mtwv", "00000000-0000-0000-8407-7A065E97042D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Termination", "Department of Environmental Protection - DEP", "Open", "2017-02-28T00:00:00", null, null, null, null, null, "DEP" ]
  , [ "row-gqnz_iae3~6ndk", "00000000-0000-0000-5083-5EDC8CAE9B37", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Sanitation - DSNY", "Closed", "2017-02-27T00:00:00", "2017-06-13T00:00:00", "5001", "Sanitation Worker", "2020-03-16T00:00:00", null, "DSNY" ]
  , [ "row-2zse_i8sy~5nbq", "00000000-0000-0000-2833-F9A32CEB586F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "MTA New York City Transit - NYCT", "Closed", "2017-02-27T00:00:00", "2017-06-09T00:00:00", "5611", "Signal Maintainer", null, null, "NYCT" ]
  , [ "row-v8xu.ivpj~z2g9", "00000000-0000-0000-F7FD-232CF08206C0", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-27T00:00:00", "2017-04-10T00:00:00", "6047", "Health Services Manager", null, null, "DCAS" ]
  , [ "row-8swc~nz89_davm", "00000000-0000-0000-56E3-E0F0B4870704", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-27T00:00:00", "2017-05-05T00:00:00", "5018", "Computer Service Technician", null, null, "DCAS" ]
  , [ "row-kf6v~bg4u_jtmq", "00000000-0000-0000-E44B-84FE99967841", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-24T00:00:00", "2017-11-02T00:00:00", "5013", "Associate Project Manager", "2020-10-05T00:00:00", null, "DCAS" ]
  , [ "row-zany~nfbp.ujje", "00000000-0000-0000-2B0E-78500E816112", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-02-24T00:00:00", "2017-09-01T00:00:00", "4318", "Correction Officer", "2019-11-04T00:00:00", null, "DOC" ]
  , [ "row-sxex.npk7.nz6t", "00000000-0000-0000-9854-83F7A6CA1E49", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Correction - DOC", "Open", "2017-02-24T00:00:00", null, "6308", "Correction Officer", "2020-03-02T00:00:00", null, "DOC" ]
  , [ "row-dpr5_7pf7~r7vj", "00000000-0000-0000-6078-31D0E244F9F1", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-24T00:00:00", "2017-07-05T00:00:00", "5011", "Administrative Staff Analyst", "2020-09-28T00:00:00", null, "DCAS" ]
  , [ "row-kvyz~8rqe_knum", "00000000-0000-0000-2F50-6A7D342C1953", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-23T00:00:00", "2017-08-31T00:00:00", "6043", "Construction Project Manager Intern", null, null, "DCAS" ]
  , [ "row-jjpk.ceuk~wve4", "00000000-0000-0000-077F-F213905AF692", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-23T00:00:00", "2017-10-04T00:00:00", "6511", "Promotion to Captain (Correction)", "2020-12-28T00:00:00", null, "DCAS" ]
  , [ "row-wigq-vtr5-4c7b", "00000000-0000-0000-BC49-8F9DF56012E1", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Correction - DOC", "Open", "2017-02-23T00:00:00", null, "4318", "Correction Officer", "2019-11-04T00:00:00", null, "DOC" ]
  , [ "row-tzww-wbp9~bawv", "00000000-0000-0000-819E-D1600C5F514B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Open", "2017-02-23T00:00:00", null, "4301", "School Safety Agent", "2020-01-06T00:00:00", null, "NYPD" ]
  , [ "row-n2e8_y5ud_ncwv", "00000000-0000-0000-8D07-DB0B13AE531C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-22T00:00:00", "2017-11-17T00:00:00", "7035", "Administrative Director of Social Services", null, null, "DCAS" ]
  , [ "row-tues_3x92~ek9n", "00000000-0000-0000-6DAC-EF03FE56990E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-22T00:00:00", "2017-07-20T00:00:00", "7035", "Administrative Director of Social Services", null, null, "DCAS" ]
  , [ "row-4srh_usyq~gwak", "00000000-0000-0000-EB41-C2D5739E16BF", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-22T00:00:00", "2017-09-18T00:00:00", "7035", "Administrative Director of Social Services", null, null, "DCAS" ]
  , [ "row-x52m.5jsf~svik", "00000000-0000-0000-C96A-048F28F18C46", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-22T00:00:00", "2017-05-08T00:00:00", "6055", "Project Manager Intern", null, null, "DCAS" ]
  , [ "row-4hti.aias-pmjg", "00000000-0000-0000-86EF-E5847CDA0378", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-02-22T00:00:00", "2017-04-20T00:00:00", "4321", "School Safety Agent", "2020-04-27T00:00:00", null, "NYPD" ]
  , [ "row-sc4a_fbtp.f3ww", "00000000-0000-0000-355B-B417F0E6A218", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-21T00:00:00", "2017-06-07T00:00:00", "6042", "Construction Project Manager", null, null, "DCAS" ]
  , [ "row-8uck_qmhm.i76v", "00000000-0000-0000-FDFD-22BC31AC3860", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-02-21T00:00:00", "2017-05-16T00:00:00", "5502", "Police Officer", "2019-06-17T00:00:00", null, "NYPD" ]
  , [ "row-tew5_b6m6_qxqc", "00000000-0000-0000-A953-C8286F28F514", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-02-21T00:00:00", "2017-03-30T00:00:00", "4059", "Police Administrative Aide", "2019-08-05T00:00:00", null, "NYPD" ]
  , [ "row-d4b8.gtr2-w3cz", "00000000-0000-0000-1B37-A79366C03042", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-21T00:00:00", "2017-09-08T00:00:00", "6042", "Construction Project Manager", null, null, "DCAS" ]
  , [ "row-8jsr-d9vk.ue9u", "00000000-0000-0000-3A21-8F60B83CAD20", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Police Department - NYPD", "Closed", "2017-01-17T00:00:00", "2017-01-26T00:00:00", null, null, null, null, "NYPD" ]
  , [ "row-qph6~dhr2_nshf", "00000000-0000-0000-0ABF-B454D054C462", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-21T00:00:00", "2017-08-31T00:00:00", "6042", "Construction Project Manager", null, null, "DCAS" ]
  , [ "row-jec7.d7tv.hrbv", "00000000-0000-0000-DF87-5A23300A4F52", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-21T00:00:00", "2017-04-24T00:00:00", "6067", "City Planner", null, null, "DCAS" ]
  , [ "row-ne4r_8ud5-tt5j", "00000000-0000-0000-8EFC-8B2263C12631", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Termination", "Housing Authority - NYCHA", "Closed", "2017-02-21T00:00:00", "2017-05-24T00:00:00", null, null, null, null, "NYCHA" ]
  , [ "row-bfy5_3yq9-4zas", "00000000-0000-0000-825E-FABC55D4554D", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Environmental Protection - DEP", "Closed", "2017-02-19T00:00:00", "2017-03-08T00:00:00", null, null, null, null, "DEP" ]
  , [ "row-4g79_dg49~j2f2", "00000000-0000-0000-964D-3B3EAFA4E210", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Fire Department - FDNY", "Closed", "2017-02-17T00:00:00", "2017-04-20T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-i3kh.57gu.jmsa", "00000000-0000-0000-A909-F2A69E2A42FA", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "MTA New York City Transit - NYCT", "Closed", "2017-02-17T00:00:00", "2017-06-09T00:00:00", "6602", "Light Maintainer", null, null, "NYCT" ]
  , [ "row-hqj4_3ndq.6fxd", "00000000-0000-0000-546E-A74086C28468", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-17T00:00:00", "2017-10-26T00:00:00", "6506", "Promotion to Heating Plant Technician (Housing Authority)", "2020-12-21T00:00:00", null, "DCAS" ]
  , [ "row-kv9c_3ge9.rgtg", "00000000-0000-0000-D802-C66290EE3004", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-17T00:00:00", "2017-03-07T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-ket5.2zp5-c5tm", "00000000-0000-0000-B0CD-07847D60619C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Termination", "Department of Sanitation - DSNY", "Closed", "2017-02-17T00:00:00", "2017-05-24T00:00:00", null, null, null, null, "DSNY" ]
  , [ "row-fwwx_xngk.zt9k", "00000000-0000-0000-A7C4-AD47B98BEF49", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "MTA New York City Transit - NYCT", "Closed", "2017-02-16T00:00:00", "2017-04-10T00:00:00", "5607", "Telephone Maintainer", null, null, "NYCT" ]
  , [ "row-55r3_miz3.9uhu", "00000000-0000-0000-2C01-9DA25C252F9A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-02-16T00:00:00", "2017-07-06T00:00:00", "4312", "Police Officer", "2020-06-22T00:00:00", null, "NYPD" ]
  , [ "row-q4mt_tqyg~ncw2", "00000000-0000-0000-C784-AB071A7283FB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "MTA New York City Transit - NYCT", "Closed", "2017-02-16T00:00:00", "2017-06-22T00:00:00", "5607", "Telephone Maintainer", null, null, "NYCT" ]
  , [ "row-rqtq_k3ds.3amk", "00000000-0000-0000-EF5D-96F3AA1F3943", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Sanitation - DSNY", "Closed", "2017-02-16T00:00:00", "2017-04-12T00:00:00", "5001", "Sanitation Worker", "2020-03-16T00:00:00", null, "DSNY" ]
  , [ "row-7vbt_6asp-h6wc", "00000000-0000-0000-12EA-5464653ECDC1", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-02-16T00:00:00", "2017-05-08T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-k92x-7tga.qs9t", "00000000-0000-0000-1C5A-8F7ABE818677", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-15T00:00:00", "2017-09-13T00:00:00", "7035", "Administrative Director of Social Services", null, null, "DCAS" ]
  , [ "row-3gix.qhz2.6sz7", "00000000-0000-0000-EA21-3D6DE3EBF05B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-15T00:00:00", "2017-03-27T00:00:00", "6055", "Project Manager Intern", null, null, "DCAS" ]
  , [ "row-77yi.n6zp-fju6", "00000000-0000-0000-D1D5-DF7D0DC67D85", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Fire Department - FDNY", "Closed", "2017-02-14T00:00:00", "2017-04-06T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-ap2p.wsk3~3qkh", "00000000-0000-0000-DC6F-BCE555399557", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-14T00:00:00", "2017-03-02T00:00:00", "6055", "Project Manager Intern", null, null, "DCAS" ]
  , [ "row-5nu3_89vu-p7wm", "00000000-0000-0000-838A-CBCAEA4FF454", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-02-14T00:00:00", "2017-06-14T00:00:00", "4059", "Police Administrative Aide", "2019-08-05T00:00:00", null, "NYPD" ]
  , [ "row-tgi2_d3ff_p5mn", "00000000-0000-0000-6DFF-F3C1DFBC4237", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-02-14T00:00:00", "2017-06-21T00:00:00", "3068", "Police Officer", "2019-12-18T00:00:00", null, "NYPD" ]
  , [ "row-3x5r~hgfy.ri5e", "00000000-0000-0000-0C27-7A149680E65F", 0, 1515534308, null, 1515534308, null, "{ }", "Duplicate Filing", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-13T00:00:00", "2017-02-17T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-8wah.69ey_r7pf", "00000000-0000-0000-B609-C5C2C23D595C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Fire Department - FDNY", "Closed", "2017-02-13T00:00:00", "2017-03-31T00:00:00", "2000", "Firefighter", null, null, "FDNY" ]
  , [ "row-wqza~2aak_3wss", "00000000-0000-0000-C3E5-CC87EB7C66B7", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-02-13T00:00:00", "2017-05-08T00:00:00", "3311", "Police Officer", "2018-04-05T00:00:00", null, "NYPD" ]
  , [ "row-xzjk-svvn.6m7h", "00000000-0000-0000-990D-A89CC23C6196", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Fire Department - FDNY", "Closed", "2017-02-13T00:00:00", "2017-06-07T00:00:00", "5003", "Emergency Medical Specialist - EMT", "2019-02-18T00:00:00", null, "FDNY" ]
  , [ "row-yztx_6dsp~pmx9", "00000000-0000-0000-6030-C8A3CB54AC1B", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Transit Authority - NYCTA", "Closed", "2017-02-13T00:00:00", "2017-03-07T00:00:00", null, null, null, null, "NYCTA" ]
  , [ "row-gh2y~qtn3~k78h", "00000000-0000-0000-E340-48CCCAB3C803", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-13T00:00:00", "2017-10-24T00:00:00", "6024", "Plasterer", "2021-02-01T00:00:00", null, "DCAS" ]
  , [ "row-v5bs~rek6~ry72", "00000000-0000-0000-7D7D-034CF2AAFAE7", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for Appeal Request", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-13T00:00:00", "2017-03-22T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-zsb8-pv82.7e9x", "00000000-0000-0000-ACF6-11D0CECB42B4", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-02-13T00:00:00", "2017-05-02T00:00:00", "3326", "School Safety Agent", "2019-09-19T00:00:00", null, "NYPD" ]
  , [ "row-vhyg-zmyj~akf5", "00000000-0000-0000-4FBC-60D9B2A78067", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-02-13T00:00:00", "2017-06-07T00:00:00", "6315", "Correction Officer", "2020-06-15T00:00:00", null, "DOC" ]
  , [ "row-etcc_69wb~7r37", "00000000-0000-0000-AD6C-090F75723B86", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-13T00:00:00", "2017-08-09T00:00:00", "5013", "Associate Project Manager", "2020-10-05T00:00:00", null, "DCAS" ]
  , [ "row-zv5n-bb86~n3bj", "00000000-0000-0000-EDD6-C611DBE9D01E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-13T00:00:00", "2017-06-30T00:00:00", "5039", "Principal Administrative Associate", null, null, "DCAS" ]
  , [ "row-e22g.s5hj-mc7g", "00000000-0000-0000-451A-CE32AC96B71B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-02-13T00:00:00", "2017-06-13T00:00:00", "4334", "Police Communications Technician", "2017-11-13T00:00:00", null, "NYPD" ]
  , [ "row-ss69_gmxu_vdr5", "00000000-0000-0000-F1CF-C02CE4A475FB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-13T00:00:00", "2017-05-18T00:00:00", "6047", "Health Services Manager", null, null, "DCAS" ]
  , [ "row-dshe_8vns.9r3c", "00000000-0000-0000-AED1-A1CD83690B0A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-02-13T00:00:00", "2017-06-05T00:00:00", "6315", "Correction Officer", "2020-06-15T00:00:00", null, "DOC" ]
  , [ "row-ap7a_rrrg.8kz2", "00000000-0000-0000-2FCA-93F06D7A706B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-02-13T00:00:00", "2017-08-07T00:00:00", "3313", "Police Officer", "2019-09-24T00:00:00", null, "NYPD" ]
  , [ "row-8e68.dc9h_wggn", "00000000-0000-0000-B183-DA0CA7382011", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-10T00:00:00", "2017-11-29T00:00:00", "5039", "Principal Administrative Associate", "2021-07-19T00:00:00", null, "DCAS" ]
  , [ "row-uyst.b8uq_qe2w", "00000000-0000-0000-715C-FB9414F4340B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-10T00:00:00", "2017-08-31T00:00:00", "6044", "Fraud Investigator", null, null, "DCAS" ]
  , [ "row-j8gz.fq8v.q7cg", "00000000-0000-0000-07E7-437D1E3F8805", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-10T00:00:00", "2017-03-22T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-8qf5~74w5_mbi3", "00000000-0000-0000-2BA1-6A72A49669F0", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Open", "2017-02-10T00:00:00", null, "7035", "Administrative Director of Social Services", "2021-07-19T00:00:00", null, "DCAS" ]
  , [ "row-y92c-462t~nrur", "00000000-0000-0000-9858-A3B069755D0D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-10T00:00:00", "2017-10-17T00:00:00", "5039", "Principal Administrative Associate", "2021-07-19T00:00:00", null, "DCAS" ]
  , [ "row-9se7~z8u3.kdxf", "00000000-0000-0000-D69B-85C49CFE0A4F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-10T00:00:00", "2017-11-02T00:00:00", "6007", "Investigator", "2020-10-26T00:00:00", null, "DCAS" ]
  , [ "row-wfni~a6np-frcm", "00000000-0000-0000-3B8A-1AFD9B508AF5", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-10T00:00:00", "2017-11-09T00:00:00", "3037", "Procurement Analyst", "2018-05-28T00:00:00", null, "DCAS" ]
  , [ "row-443x-pqim.ar28", "00000000-0000-0000-327C-5C383D6D4369", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-09T00:00:00", "2017-03-07T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-vths.i9jk.68a6", "00000000-0000-0000-77AB-9DBBBDC04535", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Termination", "Housing Authority - NYCHA", "Closed", "2017-02-08T00:00:00", "2017-05-24T00:00:00", null, null, null, null, "NYCHA" ]
  , [ "row-qk4n_4ysq~nima", "00000000-0000-0000-0E5E-CE818CCC31B5", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-08T00:00:00", "2017-09-11T00:00:00", "7035", "Administrative Director of Social Services", null, null, "DCAS" ]
  , [ "row-yruu~sgwd-h23i", "00000000-0000-0000-C84D-D00BD49A0629", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-02-08T00:00:00", "2017-06-27T00:00:00", "5319", "Traffic Enforcement Agent", "2019-10-28T00:00:00", null, "NYPD" ]
  , [ "row-rvat_5tu3-jztd", "00000000-0000-0000-E7BE-1EDF0E706420", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-08T00:00:00", "2017-11-14T00:00:00", "5039", "Principal Administrative Associate", "2021-07-19T00:00:00", null, "DCAS" ]
  , [ "row-sz7d~xwuk_ykhg", "00000000-0000-0000-292C-9A5724896D6C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-02-07T00:00:00", "2017-03-16T00:00:00", "3327", "School Safety Agent", "2019-09-10T00:00:00", null, "NYPD" ]
  , [ "row-k39i_tsvy-ckf9", "00000000-0000-0000-E221-B8687164F426", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-02-07T00:00:00", "2017-06-07T00:00:00", "3311", "Police Officer", "2019-06-29T00:00:00", null, "NYPD" ]
  , [ "row-zqta.gvut~vyff", "00000000-0000-0000-8C72-0CD1F12D7C70", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-07T00:00:00", "2017-06-02T00:00:00", "6054", "Plan Examiner", "2021-02-22T00:00:00", null, "DCAS" ]
  , [ "row-nzae.grpe-c5zz", "00000000-0000-0000-501D-002D69291671", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-02-07T00:00:00", "2017-05-12T00:00:00", "2326", "Police Officer", "2018-07-02T00:00:00", null, "NYPD" ]
  , [ "row-ruqv~zajj-xffy", "00000000-0000-0000-CCCC-97D9445C6F0F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-07T00:00:00", "2017-04-07T00:00:00", "8098", "Train Operator", "2017-09-19T00:00:00", null, "DCAS" ]
  , [ "row-t9ic~r6wt-2qm9", "00000000-0000-0000-29FF-3477F03E8DAA", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-02-07T00:00:00", "2017-04-24T00:00:00", "6315", "Correction Officer", "2020-06-15T00:00:00", null, "DOC" ]
  , [ "row-ch8p_ukhp_mnyw", "00000000-0000-0000-0584-82E95C61AC67", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-07T00:00:00", "2017-06-30T00:00:00", "5039", "Principal Administrative Associate", null, null, "DCAS" ]
  , [ "row-2wdj-iit6_ik8z", "00000000-0000-0000-CD04-CCF2CF370D85", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-07T00:00:00", "2017-02-08T00:00:00", "7011", "Administrative Community Relations Specialist", null, null, "DCAS" ]
  , [ "row-gv82.xrax-5ybg", "00000000-0000-0000-6C08-41CAED5729D4", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Termination", "Human Resources Administration - HRA", "Closed", "2017-02-07T00:00:00", "2017-05-12T00:00:00", null, null, null, null, "HRA" ]
  , [ "row-q43e~4cw4_r2b7", "00000000-0000-0000-195C-65E955104299", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Probation - DOP", "Open", "2017-02-07T00:00:00", null, "6029", "Probation Officer", "2020-09-14T00:00:00", null, "DOP" ]
  , [ "row-ty2s.6qw7~aqbi", "00000000-0000-0000-A59D-6C68E21ACE75", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-06T00:00:00", "2017-04-05T00:00:00", "6050", "Estimator (General Construction)", null, null, "DCAS" ]
  , [ "row-36rg_tmqh~2y7f", "00000000-0000-0000-670A-54AB36C9327B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-06T00:00:00", "2017-08-31T00:00:00", "6042", "Construction Project Manager", null, null, "DCAS" ]
  , [ "row-793h~dar2~fem6", "00000000-0000-0000-27F5-83F340E4CCC3", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-02-03T00:00:00", "2017-11-09T00:00:00", "3318", "Police Officer", "2019-12-17T00:00:00", null, "NYPD" ]
  , [ "row-z855-bhdg~j7q3", "00000000-0000-0000-7BDD-4B42D55A9691", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-02-03T00:00:00", "2017-03-06T00:00:00", "3318", "Police Officer", "2019-12-17T00:00:00", null, "NYPD" ]
  , [ "row-fi7u-ftek.82pr", "00000000-0000-0000-66C5-8A5291B79049", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-03T00:00:00", "2017-12-14T00:00:00", "7035", "Administrative Director of Social Services", "2021-07-19T00:00:00", null, "DCAS" ]
  , [ "row-4q64.7bcg_dgay", "00000000-0000-0000-E00F-791625C96E5E", 0, 1515534308, null, 1515534308, null, "{ }", "Jurisdictional Issue", "Probationary Employee", "Transit Authority - NYCTA", "Open", "2017-02-03T00:00:00", "2017-02-06T00:00:00", null, null, null, null, "NYCTA" ]
  , [ "row-wxwg-74xd~g8fm", "00000000-0000-0000-5FF4-EFD9D2C526DB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-02-03T00:00:00", "2017-06-05T00:00:00", "6332", "Correction Officer", "2020-09-22T00:00:00", null, "DOC" ]
  , [ "row-9qup.w4qc_fip6", "00000000-0000-0000-0EA7-8634F0BBA200", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-03T00:00:00", "2017-08-24T00:00:00", "7035", "Administrative Director of Social Services", null, null, "DCAS" ]
  , [ "row-ujdx~seba.7tam", "00000000-0000-0000-FF0A-DE0B4500BF50", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Sanitation - DSNY", "Closed", "2017-02-02T00:00:00", "2017-06-29T00:00:00", "5001", "Sanitation Worker", "2020-03-16T00:00:00", null, "DSNY" ]
  , [ "row-er9d_hr92_wkyh", "00000000-0000-0000-8C5A-350F73DAD0F1", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-02-02T00:00:00", "2017-05-12T00:00:00", "3318", "Police Officer", "2019-12-17T00:00:00", null, "NYPD" ]
  , [ "row-3gab_kcs3-a96k", "00000000-0000-0000-B2A8-674A0D324524", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Open", "2017-02-02T00:00:00", null, "6332", "Correction Officer", "2020-09-22T00:00:00", null, "DOC" ]
  , [ "row-d8tc~p5wy_998e", "00000000-0000-0000-C7DF-04099DB7EC9C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-02-02T00:00:00", "2017-06-05T00:00:00", "6315", "Correction Officer", "2020-06-15T00:00:00", null, "DOC" ]
  , [ "row-ew5y-shnv_wesm", "00000000-0000-0000-9500-6880B26AEDAB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-02-02T00:00:00", "2017-03-16T00:00:00", "4300", "Police Officer", "2019-12-22T00:00:00", null, "NYPD" ]
  , [ "row-dscz.ujes-2t8q", "00000000-0000-0000-0BA5-BB019E272B4B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-02T00:00:00", "2017-09-08T00:00:00", "5044", "Research Assistant", "2021-02-01T00:00:00", null, "DCAS" ]
  , [ "row-ti27_gj74~xgu8", "00000000-0000-0000-1212-2F56EB4C0229", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-02T00:00:00", "2017-04-04T00:00:00", "6055", "Project Manager Intern", null, null, "DCAS" ]
  , [ "row-irnr~dbeu-eevm", "00000000-0000-0000-A347-0574FD855731", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-02-02T00:00:00", "2017-06-05T00:00:00", "6332", "Correction Officer", "2020-09-22T00:00:00", null, "DOC" ]
  , [ "row-phmt-chut.veri", "00000000-0000-0000-D138-0D000BD97176", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Environmental Protection - DEP", "Closed", "2017-02-02T00:00:00", "2017-03-29T00:00:00", "5332", "Environmental Police Officer", "2019-11-19T00:00:00", null, "DEP" ]
  , [ "row-6ugn_ehhw~nvp8", "00000000-0000-0000-3D6F-193906D54B50", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-02-01T00:00:00", "2017-06-05T00:00:00", "6332", "Correction Officer", "2020-09-22T00:00:00", null, "DOC" ]
  , [ "row-dn7i_xuvh~mm5u", "00000000-0000-0000-B832-3B516399E9AE", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Correction - DOC", "Closed", "2017-02-01T00:00:00", "2017-12-07T00:00:00", "6308", "Correction Officer", "2020-06-03T00:00:00", null, "DOC" ]
  , [ "row-pj9x-enuz_934x", "00000000-0000-0000-BD7D-87977291D12F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Score", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-01T00:00:00", "2017-08-21T00:00:00", "7035", "Administrative Director of Social Services", null, null, "DCAS" ]
  , [ "row-gwrr~ygbc.8jiw", "00000000-0000-0000-BFE8-6F502B2117AD", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-02-01T00:00:00", "2017-05-09T00:00:00", "6003", "Emergency Medical Specialist - EMT", "2020-02-24T00:00:00", null, "FDNY" ]
  , [ "row-nxui-dv9m_4zuj", "00000000-0000-0000-51FC-7E2D37160B46", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-01T00:00:00", "2017-08-24T00:00:00", "5044", "Research Assistant", "2021-02-01T00:00:00", null, "DCAS" ]
  , [ "row-hc4w-ipq9~3bnh", "00000000-0000-0000-F591-D7482C5687D2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-01T00:00:00", "2017-08-02T00:00:00", "5045", "Staff Analyst", "2020-08-10T00:00:00", null, "DCAS" ]
  , [ "row-2cjq_kezm_8me6", "00000000-0000-0000-E7CA-47449EAF7EF9", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-02-01T00:00:00", "2017-07-21T00:00:00", "5014", "Associate Staff Analyst", "2020-08-10T00:00:00", null, "DCAS" ]
  , [ "row-qqss_5cf5-6jjm", "00000000-0000-0000-CF47-C47FBC1E298F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-02-01T00:00:00", "2017-06-13T00:00:00", "6003", "Emergency Medical Specialist - EMT", "2020-02-24T00:00:00", null, "FDNY" ]
  , [ "row-gj9w-2ef4-qxaz", "00000000-0000-0000-FBAF-4F870357CC04", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-31T00:00:00", "2017-03-23T00:00:00", "8098", "Train Operator", "2017-09-19T00:00:00", null, "DCAS" ]
  , [ "row-vv55~652c-bzpp", "00000000-0000-0000-BB30-BCFD697BB723", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Sanitation - DSNY", "Closed", "2017-01-30T00:00:00", "2017-04-27T00:00:00", "5001", "Sanitation Worker", "2020-03-16T00:00:00", null, "DSNY" ]
  , [ "row-cpja_7v5w_xrad", "00000000-0000-0000-185A-C7647C259EB9", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-01-30T00:00:00", "2017-12-04T00:00:00", "4300", "Police Officer", "2019-12-22T00:00:00", null, "NYPD" ]
  , [ "row-9i2f-cszv_cmwa", "00000000-0000-0000-E0ED-2C194C599F1A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-30T00:00:00", "2017-02-06T00:00:00", "5010", "Administrative Manager", "2020-09-28T00:00:00", null, "DCAS" ]
  , [ "row-pjtk~wjca.vspq", "00000000-0000-0000-25B3-BFD4641B91C0", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-30T00:00:00", "2017-09-18T00:00:00", "5039", "Principal Administrative Associate", null, null, "DCAS" ]
  , [ "row-hfen_ckki_wcye", "00000000-0000-0000-2C79-7DF3EC99E3FB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-30T00:00:00", "2017-09-08T00:00:00", "7000", "Emergency Medical Specialist - EMT (Fire)", "2021-03-29T00:00:00", null, "DCAS" ]
  , [ "row-74pq.phxj~4wm3", "00000000-0000-0000-942D-DA5AD0FC6E93", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-30T00:00:00", "2017-09-19T00:00:00", "5039", "Principal Administrative Associate", null, null, "DCAS" ]
  , [ "row-7cda-ukki.bed5", "00000000-0000-0000-BDB7-5A2DCDC11C12", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Police Department - NYPD", "Closed", "2017-01-30T00:00:00", "2017-07-05T00:00:00", "3325", "School Safety Agent", "2019-08-19T00:00:00", null, "NYPD" ]
  , [ "row-um9e_t9nc~5wgm", "00000000-0000-0000-31A5-56E939578A10", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-01-30T00:00:00", "2017-05-16T00:00:00", "6332", "Correction Officer", "2020-09-22T00:00:00", null, "DOC" ]
  , [ "row-pjmy-ngjq_rtf7", "00000000-0000-0000-F3A1-BA39EF8A0C4C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-01-30T00:00:00", "2017-03-13T00:00:00", "4312", "Police Officer", "2020-06-22T00:00:00", null, "NYPD" ]
  , [ "row-tc6v-g4gt.6gyj", "00000000-0000-0000-2C4D-FF31FCCA12B9", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Correction - DOC", "Closed", "2017-01-30T00:00:00", "2017-09-22T00:00:00", "6315", "Correction Officer", "2020-06-15T00:00:00", null, "DOC" ]
  , [ "row-eis9-u33j_6ia5", "00000000-0000-0000-1B7A-8AFAE2AFA138", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-01-30T00:00:00", "2017-08-16T00:00:00", "6332", "Correction Officer", "2020-09-22T00:00:00", null, "DOC" ]
  , [ "row-uhva~nd33_zhvp", "00000000-0000-0000-20B5-B3C94F75D8EF", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-27T00:00:00", "2017-07-12T00:00:00", "5039", "Principal Administrative Associate", null, null, "DCAS" ]
  , [ "row-edas.x2yg~g9be", "00000000-0000-0000-1B0B-10D1CACD8375", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Open", "2017-01-27T00:00:00", null, "3309", "Police Officer", "2019-06-23T00:00:00", null, "NYPD" ]
  , [ "row-mdas.zj6j_kmqw", "00000000-0000-0000-32B9-A7E60355CA8C", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for Appeal Request", null, "Police Department - NYPD", "Closed", "2017-01-27T00:00:00", "2017-03-07T00:00:00", null, null, null, null, "NYPD" ]
  , [ "row-4fhr-angd-gnnz", "00000000-0000-0000-DA08-7AA997A8EEB9", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-01-26T00:00:00", "2017-06-08T00:00:00", "3314", "Police Officer", "2019-12-09T00:00:00", null, "NYPD" ]
  , [ "row-yfrx-ujer~qi7t", "00000000-0000-0000-D982-7253E15044C4", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-01-26T00:00:00", "2017-04-04T00:00:00", "6003", "Emergency Medical Specialist - EMT", "2020-02-24T00:00:00", null, "FDNY" ]
  , [ "row-7avd~4kzr~jadb", "00000000-0000-0000-5FEF-BD0A451A863B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-01-26T00:00:00", "2017-12-06T00:00:00", "4300", "Police Officer", "2019-12-22T00:00:00", null, "NYPD" ]
  , [ "row-qk2u.mkew_uud5", "00000000-0000-0000-8227-4C387D5D75FE", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "MTA New York City Transit - NYCT", "Closed", "2017-01-26T00:00:00", "2017-04-17T00:00:00", "5607", "Telephone Maintainer", null, null, "NYCT" ]
  , [ "row-fap8-v3gp.rstb", "00000000-0000-0000-1455-37E997E1DAE5", 0, 1515534308, null, 1515534308, null, "{ }", "Jurisdictional Issue", null, "Transit Authority - NYCTA", "Open", "2017-01-26T00:00:00", "2017-02-02T00:00:00", null, null, null, null, "NYCTA" ]
  , [ "row-qj9h~jkgr~zdg6", "00000000-0000-0000-1682-15E6A9A78123", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-01-25T00:00:00", "2017-05-03T00:00:00", "2302", "Police Officer", "2018-04-30T00:00:00", null, "NYPD" ]
  , [ "row-7c39.ibgc-5sh5", "00000000-0000-0000-2828-4A05B5DA61CB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-25T00:00:00", "2017-07-21T00:00:00", "6054", "Plan Examiner (Buildings)", null, null, "DCAS" ]
  , [ "row-fr7y~9ttm_j757", "00000000-0000-0000-CDF7-90B46F3257CE", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-25T00:00:00", "2017-06-30T00:00:00", "5011", "Administrative Staff Analyst", "2020-09-28T00:00:00", null, "DCAS" ]
  , [ "row-6ni4-wm7u_dvk4", "00000000-0000-0000-3CA4-E28ABBD343A7", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Transit Authority - NYCTA", "Closed", "2017-01-25T00:00:00", "2017-03-07T00:00:00", "5607", "Telephone Maintainer", null, null, "NYCTA" ]
  , [ "row-fck9_fcd9.v6nq", "00000000-0000-0000-3B81-55FCF8BBE6CD", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-25T00:00:00", "2017-06-02T00:00:00", "5039", "Principal Administrative Associate", null, null, "DCAS" ]
  , [ "row-gb3j_tzga-i6ew", "00000000-0000-0000-D211-653D8F20338D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Correction - DOC", "Open", "2017-01-25T00:00:00", null, "6315", "Correction Officer", "2020-06-15T00:00:00", null, "DOC" ]
  , [ "row-8q6k-s8be.7qev", "00000000-0000-0000-1DBF-7996FFF2BA44", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-01-24T00:00:00", "2017-07-20T00:00:00", "3309", "Police Officer", "2019-06-23T00:00:00", null, "NYPD" ]
  , [ "row-4tf9~ipxx~37s2", "00000000-0000-0000-5D80-CD88788B30D8", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Police Department - NYPD", "Open", "2017-01-24T00:00:00", null, null, null, null, null, "NYPD" ]
  , [ "row-8ac9~gwdg.2ry7", "00000000-0000-0000-97DB-38403C39BB68", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Eligibility", "Police Department - NYPD", "Closed", "2017-01-23T00:00:00", "2017-01-25T00:00:00", "4323", "Police Officer", null, null, "NYPD" ]
  , [ "row-7i8j~y7bk-rtsq", "00000000-0000-0000-66BD-74DF71696743", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", null, "Transit Authority - NYCTA", "Closed", "2017-01-23T00:00:00", "2017-03-29T00:00:00", null, null, null, null, "NYCTA" ]
  , [ "row-cpnb_pihy.qvpq", "00000000-0000-0000-2169-EF7334683731", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-01-23T00:00:00", "2017-05-25T00:00:00", "3308", "Police Officer", "2019-06-22T00:00:00", null, "NYPD" ]
  , [ "row-xizx~cu2v~usd4", "00000000-0000-0000-64E5-F6CBA6BA277D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-01-23T00:00:00", "2017-06-14T00:00:00", "3316", "Police Officer", "2019-12-14T00:00:00", null, "NYPD" ]
  , [ "row-2wyn.uu4r.9ti9", "00000000-0000-0000-AD50-57C9ECE2160B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-01-23T00:00:00", "2017-05-17T00:00:00", "4300", "Police Officer", "2019-12-22T00:00:00", null, "NYPD" ]
  , [ "row-g6ys.hnk9-w4ae", "00000000-0000-0000-4BC0-DA2AB3F1429F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-01-23T00:00:00", "2017-01-26T00:00:00", "6325", "Correction Officer", "2020-09-21T00:00:00", null, "DOC" ]
  , [ "row-j52n-fwbr~ma49", "00000000-0000-0000-E404-F90FE0236AF2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Unauthorized Substance", "Police Department - NYPD", "Closed", "2017-01-23T00:00:00", "2017-07-20T00:00:00", "4330", "School Safety Agent (SSA)", "2020-04-29T00:00:00", null, "NYPD" ]
  , [ "row-4q3y_iz3m-kvqd", "00000000-0000-0000-987A-DFE7F8BB7C24", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Eligibility", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-23T00:00:00", "2017-09-19T00:00:00", "5003", "Emergency Medical Specialist - EMT", "2019-02-18T00:00:00", null, "DCAS" ]
  , [ "row-eaqn.3632~z5t9", "00000000-0000-0000-9841-8CE1CD5D821D", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-23T00:00:00", "2017-08-29T00:00:00", "6043", "Construction Project Manager Intern", null, null, "DCAS" ]
  , [ "row-ia7e_garv_u34v", "00000000-0000-0000-CA32-D2F3B1BE02A0", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-01-23T00:00:00", "2017-05-17T00:00:00", "6332", "Correction Officer", "2020-09-22T00:00:00", null, "DOC" ]
  , [ "row-kacw~qdba~igit", "00000000-0000-0000-0B2C-E3E681BAA833", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-01-23T00:00:00", "2017-04-10T00:00:00", "5503", "Police Officer (Promotional)", "2019-11-25T00:00:00", null, "NYPD" ]
  , [ "row-27up.bvu7~5k7n", "00000000-0000-0000-EB2B-05E6A61D2786", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Correction - DOC", "Closed", "2017-01-23T00:00:00", "2017-09-08T00:00:00", "3303", "Correction Officer", "2019-06-03T00:00:00", null, "DOC" ]
  , [ "row-46a2-6zxy-n7ss", "00000000-0000-0000-3690-3806A123A9DA", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Parks and Recreation - DPR", "Closed", "2017-01-20T00:00:00", "2017-01-23T00:00:00", null, null, null, null, "DPR" ]
  , [ "row-n6b3~a66q-rpns", "00000000-0000-0000-B391-9DF78FF4DB99", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-01-20T00:00:00", "2017-05-16T00:00:00", "6325", "Correction Officer", "2020-09-21T00:00:00", null, "DOC" ]
  , [ "row-z6mi~nip3.xy5r", "00000000-0000-0000-3A5B-B2FDB232E682", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-20T00:00:00", "2017-03-20T00:00:00", "6006", "Heating Plant Technician (Housing Authority)", null, null, "DCAS" ]
  , [ "row-c55k.4m8h.2q9q", "00000000-0000-0000-00EE-B11C96964D68", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-01-20T00:00:00", "2017-05-17T00:00:00", "6315", "Correction Officer", "2020-06-15T00:00:00", null, "DOC" ]
  , [ "row-tyi4~jqzz-67vh", "00000000-0000-0000-F1B9-6D40AC00EF63", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-01-20T00:00:00", "2017-05-17T00:00:00", "6332", "Correction Officer", "2020-09-22T00:00:00", null, "DOC" ]
  , [ "row-rt4h-fgc2~4u6b", "00000000-0000-0000-FCFA-A76042370A2A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-01-20T00:00:00", "2017-06-14T00:00:00", "4300", "Police Officer", "2019-12-22T00:00:00", null, "NYPD" ]
  , [ "row-5giu-9k62~bhbv", "00000000-0000-0000-5501-CF501BFE618A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-01-20T00:00:00", "2017-05-08T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-3tp4.vuqm.kph3", "00000000-0000-0000-F53C-189B9910BDB8", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-01-20T00:00:00", "2017-05-17T00:00:00", "6315", "Correction Officer", "2020-06-15T00:00:00", null, "DOC" ]
  , [ "row-t26i.5aps.b5tc", "00000000-0000-0000-0365-31CA69A5E9C7", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-01-19T00:00:00", "2017-05-12T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-4vg9~4geh~yxbh", "00000000-0000-0000-1C56-43D0B361C228", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Department of Correction - DOC", "Closed", "2017-01-19T00:00:00", "2017-11-09T00:00:00", "6315", "Correction Officer", "2020-06-15T00:00:00", null, "DOC" ]
  , [ "row-ktx2-dms5.beq7", "00000000-0000-0000-52E9-6E036CD8D03F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Closed", "2017-01-19T00:00:00", "2017-06-06T00:00:00", "6315", "Correction Officer", "2020-06-15T00:00:00", null, "DOC" ]
  , [ "row-3g46_xgrs.qu7j", "00000000-0000-0000-B6F3-026C07532CD6", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Unauthorized Substance", "Police Department - NYPD", "Closed", "2017-01-19T00:00:00", "2017-07-14T00:00:00", "4321", "School Safety Agent", "2020-04-27T00:00:00", null, "NYPD" ]
  , [ "row-4tw6-2a29.5rbb", "00000000-0000-0000-525C-3DB37451C8C2", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Unauthorized Substance", "Police Department - NYPD", "Closed", "2017-01-19T00:00:00", "2017-07-14T00:00:00", "5319", "Traffic Enforcement Agent", "2019-10-28T00:00:00", null, "NYPD" ]
  , [ "row-nuz5_pric~y53h", "00000000-0000-0000-EDC2-8BE361B28F9B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Closed", "2017-01-19T00:00:00", "2017-05-17T00:00:00", "6308", "Correction Officer", "2020-03-02T00:00:00", null, "DOC" ]
  , [ "row-dpdu.2c6z-2k65", "00000000-0000-0000-C662-499A9F99387C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-19T00:00:00", "2017-06-02T00:00:00", "5039", "Principal Administrative Associate", null, null, "DCAS" ]
  , [ "row-59kr~7ujs~x7vu", "00000000-0000-0000-EF9D-267BE72BB9FA", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-01-19T00:00:00", "2017-05-16T00:00:00", "6332", "Correction Officer", "2020-09-22T00:00:00", null, "DOC" ]
  , [ "row-mr7p_4ame_x78a", "00000000-0000-0000-2C23-8E7E27568842", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Fire Department - FDNY", "Closed", "2017-01-19T00:00:00", "2017-04-17T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-y4kg-r56g~q4xf", "00000000-0000-0000-9609-EE486FCF6A4B", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-18T00:00:00", "2017-03-07T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-tvbj~pkkh~eyck", "00000000-0000-0000-A532-BE6A8AF38669", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Open", "2017-01-18T00:00:00", null, "5044", "Research Assistant", "2021-02-01T00:00:00", null, "DCAS" ]
  , [ "row-tkaq.45sc~qcdz", "00000000-0000-0000-FAED-C8497C28652C", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-01-18T00:00:00", "2017-07-06T00:00:00", "2344", "Police Officer", "2019-06-19T00:00:00", null, "NYPD" ]
  , [ "row-rccu.tpqr_3bjd", "00000000-0000-0000-7789-75B4FC6E4768", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-18T00:00:00", "2017-03-30T00:00:00", "6029", "Probation Officer", "2020-09-14T00:00:00", null, "DCAS" ]
  , [ "row-pzv5-ecuk~vbz6", "00000000-0000-0000-3FA3-52234F710F80", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-01-18T00:00:00", "2017-06-06T00:00:00", "6029", "Probation Officer", "2020-09-14T00:00:00", null, "DOC" ]
  , [ "row-dqtr~a272~hzdp", "00000000-0000-0000-16B6-9158046C88BF", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-18T00:00:00", "2017-06-30T00:00:00", "5039", "Principal Administrative Associate", null, null, "DCAS" ]
  , [ "row-g3rf-xgfd~utqa", "00000000-0000-0000-7A7B-EBD36EF04206", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-18T00:00:00", "2017-02-06T00:00:00", "5017", "Computer Programmer Analyst", null, null, "DCAS" ]
  , [ "row-3eve-grxe~y6tt", "00000000-0000-0000-42F1-51E43A6C8A89", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-01-18T00:00:00", "2017-06-16T00:00:00", "6332", "Correction Officer", "2020-09-22T00:00:00", null, "DOC" ]
  , [ "row-ndhe.zbr7~t389", "00000000-0000-0000-AABE-C2B1DC1A329A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-18T00:00:00", "2017-09-06T00:00:00", "5039", "Principal Administrative Associate", null, null, "DCAS" ]
  , [ "row-9wbk~2j5e-5p5v", "00000000-0000-0000-E4D5-D03A613673F6", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-18T00:00:00", "2017-03-23T00:00:00", "6029", "Probation Officer", "2020-09-14T00:00:00", null, "DCAS" ]
  , [ "row-trsa_miwe.7d4u", "00000000-0000-0000-80BA-88007E9981F7", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Closed", "2017-01-17T00:00:00", "2017-03-31T00:00:00", "6315", "Correction Officer", "2020-06-15T00:00:00", null, "DOC" ]
  , [ "row-hz69-3wc2~5xyw", "00000000-0000-0000-0D7E-B1A3848D9666", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-17T00:00:00", "2017-06-13T00:00:00", "5044", "Research Assistant", null, null, "DCAS" ]
  , [ "row-ca7b.qkzk_4rrp", "00000000-0000-0000-E1FE-D8C77133CD19", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Correction - DOC", "Closed", "2017-01-16T00:00:00", "2017-01-25T00:00:00", null, null, null, null, "DOC" ]
  , [ "row-uq8b_k23q.ismt", "00000000-0000-0000-2641-7B1742537E4F", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-14T00:00:00", "2017-01-25T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-smfk.9aui.2kwq", "00000000-0000-0000-8D2F-9826FD7E38F4", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-13T00:00:00", "2017-01-18T00:00:00", "6067", "City Planner", null, null, "DCAS" ]
  , [ "row-d5xu_wk32~r5ci", "00000000-0000-0000-7315-F6D274559EA4", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Department of Correction - DOC", "Closed", "2017-01-13T00:00:00", "2017-05-16T00:00:00", "6325", "Correction Officer", "2020-09-21T00:00:00", null, "DOC" ]
  , [ "row-5ssm_um39~mgbh", "00000000-0000-0000-FB66-D78F9A103C01", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-13T00:00:00", "2017-03-23T00:00:00", "6033", "Maintenance Worker", null, null, "DCAS" ]
  , [ "row-rewd~i25z-inwx", "00000000-0000-0000-C0FA-333CDDD3E8C5", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-13T00:00:00", "2017-03-23T00:00:00", "6006", "Heating Plant Technician", null, null, "DCAS" ]
  , [ "row-8cex-mj2t~w46g", "00000000-0000-0000-94A9-ECB0620CAB82", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-13T00:00:00", "2017-08-21T00:00:00", "6042", "Construction Project  Manager", null, null, "DCAS" ]
  , [ "row-7373.xcmd_kuwi", "00000000-0000-0000-2CA5-B99C1D67B1D1", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-13T00:00:00", "2017-04-12T00:00:00", "5017", "Computer Programmer Analyst Trainee", null, null, "DCAS" ]
  , [ "row-537p_bdm4_g8bh", "00000000-0000-0000-29A9-00D05458DF91", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-13T00:00:00", "2017-03-27T00:00:00", "6048", "Civil Engineering Intern", "2020-12-07T00:00:00", null, "DCAS" ]
  , [ "row-ydx5.24ec~qrq6", "00000000-0000-0000-A4BC-21DB2B3FFE80", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-13T00:00:00", "2017-04-26T00:00:00", "6047", "Health Services Manager", null, null, "DCAS" ]
  , [ "row-s4if-4z6y-txvz", "00000000-0000-0000-9320-BEC3D39C5A40", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-13T00:00:00", "2017-09-07T00:00:00", "6033", "Maintenance Worker", "2021-05-10T00:00:00", null, "DCAS" ]
  , [ "row-836d.fe53-439c", "00000000-0000-0000-D06C-6E0874673BA8", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-12T00:00:00", "2017-06-16T00:00:00", "6043", "Construction Project Manager Intern", null, null, "DCAS" ]
  , [ "row-5vmh.m9fp_6cph", "00000000-0000-0000-8541-1E3BCC1AA668", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-01-12T00:00:00", "2017-04-24T00:00:00", "2326", "Police Officer", "2018-07-02T00:00:00", null, "NYPD" ]
  , [ "row-8h7z_jb9t-cq85", "00000000-0000-0000-0195-A3BA7D679926", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-12T00:00:00", "2017-01-18T00:00:00", "6047", "Health Services Manager", null, null, "DCAS" ]
  , [ "row-fztq-hnqr~secw", "00000000-0000-0000-43E6-7D543E181D2B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-11T00:00:00", "2017-12-05T00:00:00", "6036", "Public Health Sanitarian", "2020-12-07T00:00:00", null, "DCAS" ]
  , [ "row-qtup-5jyy~vrp3", "00000000-0000-0000-1D6D-E9112CFBDF56", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-11T00:00:00", "2017-03-29T00:00:00", "6050", "Estimator (General Construction)", null, null, "DCAS" ]
  , [ "row-eaks_nvty_k2ej", "00000000-0000-0000-48D7-73362C9E2558", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-01-11T00:00:00", "2017-05-16T00:00:00", "4306", "Police Officer", "2019-12-23T00:00:00", null, "NYPD" ]
  , [ "row-wk7q~9fm4-rruf", "00000000-0000-0000-2F54-BCEC5263472F", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-11T00:00:00", "2017-01-25T00:00:00", "6047", "Health Services Manager", null, null, "DCAS" ]
  , [ "row-477i~3u88_7suy", "00000000-0000-0000-D4F7-9086D2B0E5CF", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-01-11T00:00:00", "2017-07-07T00:00:00", "3327", "School Safety Agent", "2019-09-10T00:00:00", null, "NYPD" ]
  , [ "row-z8v4~yueg-arep", "00000000-0000-0000-E7D4-E0095168EEBF", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Department of Correction - DOC", "Closed", "2017-01-11T00:00:00", "2017-06-06T00:00:00", "6315", "Correction Officer", "2020-06-15T00:00:00", null, "DOC" ]
  , [ "row-2acu~8b35_ev2q", "00000000-0000-0000-6C80-08A49EFA6094", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-10T00:00:00", "2017-03-23T00:00:00", "4064", "Masons Helper", "2019-12-23T00:00:00", null, "DCAS" ]
  , [ "row-iis9-frt5~s4t3", "00000000-0000-0000-B100-94DBFE6AA497", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-09T00:00:00", "2017-04-06T00:00:00", "8098", "Train Operator", "2017-09-19T00:00:00", null, "DCAS" ]
  , [ "row-ive4-3u4s~ecc9", "00000000-0000-0000-9AEA-D39A76B66EAE", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Police Department - NYPD", "Closed", "2017-01-09T00:00:00", "2017-03-03T00:00:00", "2050", "Police Officer", "2018-12-17T00:00:00", null, "NYPD" ]
  , [ "row-fetz-fjh6~96gr", "00000000-0000-0000-1C38-CDE73E97C2FC", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-01-09T00:00:00", "2017-02-14T00:00:00", "2050", "Police Officer", "2018-12-17T00:00:00", null, "NYPD" ]
  , [ "row-6mix.i9id_kv7j", "00000000-0000-0000-8B07-89F961A430D6", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Police Department - NYPD", "Closed", "2017-01-09T00:00:00", "2017-03-31T00:00:00", "2344", "Police Officer", "2019-06-19T00:00:00", null, "NYPD" ]
  , [ "row-sn6y.r2f4-z55i", "00000000-0000-0000-1F6F-53F1F4BCABAD", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-09T00:00:00", "2017-03-07T00:00:00", null, null, null, null, "DCAS" ]
  , [ "row-a7mq-fk4k.wzge", "00000000-0000-0000-CF94-7A9F00B74250", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-09T00:00:00", "2017-03-10T00:00:00", "5022", "Education Officer", null, null, "DCAS" ]
  , [ "row-fz5r-2ysi.ahe9", "00000000-0000-0000-F166-FD809F0788D7", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-09T00:00:00", "2017-03-31T00:00:00", "5015", "Bookkeeper", "2020-04-27T00:00:00", null, "DCAS" ]
  , [ "row-7qdj~4u3y~znh9", "00000000-0000-0000-E056-2C72DAFF9EBB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 76", "Termination", "Human Resources Administration - HRA", "Closed", "2017-01-09T00:00:00", "2017-03-30T00:00:00", null, null, null, null, "HRA" ]
  , [ "row-vxw2~arni.6w56", "00000000-0000-0000-C6D0-AD3B68386BD6", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Department of Correction - DOC", "Closed", "2017-01-06T00:00:00", "2017-01-18T00:00:00", null, null, null, null, "DOC" ]
  , [ "row-jmpm.irc8~nrfq", "00000000-0000-0000-E2A1-55D8DFA79AEF", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Eligibility", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-06T00:00:00", "2017-09-13T00:00:00", "7501", "Promotion to Firefighter", null, null, "DCAS" ]
  , [ "row-qv6p.badm.y8kq", "00000000-0000-0000-46D6-C6006CEF3E6E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-06T00:00:00", "2017-07-20T00:00:00", "6033", "Maintenance Worker", "2021-05-10T00:00:00", null, "DCAS" ]
  , [ "row-q8nw.qjpx-cjxu", "00000000-0000-0000-BDA5-F4829A4A5383", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Fire Department - FDNY", "Closed", "2017-01-06T00:00:00", "2017-03-29T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-u67p~kabp-gng6", "00000000-0000-0000-1A90-7517F3E4E9DC", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-01-06T00:00:00", "2017-05-12T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-ryy6~vxyt~xh5m", "00000000-0000-0000-EA6E-6BD92A9D3CAB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-06T00:00:00", "2017-07-20T00:00:00", "6033", "Maintenance Worker", "2021-05-10T00:00:00", null, "DCAS" ]
  , [ "row-grv3~ypwh.9nek", "00000000-0000-0000-C1C0-25515773E824", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-06T00:00:00", "2017-10-03T00:00:00", "5013", "Associate Project Manager", "2020-10-05T00:00:00", null, "DCAS" ]
  , [ "row-c5vk~pqz8_qj5d", "00000000-0000-0000-40B9-73EA47307FB6", 0, 1515534308, null, 1515534308, null, "{ }", "Waiting for DQ", null, "Other - OTH", "Closed", "2017-01-06T00:00:00", "2017-03-07T00:00:00", null, null, null, null, "OTH" ]
  , [ "row-hr5k~z4bc.zpqx", "00000000-0000-0000-A8A7-65338B1CA520", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-05T00:00:00", "2017-02-07T00:00:00", "6043", "Construction Project Manager Intern", null, null, "DCAS" ]
  , [ "row-hhpr-tc94-bnad", "00000000-0000-0000-2F0D-2AD3DC2492EC", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Unauthorized Substance", "Police Department - NYPD", "Closed", "2017-01-05T00:00:00", "2017-06-15T00:00:00", "4330", "School Safety Agent", "2020-04-29T00:00:00", null, "NYPD" ]
  , [ "row-kg7s_vdch-fnh5", "00000000-0000-0000-398E-887976660546", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-01-05T00:00:00", "2017-03-28T00:00:00", "3048", "Police Officer", "2019-12-11T00:00:00", null, "NYPD" ]
  , [ "row-afv3.m4u8~ymkv", "00000000-0000-0000-566C-1592DCCB4C75", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-01-05T00:00:00", "2017-06-13T00:00:00", "4004", "Emerg.Med.Spec.-EMT", "2018-02-19T00:00:00", null, "FDNY" ]
  , [ "row-pg3r_6p36~tng7", "00000000-0000-0000-5A6D-F1AD5FC9516E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-04T00:00:00", "2017-03-30T00:00:00", "5010", "Administrative Manager", "2020-09-28T00:00:00", null, "DCAS" ]
  , [ "row-mhvg-2bmn-3tfh", "00000000-0000-0000-1A74-CCEC9576935E", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-04T00:00:00", "2017-12-14T00:00:00", "6042", "Construction Project Manager", null, null, "DCAS" ]
  , [ "row-3qfq-qunt~mtrn", "00000000-0000-0000-A9A9-336062E807CB", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-04T00:00:00", "2017-06-30T00:00:00", "5011", "Administrative Staff Analyst", "2020-09-28T00:00:00", null, "DCAS" ]
  , [ "row-ddge.jxsj.khp2", "00000000-0000-0000-4CB1-8CB0E0E0077B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Administration for Children's Services - ACS", "Closed", "2017-01-04T00:00:00", "2017-05-11T00:00:00", "4317", "Child Protective Specialist", "2020-05-06T00:00:00", null, "ACS" ]
  , [ "row-5duw_3fx3-xszj", "00000000-0000-0000-094D-729340F44B55", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Character", "Fire Department - FDNY", "Closed", "2017-01-03T00:00:00", "2017-05-04T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-5brn-tbjj_vycm", "00000000-0000-0000-5214-FE90ADAACB1C", 0, 1515534308, null, 1515534308, null, "{ }", "Jurisdictional Issue", null, "Other - OTH", "Closed", "2017-01-03T00:00:00", "2017-01-09T00:00:00", null, null, null, null, "OTH" ]
  , [ "row-uc5x_gzfk.stw8", "00000000-0000-0000-F7EF-9D3493DE603A", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Psych", "Police Department - NYPD", "Closed", "2017-01-03T00:00:00", "2017-12-06T00:00:00", "3317", "Police Officer", "2019-12-16T00:00:00", null, "NYPD" ]
  , [ "row-iyue_q8hm_vbbt", "00000000-0000-0000-F29A-625F3C0CA45B", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Medical", "Fire Department - FDNY", "Closed", "2017-01-03T00:00:00", "2017-04-06T00:00:00", "2000", "Firefighter", "2017-06-26T00:00:00", null, "FDNY" ]
  , [ "row-v93h~m3xd_64g8", "00000000-0000-0000-1D06-A4D03EA595C3", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Timeliness", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-03T00:00:00", "2017-03-23T00:00:00", "6036", "Public Health Sanitarian", "2020-12-07T00:00:00", null, "DCAS" ]
  , [ "row-9i8i~y5ch_ghpt", "00000000-0000-0000-CDD8-A5098E6FF2F7", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-03T00:00:00", "2017-06-30T00:00:00", "5017", "Computer Programmer Analyst Trainee", null, null, "DCAS" ]
  , [ "row-x6am.jkdc-3udz", "00000000-0000-0000-AAFA-534108C6F5A4", 0, 1515534308, null, 1515534308, null, "{ }", "Section 50", "Education and Experience", "Department of Citywide Administrative Services - DCAS", "Closed", "2017-01-03T00:00:00", "2017-03-21T00:00:00", "6042", "Construction Project Manager", null, null, "DCAS" ]
   ]
  };


//   console.log(obj.data[0][10]);
 function alphabetizeLine10(object) {
    let arr = [];

    for(let i = 0; i < object.data.length; i++) {
        arr.push(obj.data[i][10]);
    }

   let newArr = arr.sort((a,b)=>a.localeCompare(b));
   return newArr;
  //  let uniqueChars = [...new Set(newArr)];
  //  return uniqueChars.length;
  // return uniqueChars;
    // // return RTCRtpReceiv
    // for (let i = 0; i < arr.length; i++) {
    //     arr = arr.sort((a,b)=>a-b);
    //     // console.log(`${arr[i]}\n`);
    // }
 }
 console.log(alphabetizeLine10(obj));


 function uniqueLine10(object) {
   let arr = [];

    for(let i = 0; i < object.data.length; i++) {
        arr.push(obj.data[i][10]);
    }

    let newArr = arr.sort((a,b)=>a.localeCompare(b));
    let uniqueChars = [...new Set(newArr)];
    console.log(uniqueChars.length);
    return uniqueChars;
    

 }
 console.log(uniqueLine10(obj));