namespace PlanningPortal.Application.Repositories;

public interface IGenericRepositoryAsync<T> where T : class
{
    Task<T?> GetByIdAsync(long id);

    Task<IReadOnlyList<T>> GetAllAsync();

    IQueryable<T> GetAllQueryable();

    Task<IReadOnlyList<T>> GetPagedResponseAsync(int pageNumber, int pageSize);

    Task<T> AddAsync(T entity);

    Task AddAsync(List<T> entities);

    Task UpdateAsync(T entity);

    Task UpdateBulkAsync(List<T> entities);

    Task DeleteAsync(T entity);
}

