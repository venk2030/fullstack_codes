workspace {

    model {
        user = person "User"
        frontend = softwareSystem "Frontend" {
            web = container "HTML + JS" "Client side event collection" ""
        }

        backend = softwareSystem "Backend" {
            django = container "Django + DRF" "Handles /track API" "Python + Django"
            celery = container "Celery Worker" "Batch processing & forwarding" "Celery + Redis"
            db = container "PostgreSQL" "Event storage" "Postgres"
        }

        ga4 = softwareSystem "Google Analytics 4" "External analytics system"

        user -> web "Clicks CTA"
        web -> django "POST /track (event)"
        django -> db "Store raw event"
        django -> celery "Queue event forwarding"
        celery -> ga4 "Send event via MP API"
    }

    views {
        systemContext backend "MVP1 System Context" {
            include *
            autolayout lr
        }
        container backend "MVP1 Container View" {
            include *
            autolayout lr
        }
    }
}
