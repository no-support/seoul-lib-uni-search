/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function Tab({ data }) {
  const [activeTab, setActiveTab] = useState('gangseo');

  return (
    <div className="rounded-lg border bg-background shadow-sm">
      <div className="flex border-b">
        <button
          className={`flex-1 rounded-t-lg px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === 'gangseo'
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:bg-muted/40'
          }`}
          onClick={() => setActiveTab('gangseo')}
        >
          강서구
        </button>
        <button
          className={`flex-1 rounded-t-lg px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === 'gangbuk'
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:bg-muted/40'
          }`}
          onClick={() => setActiveTab('gangbuk')}
        >
          강북구
        </button>
        <button
          className={`flex-1 rounded-t-lg px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === 'guro'
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:bg-muted/40'
          }`}
          onClick={() => setActiveTab('guro')}
        >
          구로구
        </button>
        <button
          className={`flex-1 rounded-t-lg px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === 'geumcheon'
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:bg-muted/40'
          }`}
          onClick={() => setActiveTab('geumcheon')}
        >
          금천구
        </button>
        <button
          className={`flex-1 rounded-t-lg px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === 'nowon'
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:bg-muted/40'
          }`}
          onClick={() => setActiveTab('nowon')}
        >
          노원구
        </button>
        <button
          className={`flex-1 rounded-t-lg px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === 'seocho'
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:bg-muted/40'
          }`}
          onClick={() => setActiveTab('seocho')}
        >
          서초구
        </button>
        <button
          className={`flex-1 rounded-t-lg px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === 'eunpyeong'
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:bg-muted/40'
          }`}
          onClick={() => setActiveTab('eunpyeong')}
        >
          은평구
        </button>
      </div>
      <div className="p-6">
        {activeTab === 'gangseo' && (
          <div>
            <ul className="flex flex-col gap-2">
              {data &&
                data[0]?.gangseo?.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <img src={`${item.coverUrl}`} width={75} height={110} />
                    <span>{item.originalTitle}</span> |
                    <span>{item.author}</span> |
                    <span>{item.originalPublisher}</span> |
                    <span>{item.pubYear}</span> |<span>{item.loanStatus}</span>{' '}
                    |<span>{item.libName}</span> |
                    <span>{item.shelfLocName}</span> |<span>{item.callNo}</span>
                  </li>
                ))}
            </ul>
          </div>
        )}
        {activeTab === 'gangbuk' && (
          <div>
            <ul className="flex flex-col gap-2">
              {data &&
                data[1]?.gangbuk?.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <img src={item.cover} width={75} height={110} />
                    <span>{item.title}</span> |<span>{item.author}</span> |
                    <span>{item.publisher}</span> |<span>{item.pubYear}</span> |
                    <span>대출 가능 여부: - </span> |<span>{item.libName}</span>{' '}
                    |<span>{item.dataRoom}</span> |<span>청구기호: - </span>
                  </li>
                ))}
            </ul>
          </div>
        )}
        {activeTab === 'guro' && (
          <div>
            <ul className="flex flex-col gap-2">
              {data &&
                data[2]?.guro?.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <img src={item.thumbnailUrl} width={75} height={110} />
                    <span>{item.titleStatement}</span> |
                    <span>{item.author}</span> |<span>{item.publication}</span>{' '}
                    |<span>{item.branchVolumes[0]?.cState}</span> |
                    <span>{item.branchVolumes[0]?.name}</span> |
                    <span>{item.branchVolumes[0]?.volume}</span> |
                  </li>
                ))}
            </ul>
          </div>
        )}
        {activeTab === 'geumcheon' && (
          <div>
            <ul className="flex flex-col gap-2">
              {data &&
                data[3]?.geumcheon?.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <img src={item.coverUrl} width={75} height={110} />
                    <span>{item.originalTitle}</span> |
                    <span>{item.author}</span> |
                    <span>{item.originalPublisher}</span> |
                    <span>{item.workingStatus}</span> |
                    <span>{item.shelfLocName}</span> |<span>{item.callNo}</span>
                  </li>
                ))}
            </ul>
          </div>
        )}
        {activeTab === 'nowon' && (
          <div>
            <ul className="flex flex-col gap-2">
              {data &&
                data[4]?.nowon?.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <img src={item.coverUrl} width={75} height={110} />
                    <span>{item.originalTitle}</span> |
                    <span>{item.author}</span> |<span>{item.publisher}</span> |
                    <span>{item.pubYear}</span> |<span>{item.libName}</span> |
                    <span>청구기호: - </span>
                  </li>
                ))}
            </ul>
          </div>
        )}
        {activeTab === 'seocho' && (
          <div>
            <ul className="flex flex-col gap-2">
              {data &&
                data[5]?.seocho?.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <img src={item.coverUrl} width={75} height={110} />
                    <span>{item.originalTitle}</span> |
                    <span>{item.author}</span> |
                    <span>{item.originalPublisher}</span> |
                    <span>{item.pubYear}</span> |
                    <span>{item.shelfLocName}</span> |<span>{item.callNo}</span>
                  </li>
                ))}
            </ul>
          </div>
        )}
        {activeTab === 'eunpyeong' && (
          <div>
            <ul className="flex flex-col gap-2">
              {data &&
                data[6]?.eunpyeong?.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <img src={item.coverUrl} width={75} height={110} />
                    <span>
                      {item.title.replace(
                        /<span class='highlight word'>(.*?)<\/span>/g,
                        '$1'
                      )}
                    </span>{' '}
                    |<span>{item.author}</span> |<span>{item.publisher}</span> |
                    <span>{item.pubYear}</span> |
                    <span>{item.libName.join(', ')}</span> |
                    <span>청구기호: - </span>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
