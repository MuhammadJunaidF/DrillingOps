using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DrillingOps.Application.Repositories;
using DrillingOps.Domain.Entities;
using PlanningPortal.Application.Repositories;
using PlanningPortal.Infrastructure.Persistance.Repository;
using PlanningPortal.Infrastructure.Persistence;

namespace DrillingOps.Infrastructure.Persistance.Repository;

public class DrillEventRepositoryAsync : GenericRepositoryAsync<EventDetails>, IDrillEventRepositoryAsync
{
    private readonly ApplicationDbContext _dbContext;

    public DrillEventRepositoryAsync(ApplicationDbContext dbContext) : base(dbContext)
    {
        _dbContext = dbContext;
    }
}
