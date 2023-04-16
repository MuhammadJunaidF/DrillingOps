using DrillingOps.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace PlanningPortal.Application.Common.Interfaces;

public interface IApplicationDbContext
{
    DbSet<Event> Event { get; set; }
    DbSet<EventDetails> EventDetails { get; set; }

    Task<int> SaveChangesAsync();
    int SaveChanges();
    DbSet<TEntity> Set<TEntity>() where TEntity : class;
}
