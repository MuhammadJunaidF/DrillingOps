using PlanningPortal.Domain.Common;

namespace PlanningPortal.Application.Common.Interfaces;

public interface IDomainEventService
{
    Task Publish(DomainEvent domainEvent);
}
